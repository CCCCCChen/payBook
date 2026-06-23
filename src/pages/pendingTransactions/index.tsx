import React, { useEffect, useMemo, useState } from 'react'
import { Button, Text, View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import dayjs from 'dayjs'
import Card from '@/components/Card'
import { confirmPendingTransaction, getPendingTransactions, skipPendingTransaction } from '@/services/recurring'
import type { PendingTransaction } from '@/types/api'
import styles from './index.module.scss'

function PendingTransactionsPage() {
  const [list, setList] = useState<PendingTransaction[]>([])
  const [loadingId, setLoadingId] = useState<number | null>(null)

  const pendingList = useMemo(() => list.filter((it) => it.status === 'pending'), [list])

  const refresh = async () => {
    try {
      const res = await getPendingTransactions()
      setList(res)
    } catch (e) {
      console.error('[Pending] refresh failed', e)
      Taro.showToast({ title: '加载失败', icon: 'none' })
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  useDidShow(() => {
    refresh()
  })

  const confirmOne = async (p: PendingTransaction) => {
    if (loadingId) return
    setLoadingId(p.id)
    try {
      await confirmPendingTransaction(p.id)
      Taro.showToast({ title: '已入账', icon: 'success' })
      refresh()
    } catch (e) {
      console.error('[Pending] confirm failed', e)
      Taro.showToast({ title: '确认失败', icon: 'none' })
    } finally {
      setLoadingId(null)
    }
  }

  const skipOne = async (p: PendingTransaction) => {
    const res = await Taro.showModal({ title: '跳过', content: '确认跳过这笔待确认账单？' })
    if (!res.confirm) return
    if (loadingId) return
    setLoadingId(p.id)
    try {
      await skipPendingTransaction(p.id)
      Taro.showToast({ title: '已跳过', icon: 'success' })
      refresh()
    } catch (e) {
      console.error('[Pending] skip failed', e)
      Taro.showToast({ title: '操作失败', icon: 'none' })
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <View className={styles.container}>
      {pendingList.length === 0 && (
        <Card>
          <Text className={styles.desc}>暂无待确认账单</Text>
        </Card>
      )}

      {pendingList.map((p) => {
        const amountText = `${p.type === 'expense' ? '-' : '+'}${Number(p.amount).toFixed(2)}`
        const dateText = dayjs(p.date).format('YYYY-MM-DD')
        return (
          <View key={p.id} className={styles.item}>
            <Card>
              <View className={styles.topRow}>
                <Text className={styles.title}>{p.note || '周期账单'}</Text>
                <Text className={p.type === 'expense' ? styles.amountExpense : styles.amountIncome}>{amountText}</Text>
              </View>
              <Text className={styles.desc}>入账日期：{dateText}</Text>
              <View className={styles.btnRow}>
                <Button
                  className={styles.btn}
                  disabled={loadingId === p.id}
                  onClick={() => skipOne(p)}
                >
                  跳过
                </Button>
                <Button
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  disabled={loadingId === p.id}
                  onClick={() => confirmOne(p)}
                >
                  确认入账
                </Button>
              </View>
            </Card>
          </View>
        )
      })}
    </View>
  )
}

export default PendingTransactionsPage

