import Taro from '@tarojs/taro'
import { useAuthStore } from '@/store/auth'
import { useSettingsStore } from '@/store/settings'
import { toQueryString } from '@/utils/query'

export async function downloadCsv(start: string, end: string): Promise<string> {
  const { token } = useAuthStore.getState()
  const { baseUrl } = useSettingsStore.getState()

  const qs = toQueryString({ start, end })
  const url = `${baseUrl}/export/csv${qs}`

  const res = await Taro.downloadFile({
    url,
    header: token ? { Authorization: `Bearer ${token}` } : {}
  })

  if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300 && res.tempFilePath) {
    return res.tempFilePath
  }

  console.error('[Export] download failed', { url, statusCode: res.statusCode })
  throw new Error('download_failed')
}

