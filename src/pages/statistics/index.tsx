import React, { useEffect, useMemo, useState } from 'react'
import { Text, View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import dayjs from 'dayjs'
import Card from '@/components/Card'
import Cell from '@/components/Cell'
import { getAccountBalances, getCategoryPie, getSummary } from '@/services/statistics'
import type { AccountBalanceItem, StatisticsCategoryItem, StatisticsSummary } from '@/types/api'
import styles from './index.module.scss'

function StatisticsPage() {
  const month = dayjs().format('YYYY-MM')
  const start = dayjs().startOf('month').format('YYYY-MM-DD')
  const end = dayjs().endOf('month').format('YYYY-MM-DD')

  const [summary, setSummary] = useState<StatisticsSummary | null>(null)
  const [cats, setCats] = useState<StatisticsCategoryItem[]>([])
  const [balances, setBalances] = useState<AccountBalanceItem[]>([])

  const totalExpense = useMemo(() => cats.reduce((acc, it) => acc + Number(it.amount || 0), 0), [cats])

  const refresh = async () => {
    try {
      const [s, c, b] = await Promise.all([getSummary(month), getCategoryPie(start, end), getAccountBalances()])
      setSummary(s)
      setCats((c.items || []).slice(0, 10))
      setBalances((b.items || []).slice(0, 8))
    } catch (e) {
      console.error('[Statistics] refresh failed', e)
      Taro.showToast({ title: '加载失败', icon: 'none' })
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  useDidShow(() => {
    refresh()
  })

  return (
    <View className={styles.container}>
      <View className={styles.section}>
        <Text className={styles.sectionTitle}>{month} 汇总</Text>
        <Card>
          <View className={styles.row}>
            <View className={styles.half}>
              <Text className={styles.metricLabel}>收入</Text>
              <Text className={styles.metricValueIncome}>+{(summary?.income ?? 0).toFixed(2)}</Text>
            </View>
            <View className={styles.half}>
              <Text className={styles.metricLabel}>支出</Text>
              <Text className={styles.metricValueExpense}>-{(summary?.expense ?? 0).toFixed(2)}</Text>
            </View>
          </View>
          <View className={styles.section}>
            <Text className={styles.metricLabel}>固定支出（预估/月）</Text>
            <Text className={styles.metricValueExpense}>-{(summary?.fixed_monthly_expense ?? 0).toFixed(2)}</Text>
          </View>
          <View className={styles.section}>
            <Text className={styles.metricLabel}>结余</Text>
            <Text className={styles.metricValueBalance}>{(summary?.balance ?? 0).toFixed(2)}</Text>
          </View>
        </Card>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>分类支出（本月）</Text>
        <Card>
          {cats.length === 0 && <Cell title="暂无支出数据" desc="先记一笔支出" />}
          {cats.map((c) => {
            const ratio = totalExpense > 0 ? Number(c.amount) / totalExpense : 0
            const color = c.color || '#4A90D9'
            return (
              <View key={c.category_id} className={styles.barItem}>
                <View className={styles.barTop}>
                  <Text className={styles.barName}>{`${c.icon || ''}${c.name}`}</Text>
                  <Text className={styles.barAmount}>{Number(c.amount).toFixed(2)}</Text>
                </View>
                <View className={styles.barTrack}>
                  <View className={styles.barFill} style={{ width: `${Math.min(1, ratio) * 100}%`, background: color }} />
                </View>
              </View>
            )
          })}
        </Card>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>账户余额</Text>
        <Card>
          {balances.length === 0 && <Cell title="暂无账户" desc="登录后会自动创建默认账户" />}
          {balances.map((a) => (
            <Cell key={a.account_id} title={a.name} desc={a.type} rightText={a.balance.toFixed(2)} />
          ))}
        </Card>
      </View>
    </View>
  )
}

export default StatisticsPage
