import React, { useMemo, useState } from 'react'
import { Input, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Card from '@/components/Card'
import Cell from '@/components/Cell'
import PrimaryButton from '@/components/PrimaryButton'
import { loginWithWechatCode } from '@/services/auth'
import { useAuthStore } from '@/store/auth'
import { useSettingsStore } from '@/store/settings'
import styles from './index.module.scss'

function MinePage() {
  const { token, setToken, logout } = useAuthStore()
  const { baseUrl, setBaseUrl } = useSettingsStore()
  const [editingBaseUrl, setEditingBaseUrl] = useState(baseUrl)

  const shortToken = useMemo(() => {
    if (!token) return '未登录'
    return `${token.slice(0, 10)}...${token.slice(-6)}`
  }, [token])

  const saveBaseUrl = () => {
    setBaseUrl(editingBaseUrl.trim())
    Taro.showToast({ title: '已保存', icon: 'success' })
  }

  const goRecurring = () => {
    Taro.navigateTo({ url: '/pages/recurringTemplates/index' })
  }

  const goExport = () => {
    Taro.navigateTo({ url: '/pages/exportCsv/index' })
  }

  const goTransactions = () => {
    Taro.navigateTo({ url: '/pages/transactions/index' })
  }

  const goTransfer = () => {
    Taro.navigateTo({ url: '/pages/transfer/index' })
  }

  const relogin = async () => {
    try {
      const res = await loginWithWechatCode()
      setToken(res.access_token)
      Taro.showToast({ title: '登录成功', icon: 'success' })
    } catch (e) {
      console.error('[Mine] relogin failed', e)
      Taro.showToast({ title: '登录失败', icon: 'none' })
    }
  }

  return (
    <View className={styles.container}>
      <Text className={styles.title}>我的</Text>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>快捷入口</Text>
        <Card>
          <Cell title="账单列表" desc="搜索与筛选" onClick={goTransactions} />
          <Cell title="转账" desc="账户之间划转" onClick={goTransfer} />
          <Cell title="周期性账单" desc="创建模板、生成待确认、确认入账" onClick={goRecurring} />
          <Cell title="导出 CSV" desc="按日期范围导出账单" onClick={goExport} />
        </Card>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>后端地址</Text>
        <Input
          className={styles.input}
          value={editingBaseUrl}
          onInput={(e) => setEditingBaseUrl(e.detail.value)}
          placeholder="例如 https://api.example.com/api/v1"
        />
        <Text className={styles.tip}>
          真机调试不能访问 localhost；只有本机微信开发者工具联调时才建议填 http://localhost:8000/api/v1。
        </Text>
        <View className={styles.btnRow}>
          <View className={styles.half}>
            <PrimaryButton text="保存" size="sm" onClick={saveBaseUrl} />
          </View>
          <View className={styles.half}>
            <PrimaryButton text="重新登录" size="sm" onClick={relogin} />
          </View>
        </View>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>登录状态</Text>
        <Card>
          <Cell title="Token" desc={shortToken} />
        </Card>
        <View className={styles.btnRow}>
          <PrimaryButton
            text="退出登录"
            size="sm"
            onClick={() => {
              logout()
              Taro.showToast({ title: '已退出', icon: 'success' })
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default MinePage
