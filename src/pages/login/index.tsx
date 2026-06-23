import { useState } from 'react'
import { Input, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Card from '@/components/Card'
import PrimaryButton from '@/components/PrimaryButton'
import { loginWithPassword, registerWithPassword } from '@/services/auth'
import { useAuthStore } from '@/store/auth'
import styles from './index.module.scss'

function LoginPage() {
  const { setToken } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (mode: 'login' | 'register') => {
    if (loading) return
    if (process.env.TARO_ENV !== 'h5') {
      Taro.showToast({ title: '当前页面仅用于 H5 登录', icon: 'none' })
      return
    }

    const usernameValue = username.trim()
    const passwordValue = password.trim()
    if (!usernameValue) {
      Taro.showToast({ title: '请输入用户名', icon: 'none' })
      return
    }
    if (passwordValue.length < 6) {
      Taro.showToast({ title: '密码至少 6 位', icon: 'none' })
      return
    }

    setLoading(true)
    try {
      const authFn = mode === 'login' ? loginWithPassword : registerWithPassword
      const res = await authFn({ username: usernameValue, password: passwordValue })
      setToken(res.access_token)
      Taro.showToast({ title: mode === 'login' ? '登录成功' : '注册成功', icon: 'success' })
      Taro.switchTab({ url: '/pages/index/index' })
    } catch (e) {
      console.error('[Login] submit failed', { mode, e })
      Taro.showToast({ title: mode === 'login' ? '登录失败' : '注册失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.title}>轻记</Text>
        <Text className={styles.subtitle}>先以网页端为主，使用账号密码登录即可开始使用。</Text>
      </View>

      <Card>
        <View className={styles.form}>
          <Input
            className={styles.input}
            value={username}
            onInput={(e) => setUsername(e.detail.value)}
            placeholder="用户名"
          />
          <Input
            className={styles.input}
            value={password}
            password
            onInput={(e) => setPassword(e.detail.value)}
            placeholder="密码（至少 6 位）"
          />
          <View className={styles.buttonGap}>
            <PrimaryButton text={loading ? '处理中…' : '登录'} disabled={loading} onClick={() => submit('login')} />
          </View>
          <View className={styles.buttonGap}>
            <PrimaryButton
              text={loading ? '处理中…' : '注册并登录'}
              disabled={loading}
              onClick={() => submit('register')}
            />
          </View>
          <Text className={styles.tip}>微信小程序登录链路仍保留，但当前 H5 会优先走账号密码登录。</Text>
        </View>
      </Card>
    </View>
  )
}

export default LoginPage
