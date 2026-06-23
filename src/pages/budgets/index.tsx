import React, { useEffect, useMemo, useState } from 'react'
import { Button, Text, View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import Card from '@/components/Card'
import PrimaryButton from '@/components/PrimaryButton'
import ProgressBar from '@/components/ProgressBar'
import { deleteBudget, getBudgets } from '@/services/budgets'
import type { Budget } from '@/types/api'
import styles from './index.module.scss'

function BudgetsPage() {
  const [list, setList] = useState<Budget[]>([])

  const active = useMemo(() => list.filter((b) => b.is_active), [list])

  const refresh = async () => {
    try {
      const res = await getBudgets()
      setList(res)
    } catch (e) {
      console.error('[Budgets] refresh failed', e)
      Taro.showToast({ title: '加载失败', icon: 'none' })
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  useDidShow(() => {
    refresh()
  })

  const openEdit = (id?: number, preset?: 'monthly' | 'weekly') => {
    const qs = id ? `?id=${id}` : preset ? `?preset=${preset}` : ''
    Taro.navigateTo({ url: `/pages/budgetEdit/index${qs}` })
  }

  const removeOne = async (b: Budget) => {
    const res = await Taro.showModal({ title: '删除预算', content: `确认删除「${b.name}」？` })
    if (!res.confirm) return
    try {
      await deleteBudget(b.id)
      Taro.showToast({ title: '已删除', icon: 'success' })
      refresh()
    } catch (e) {
      console.error('[Budgets] delete failed', e)
      Taro.showToast({ title: '删除失败', icon: 'none' })
    }
  }

  return (
    <View className={styles.container}>
      <View className={styles.topRow}>
        <View className={styles.half}>
          <PrimaryButton text="新建月预算" onClick={() => openEdit(undefined, 'monthly')} />
        </View>
        <View className={styles.half}>
          <PrimaryButton text="新建周预算" onClick={() => openEdit(undefined, 'weekly')} />
        </View>
      </View>

      <Text className={styles.sectionTitle}>活跃预算</Text>
      <Card>
        {active.length === 0 && <Text className={styles.meta}>暂无活跃预算，建议先建一个“本月总预算”。</Text>}
        {active.map((b) => (
          <View key={b.id} className={styles.item}>
            <View className={styles.row} onClick={() => openEdit(b.id)}>
              <ProgressBar
                name={b.name}
                sub={b.period_start && b.period_end ? `${b.period_start} ~ ${b.period_end}` : undefined}
                percent={b.percent}
                isOver={b.is_over}
                rightText={`${b.spent.toFixed(0)}/${b.amount.toFixed(0)}`}
              />
            </View>
            <Text className={styles.meta}>
              {b.is_over ? '已超支' : `剩余 ${b.remaining.toFixed(2)}`} · {b.cycle_type}
            </Text>
            <Button className={styles.dangerBtn} onClick={() => removeOne(b)}>
              删除
            </Button>
          </View>
        ))}
      </Card>

      <Text className={styles.sectionTitle} style={{ marginTop: '24rpx' }}>
        全部预算
      </Text>
      <Card>
        {list.length === 0 && <Text className={styles.meta}>暂无预算</Text>}
        {list.map((b) => (
          <View key={b.id} className={styles.item} onClick={() => openEdit(b.id)}>
            <ProgressBar
              name={b.name}
              sub={b.cycle_type === 'custom' && b.start_date && b.end_date ? `${b.start_date} ~ ${b.end_date}` : undefined}
              percent={b.percent}
              isOver={b.is_over}
              rightText={`${b.spent.toFixed(0)}/${b.amount.toFixed(0)}`}
            />
            <Text className={styles.meta}>{b.is_active ? '启用' : '停用'}</Text>
          </View>
        ))}
      </Card>
    </View>
  )
}

export default BudgetsPage
