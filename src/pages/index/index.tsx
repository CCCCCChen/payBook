import React, { useEffect, useMemo, useState } from 'react'
import { Text, View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import dayjs from 'dayjs'
import Card from '@/components/Card'
import Cell from '@/components/Cell'
import ProgressBar from '@/components/ProgressBar'
import { getAccounts } from '@/services/accounts'
import { getBudgets } from '@/services/budgets'
import { getCategories } from '@/services/categories'
import { getPendingTransactions } from '@/services/recurring'
import { getTransactions } from '@/services/transactions'
import type { Account, Budget, Category, PendingTransaction, Transaction } from '@/types/api'
import { buildTransactionMaps, getTransactionDesc, getTransactionTitle } from '@/utils/transactionDisplay'
import styles from './index.module.scss'

function HomePage() {
  const [loading, setLoading] = useState(false)
  const [pending, setPending] = useState<PendingTransaction[]>([])
  const [txs, setTxs] = useState<Transaction[]>([])
  const [budgets, setBudgets] = useState<Budget[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const month = dayjs().format('YYYY-MM')

  const summary = useMemo(() => {
    let income = 0
    let expense = 0
    txs.forEach((t) => {
      if (t.type === 'income') income += Number(t.amount)
      if (t.type === 'expense') expense += Number(t.amount)
    })
    return { income, expense }
  }, [txs])

  const { accountMap, categoryMap } = useMemo(() => buildTransactionMaps(accounts, categories), [accounts, categories])

  const refresh = async () => {
    if (loading) return
    setLoading(true)
    try {
      const [p, list, b, a, c] = await Promise.all([
        getPendingTransactions(),
        getTransactions({ month }),
        getBudgets(),
        getAccounts(),
        getCategories()
      ])
      setPending(p.filter((it) => it.status === 'pending'))
      setTxs(list.slice(0, 30))
      setBudgets(b.filter((it) => it.is_active).slice(0, 3))
      setAccounts(a)
      setCategories(c)
      console.info('[Home] refresh ok', { month })
    } catch (e) {
      console.error('[Home] refresh failed', e)
      Taro.showToast({ title: '加载失败，请检查后端', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  useDidShow(() => {
    refresh()
  })

  const openPending = () => {
    Taro.navigateTo({ url: '/pages/pendingTransactions/index' })
  }

  const openAdd = () => {
    Taro.showActionSheet({
      itemList: ['记一笔', '转账']
    })
      .then((res) => {
        if (res.tapIndex === 0) Taro.navigateTo({ url: '/pages/addTransaction/index' })
        if (res.tapIndex === 1) Taro.navigateTo({ url: '/pages/transfer/index' })
      })
      .catch(() => {})
  }

  const openBudgets = () => {
    Taro.switchTab({ url: '/pages/budgets/index' })
  }

  const openAllTransactions = () => {
    Taro.navigateTo({ url: '/pages/transactions/index' })
  }

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <View className={styles.titleRow}>
          <Text className={styles.title}>{month} 概览</Text>
          <Text className={styles.subTitle}>{loading ? '刷新中…' : '下拉或切页自动刷新'}</Text>
        </View>
        {pending.length > 0 && (
          <View className={styles.pendingBanner} onClick={openPending}>
            <Text className={styles.pendingText}>你有 {pending.length} 笔待确认账单，点我处理</Text>
          </View>
        )}
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>预算进度</Text>
        <Card>
          {budgets.length === 0 && <Cell title="暂无活跃预算" desc="去预算页创建一个月预算" onClick={openBudgets} />}
          {budgets.map((b) => (
            <View key={b.id} className={styles.budgetItem} onClick={openBudgets}>
              <ProgressBar
                name={b.name}
                sub={b.period_start && b.period_end ? `${b.period_start} ~ ${b.period_end}` : undefined}
                percent={b.percent}
                isOver={b.is_over}
                rightText={`${b.spent.toFixed(0)}/${b.amount.toFixed(0)}`}
              />
            </View>
          ))}
          <View className={styles.linkRow}>
            <Text className={styles.linkText} onClick={openBudgets}>
              去管理预算 →
            </Text>
          </View>
        </Card>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>本月收支</Text>
        <Card>
          <View className={styles.summaryRow}>
            <View className={styles.summaryItem}>
              <Text className={styles.summaryLabel}>收入</Text>
              <Text className={styles.summaryValueIncome}>+{summary.income.toFixed(2)}</Text>
            </View>
            <View className={styles.summaryItem}>
              <Text className={styles.summaryLabel}>支出</Text>
              <Text className={styles.summaryValueExpense}>-{summary.expense.toFixed(2)}</Text>
            </View>
          </View>
        </Card>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>最近账单</Text>
        <Card>
          {txs.length === 0 && <Cell title="暂无数据" desc="先去记一笔，或确认周期账单" />}
          {txs.map((t) => {
            const sign = t.type === 'income' ? '+' : t.type === 'expense' ? '-' : ''
            return (
              <Cell
                key={t.id}
                title={getTransactionTitle(t, categoryMap)}
                desc={getTransactionDesc(t, accountMap, categoryMap)}
                rightText={`${sign}${Number(t.amount).toFixed(2)}`}
              />
            )
          })}
          <View className={styles.linkRow}>
            <Text className={styles.linkText} onClick={openAllTransactions}>
              查看全部账单 →
            </Text>
          </View>
        </Card>
      </View>

      <View className={styles.floatBtn} onClick={openAdd}>
        <Text className={styles.floatBtnText}>+</Text>
      </View>
    </View>
  )
}

export default HomePage
