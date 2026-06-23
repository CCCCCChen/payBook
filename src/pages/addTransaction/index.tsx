import React, { useEffect, useMemo, useState } from 'react'
import { Input, Picker, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs'
import Card from '@/components/Card'
import PrimaryButton from '@/components/PrimaryButton'
import { getAccounts } from '@/services/accounts'
import { getBudgets } from '@/services/budgets'
import { getCategories } from '@/services/categories'
import { createTransaction } from '@/services/transactions'
import type { Account, Budget, Category, Transaction } from '@/types/api'
import styles from './index.module.scss'

function AddTransactionPage() {
  const [loading, setLoading] = useState(false)
  const [accounts, setAccounts] = useState<Account[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [budgets, setBudgets] = useState<Budget[]>([])

  const [type, setType] = useState<'expense' | 'income'>('expense')
  const [amount, setAmount] = useState('')
  const [accountId, setAccountId] = useState<number | null>(null)
  const [categoryId, setCategoryId] = useState<number | null>(null)
  const [budgetId, setBudgetId] = useState<number | null>(null)
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [note, setNote] = useState('')

  const accountOptions = useMemo(() => accounts.map((a) => a.name), [accounts])
  const categoryOptions = useMemo(() => categories.map((c) => `${c.icon || ''}${c.name}`), [categories])
  const budgetOptions = useMemo(() => ['不关联预算', ...budgets.map((b) => b.name)], [budgets])

  const selectedAccountIndex = useMemo(() => {
    if (!accountId) return 0
    const idx = accounts.findIndex((a) => a.id === accountId)
    return idx >= 0 ? idx : 0
  }, [accounts, accountId])

  const selectedCategoryIndex = useMemo(() => {
    if (!categoryId) return 0
    const idx = categories.findIndex((c) => c.id === categoryId)
    return idx >= 0 ? idx : 0
  }, [categories, categoryId])

  const selectedBudgetIndex = useMemo(() => {
    if (!budgetId) return 0
    const idx = budgets.findIndex((b) => b.id === budgetId)
    return idx >= 0 ? idx + 1 : 0
  }, [budgets, budgetId])

  const loadBaseData = async () => {
    try {
      const [a, c, b] = await Promise.all([getAccounts(), getCategories(), getBudgets()])
      setAccounts(a)
      const filtered = c.filter((it) => it.nature === type)
      setCategories(filtered)
      setBudgets(b.filter((it) => it.is_active))
      if (!accountId && a.length) setAccountId(a[0].id)
      if (!categoryId && filtered.length) setCategoryId(filtered[0].id)
    } catch (e) {
      console.error('[AddTransaction] load base data failed', e)
      Taro.showToast({ title: '加载失败', icon: 'none' })
    }
  }

  useEffect(() => {
    loadBaseData()
  }, [])

  useEffect(() => {
    loadBaseData()
  }, [type])

  useEffect(() => {
    if (categories.length === 0) {
      setCategoryId(null)
      return
    }
    const exists = categoryId ? categories.some((c) => c.id === categoryId) : false
    if (!exists) {
      setCategoryId(categories[0].id)
    }
  }, [categories, categoryId])

  useEffect(() => {
    if (budgets.length === 0) {
      setBudgetId(null)
      return
    }
    if (budgetId && !budgets.some((b) => b.id === budgetId)) {
      setBudgetId(null)
    }
  }, [budgets, budgetId])

  const save = async () => {
    if (loading) return
    const amt = Number(amount)
    if (!Number.isFinite(amt) || amt <= 0) {
      Taro.showToast({ title: '请输入正确金额', icon: 'none' })
      return
    }
    if (!accountId) {
      Taro.showToast({ title: '请选择账户', icon: 'none' })
      return
    }
    if (!categoryId) {
      Taro.showToast({ title: '请选择分类', icon: 'none' })
      return
    }

    setLoading(true)
    try {
      const payload: Omit<Transaction, 'id'> = {
        entry_type: type,
        amount: amt,
        category_id: categoryId,
        account_id: accountId,
        to_account_id: null,
        transaction_date: date,
        note: note.trim(),
        budget_id: type === 'expense' ? budgetId : null,
        is_cash_basis: true
      }
      await createTransaction(payload)
      console.info('[AddTransaction] save payload', payload)
      Taro.showToast({ title: '已保存', icon: 'success' })
      Taro.navigateBack()
    } catch (e) {
      console.error('[AddTransaction] save failed', e)
      Taro.showToast({ title: '保存失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className={styles.container}>
      <Text className={styles.sectionTitle}>记一笔</Text>
      <Card>
        <View className={styles.section}>
          <Picker
            mode="selector"
            range={['支出', '收入']}
            value={type === 'expense' ? 0 : 1}
            onChange={(e) => setType(e.detail.value === '0' ? 'expense' : 'income')}
          >
            <View className={styles.picker}>
              <Text className={styles.pickerText}>{type === 'expense' ? '支出' : '收入'}</Text>
            </View>
          </Picker>
        </View>

        <View className={styles.section}>
          <Input
            className={styles.input}
            value={amount}
            type="number"
            onInput={(e) => setAmount(e.detail.value)}
            placeholder="金额"
          />
        </View>

        <View className={styles.section}>
          <Picker
            mode="selector"
            range={accountOptions}
            value={selectedAccountIndex}
            onChange={(e) => {
              const idx = Number(e.detail.value)
              const acc = accounts[idx]
              if (acc) setAccountId(acc.id)
            }}
          >
            <View className={styles.picker}>
              <Text className={styles.pickerText}>
                {accountId ? accounts.find((a) => a.id === accountId)?.name : '选择账户'}
              </Text>
            </View>
          </Picker>
        </View>

        <View className={styles.section}>
          <Picker
            mode="selector"
            range={categoryOptions}
            value={selectedCategoryIndex}
            onChange={(e) => {
              const idx = Number(e.detail.value)
              const cat = categories[idx]
              if (cat) setCategoryId(cat.id)
            }}
          >
            <View className={styles.picker}>
              <Text className={styles.pickerText}>
                {categoryId ? categories.find((c) => c.id === categoryId)?.name : '选择分类'}
              </Text>
            </View>
          </Picker>
        </View>

        {type === 'expense' && (
          <View className={styles.section}>
            <Picker
              mode="selector"
              range={budgetOptions}
              value={selectedBudgetIndex}
              onChange={(e) => {
                const idx = Number(e.detail.value)
                if (idx === 0) setBudgetId(null)
                else setBudgetId(budgets[idx - 1]?.id ?? null)
              }}
            >
              <View className={styles.picker}>
                <Text className={styles.pickerText}>
                  {budgetId ? budgets.find((b) => b.id === budgetId)?.name : '不关联预算'}
                </Text>
              </View>
            </Picker>
          </View>
        )}

        <View className={styles.section}>
          <Picker mode="date" value={date} onChange={(e) => setDate(e.detail.value)}>
            <View className={styles.picker}>
              <Text className={styles.pickerText}>日期：{date}</Text>
            </View>
          </Picker>
        </View>

        <View className={styles.section}>
          <Input
            className={styles.input}
            value={note}
            onInput={(e) => setNote(e.detail.value)}
            placeholder="备注（可选）"
          />
        </View>
      </Card>

      <View className={styles.section}>
        <PrimaryButton text={loading ? '保存中…' : '保存'} disabled={loading} onClick={save} />
      </View>
    </View>
  )
}

export default AddTransactionPage

