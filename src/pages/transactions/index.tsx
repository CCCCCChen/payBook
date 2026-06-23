import React, { useEffect, useMemo, useState } from 'react'
import { Input, Picker, Text, View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import dayjs from 'dayjs'
import Card from '@/components/Card'
import Cell from '@/components/Cell'
import PrimaryButton from '@/components/PrimaryButton'
import { getAccounts } from '@/services/accounts'
import { getCategories } from '@/services/categories'
import { getTransactions } from '@/services/transactions'
import type { Account, Category, Transaction } from '@/types/api'
import { buildTransactionMaps, getTransactionDesc, getTransactionTitle } from '@/utils/transactionDisplay'
import styles from './index.module.scss'

function TransactionsPage() {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState<Transaction[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const [month, setMonth] = useState(dayjs().format('YYYY-MM'))
  const [keyword, setKeyword] = useState('')
  const [accountId, setAccountId] = useState<number | null>(null)
  const [categoryId, setCategoryId] = useState<number | null>(null)

  const accountOptions = useMemo(() => ['全部账户', ...accounts.map((a) => a.name)], [accounts])
  const categoryOptions = useMemo(() => ['全部分类', ...categories.map((c) => `${c.icon || ''}${c.name}`)], [categories])

  const selectedAccountIndex = useMemo(() => {
    if (!accountId) return 0
    const idx = accounts.findIndex((a) => a.id === accountId)
    return idx >= 0 ? idx + 1 : 0
  }, [accounts, accountId])

  const selectedCategoryIndex = useMemo(() => {
    if (!categoryId) return 0
    const idx = categories.findIndex((c) => c.id === categoryId)
    return idx >= 0 ? idx + 1 : 0
  }, [categories, categoryId])

  const { accountMap, categoryMap } = useMemo(() => buildTransactionMaps(accounts, categories), [accounts, categories])

  const loadBase = async () => {
    try {
      const [a, c] = await Promise.all([getAccounts(), getCategories()])
      setAccounts(a)
      setCategories(c)
    } catch (e) {
      console.error('[Transactions] load base failed', e)
    }
  }

  const refresh = async () => {
    if (loading) return
    setLoading(true)
    try {
      const res = await getTransactions({
        month,
        keyword: keyword.trim() || undefined,
        account_id: accountId || undefined,
        category_id: categoryId || undefined
      })
      setList(res)
    } catch (e) {
      console.error('[Transactions] refresh failed', e)
      Taro.showToast({ title: '加载失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBase()
    refresh()
  }, [])

  useDidShow(() => {
    refresh()
  })

  const clearFilters = () => {
    setKeyword('')
    setAccountId(null)
    setCategoryId(null)
    setMonth(dayjs().format('YYYY-MM'))
    setTimeout(() => refresh(), 0)
  }

  return (
    <View className={styles.container}>
      <Text className={styles.sectionTitle}>筛选</Text>
      <Card>
        <View className={styles.section}>
          <Picker mode="date" fields="month" value={`${month}-01`} onChange={(e) => setMonth(e.detail.value.slice(0, 7))}>
            <View className={styles.picker}>
              <Text className={styles.pickerText}>月份：{month}</Text>
            </View>
          </Picker>
        </View>
        <View className={styles.section}>
          <Input className={styles.input} value={keyword} onInput={(e) => setKeyword(e.detail.value)} placeholder="备注关键词" />
        </View>
        <View className={styles.section}>
          <View className={styles.row}>
            <View className={styles.half}>
              <Picker
                mode="selector"
                range={accountOptions}
                value={selectedAccountIndex}
                onChange={(e) => {
                  const idx = Number(e.detail.value)
                  if (idx === 0) setAccountId(null)
                  else setAccountId(accounts[idx - 1]?.id ?? null)
                }}
              >
                <View className={styles.picker}>
                  <Text className={styles.pickerText}>{accountId ? accounts.find((a) => a.id === accountId)?.name : '全部账户'}</Text>
                </View>
              </Picker>
            </View>
            <View className={styles.half}>
              <Picker
                mode="selector"
                range={categoryOptions}
                value={selectedCategoryIndex}
                onChange={(e) => {
                  const idx = Number(e.detail.value)
                  if (idx === 0) setCategoryId(null)
                  else setCategoryId(categories[idx - 1]?.id ?? null)
                }}
              >
                <View className={styles.picker}>
                  <Text className={styles.pickerText}>
                    {categoryId ? categories.find((c) => c.id === categoryId)?.name : '全部分类'}
                  </Text>
                </View>
              </Picker>
            </View>
          </View>
          <Text className={styles.tip}>筛选后点“查询”刷新列表</Text>
        </View>
        <View className={styles.section}>
          <View className={styles.row}>
            <View className={styles.half}>
              <PrimaryButton text={loading ? '查询中…' : '查询'} disabled={loading} onClick={refresh} />
            </View>
            <View className={styles.half}>
              <PrimaryButton text="清空" size="sm" onClick={clearFilters} />
            </View>
          </View>
        </View>
      </Card>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>结果（{list.length}）</Text>
        <Card>
          {list.length === 0 && <Cell title="暂无结果" desc="换个条件试试" />}
          {list.map((t) => {
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
        </Card>
      </View>
    </View>
  )
}

export default TransactionsPage

