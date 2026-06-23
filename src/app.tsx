import React, { useEffect } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { loginWithWechatCode } from '@/services/auth'
import { useAuthStore } from '@/store/auth'
import './app.scss'

interface AppProps {
  children: React.ReactNode
}

function App(props: AppProps) {
  const { token, setToken } = useAuthStore()

  const doLogin = async () => {
    if (token) return
    try {
      const res = await loginWithWechatCode()
      setToken(res.access_token)
      console.info('[Auth] login success')
    } catch (e) {
      console.error('[Auth] login failed', e)
      Taro.showToast({ title: '登录失败，请检查后端地址', icon: 'none' })
    }
  }

  useEffect(() => {
    doLogin()

    if (process.env.TARO_ENV === 'weapp') {
      const getRoute = () => {
        try {
          const pages = Taro.getCurrentPages()
          const last = pages[pages.length - 1] as unknown as { route?: string }
          return last?.route || 'unknown'
        } catch (e) {
          console.error('[Weapp] getCurrentPages failed', e)
          return 'unknown'
        }
      }

      Taro.onError((msg) => {
        console.error('[Weapp] onError', { route: getRoute(), msg })
        Taro.showToast({ title: '页面异常，请看控制台日志', icon: 'none' })
      })

      Taro.onUnhandledRejection((res) => {
        console.error('[Weapp] onUnhandledRejection', { route: getRoute(), res })
      })

      Taro.onPageNotFound((res) => {
        console.error('[Weapp] onPageNotFound', res)
        Taro.showToast({ title: '页面未找到，请重新编译', icon: 'none' })
      })
    }

    if (process.env.TARO_ENV === 'h5' && typeof window !== 'undefined') {
      let reloading = false
      const shouldReload = (err: unknown) => {
        const name = typeof (err as { name?: unknown })?.name === 'string' ? (err as { name: string }).name : ''
        const message =
          typeof (err as { message?: unknown })?.message === 'string' ? (err as { message: string }).message : ''
        return name === 'ChunkLoadError' || message.includes('Loading chunk') || message.includes('Loading CSS chunk')
      }

      const onError = (e: Event) => {
        const err = (e as unknown as { error?: unknown }).error
        if (reloading) return
        if (!shouldReload(err)) return
        reloading = true
        console.error('[H5] chunk load failed, reloading', err)
        Taro.showToast({ title: '资源已更新，正在刷新', icon: 'none' })
        setTimeout(() => window.location.reload(), 300)
      }

      const onRejection = (e: PromiseRejectionEvent) => {
        const err = e.reason
        if (reloading) return
        if (!shouldReload(err)) return
        reloading = true
        console.error('[H5] chunk load rejected, reloading', err)
        Taro.showToast({ title: '资源已更新，正在刷新', icon: 'none' })
        setTimeout(() => window.location.reload(), 300)
      }

      window.addEventListener('error', onError)
      window.addEventListener('unhandledrejection', onRejection)
      return () => {
        window.removeEventListener('error', onError)
        window.removeEventListener('unhandledrejection', onRejection)
      }
    }
  }, [])

  useDidShow(() => {
    doLogin()
  })

  return props.children
}

export default App
