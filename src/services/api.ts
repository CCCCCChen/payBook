import Taro from '@tarojs/taro'
import { useAuthStore } from '@/store/auth'
import { useSettingsStore } from '@/store/settings'

export interface ApiError extends Error {
  statusCode?: number
  data?: unknown
}

let shownLocalhostHint = false
let shownHttpsHttpHint = false
let shownWeappLocalhostHint = false

function getErrorInfo(e: unknown) {
  if (e instanceof Error) {
    return {
      name: e.name,
      message: e.message,
      stack: e.stack
    }
  }
  return { message: String(e) }
}

function maybeHintLocalhost(url: string) {
  const isLocal =
    url.includes('http://localhost') ||
    url.includes('https://localhost') ||
    url.includes('http://127.0.0.1') ||
    url.includes('https://127.0.0.1')
  if (!isLocal) return
  if (shownLocalhostHint) return

  const isH5 = process.env.TARO_ENV === 'h5'
  if (!isH5) return

  shownLocalhostHint = true
  Taro.showToast({ title: '当前预览环境无法访问 localhost，请改用公网 HTTPS 后端', icon: 'none', duration: 2500 })
}

function maybeRejectWeappRealDeviceLocalhost(url: string) {
  const isWeapp = process.env.TARO_ENV === 'weapp'
  if (!isWeapp) return

  const isLocal =
    url.includes('http://localhost') ||
    url.includes('https://localhost') ||
    url.includes('http://127.0.0.1') ||
    url.includes('https://127.0.0.1')
  if (!isLocal) return

  const systemInfo = Taro.getSystemInfoSync()
  const isDevtools = systemInfo.platform === 'devtools'
  if (isDevtools) return

  if (!shownWeappLocalhostHint) {
    shownWeappLocalhostHint = true
    Taro.showToast({ title: '真机不能访问 localhost，请改为公网 HTTPS 后端', icon: 'none', duration: 2500 })
  }

  const err = new Error('weapp_real_device_localhost_unreachable')
  ;(err as ApiError).data = { platform: systemInfo.platform, url }
  throw err
}

function maybeHintHttpsHttpMixedContent(url: string) {
  const isH5 = process.env.TARO_ENV === 'h5'
  if (!isH5) return
  if (shownHttpsHttpHint) return
  if (typeof window === 'undefined') return
  if (window.location.protocol !== 'https:') return
  if (!url.startsWith('http://')) return

  shownHttpsHttpHint = true
  Taro.showToast({ title: 'HTTPS 预览无法请求 HTTP 接口，请改用 HTTPS 后端', icon: 'none', duration: 2500 })
}

export async function apiRequest<T>(path: string, options?: Partial<Taro.request.Option>): Promise<T> {
  const { token } = useAuthStore.getState()
  const { baseUrl } = useSettingsStore.getState()

  const url = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
  try {
    maybeRejectWeappRealDeviceLocalhost(url)

    const resp = await Taro.request<T>({
      url,
      method: options?.method ?? 'GET',
      data: options?.data,
      timeout: options?.timeout ?? 10000,
      header: {
        ...(options?.header ?? {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      }
    })

    if (resp.statusCode >= 200 && resp.statusCode < 300) {
      return resp.data as T
    }

    const err: ApiError = new Error('request_failed')
    err.statusCode = resp.statusCode
    err.data = resp.data
    console.error('[API] request failed', { url, statusCode: resp.statusCode, data: resp.data })
    throw err
  } catch (e) {
    maybeHintHttpsHttpMixedContent(url)
    maybeHintLocalhost(url)
    const errInfo = getErrorInfo(e)
    if (String(errInfo.message || '').toLowerCase().includes('timeout')) {
      Taro.showToast({ title: '接口请求超时，请检查后端是否可访问', icon: 'none', duration: 2500 })
    }
    console.error('[API] request error', { url, error: errInfo })
    throw e
  }
}

