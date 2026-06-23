import React, { useEffect, useMemo, useState } from 'react'
import { Input, Picker, Switch, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs'
import Card from '@/components/Card'
import PrimaryButton from '@/components/PrimaryButton'
import { createBudget, getBudgets, updateBudget } from '@/services/budgets'
import { getCategories } from '@/services/categories'
import type { Budget, Category } from '@/types/api'
import styles from './index.module.scss'

function BudgetEditPage() {
  const idParam = Taro.getCurrentInstance().router?.params?.id
  const presetParam = Taro.getCurrentInstance().router?.params?.preset as 'weekly' | 'monthly' | undefined
  const budgetId = idParam ? Number(idParam) : null

  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('0')
  const [cycleType, setCycleType] = useState<'weekly' | 'monthly' | 'custom'>(presetParam || 'monthly')
  const [startDate, setStartDate] = useState(dayjs().startOf('month').format('YYYY-MM-DD'))
  const [endDate, setEndDate] = useState(dayjs().endOf('month').format('YYYY-MM-DD'))
  const [isActive, setIsActive] = useState(true)
  const [scopeMode, setScopeMode] = useState<'all' | 'custom'>('all')
  const [scopeIds, setScopeIds] = useState<number[]>([])

  const expenseCategories = useMemo(() => categories.filter((c) => c.nature === 'expense'), [categories])

  const loadBase = async () => {
    try {
      const cats = await getCategories()
      setCategories(cats)
    } catch (e) {
      console.error('[BudgetEdit] load categories failed', e)
    }
  }

  const loadBudget = async () => {
    if (!budgetId) return
    try {
      const list = await getBudgets()
      const b = list.find((it) => it.id === budgetId)
      if (!b) return
      setName(b.name)
      setAmount(String(b.amount))
      setCycleType(b.cycle_type)
      setStartDate(b.start_date || startDate)
      setEndDate(b.end_date || endDate)
      setIsActive(b.is_active)
      if (b.category_ids && b.category_ids.length > 0) {
        setScopeMode('custom')
        setScopeIds(b.category_ids)
      } else {
        setScopeMode('all')
        setScopeIds([])
      }
    } catch (e) {
      console.error('[BudgetEdit] load budget failed', e)
    }
  }

  useEffect(() => {
    loadBase()
  }, [])

  useEffect(() => {
    loadBudget()
  }, [])

  useEffect(() => {
    if (presetParam === 'monthly') {
      setStartDate(dayjs().startOf('month').format('YYYY-MM-DD'))
      setEndDate(dayjs().endOf('month').format('YYYY-MM-DD'))
    }
  }, [presetParam])

  const toggleScope = (id: number) => {
    setScopeIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      return [...prev, id]
    })
  }

  const save = async () => {
    if (loading) return
    if (!name.trim()) {
      Taro.showToast({ title: '请输入预算名称', icon: 'none' })
      return
    }
    const amt = Number(amount)
    if (!Number.isFinite(amt) || amt <= 0) {
      Taro.showToast({ title: '预算金额不合法', icon: 'none' })
      return
    }

    if (cycleType === 'custom' && dayjs(startDate).isAfter(dayjs(endDate))) {
      Taro.showToast({ title: '开始日期不能晚于结束日期', icon: 'none' })
      return
    }

    setLoading(true)
    try {
      const payload: Omit<
        Budget,
        'id' | 'period_start' | 'period_end' | 'spent' | 'remaining' | 'percent' | 'is_over'
      > = {
        name: name.trim(),
        cycle_type: cycleType,
        start_date: cycleType === 'custom' ? startDate : null,
        end_date: cycleType === 'custom' ? endDate : null,
        amount: amt,
        category_ids: scopeMode === 'custom' ? scopeIds : [],
        is_active: isActive
      }

      if (budgetId) {
        await updateBudget(budgetId, payload)
      } else {
        await createBudget(payload)
      }
      Taro.showToast({ title: '已保存', icon: 'success' })
      Taro.navigateBack()
    } catch (e) {
      console.error('[BudgetEdit] save failed', e)
      Taro.showToast({ title: '保存失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className={styles.container}>
      <Text className={styles.sectionTitle}>基本信息</Text>
      <Card>
        <View className={styles.section}>
          <Input className={styles.input} value={name} onInput={(e) => setName(e.detail.value)} placeholder="例如 本月总预算" />
        </View>
        <View className={styles.section}>
          <Input
            className={styles.input}
            value={amount}
            type="number"
            onInput={(e) => setAmount(e.detail.value)}
            placeholder="预算金额"
          />
        </View>
        <View className={styles.section}>
          <Picker
            mode="selector"
            range={['每月', '每周', '自定义']}
            value={cycleType === 'monthly' ? 0 : cycleType === 'weekly' ? 1 : 2}
            onChange={(e) => setCycleType(e.detail.value === '0' ? 'monthly' : e.detail.value === '1' ? 'weekly' : 'custom')}
          >
            <View className={styles.picker}>
              <Text className={styles.pickerText}>
                {cycleType === 'monthly' ? '每月' : cycleType === 'weekly' ? '每周' : '自定义周期'}
              </Text>
            </View>
          </Picker>
          <Text className={styles.tip}>月/周预算会自动按“本月/本周”计算进度，自定义按你选的日期范围。</Text>
        </View>
        {cycleType === 'custom' && (
          <View className={styles.section}>
            <View className={styles.row}>
              <View className={styles.half}>
                <Picker mode="date" value={startDate} onChange={(e) => setStartDate(e.detail.value)}>
                  <View className={styles.picker}>
                    <Text className={styles.pickerText}>开始：{startDate}</Text>
                  </View>
                </Picker>
              </View>
              <View className={styles.half}>
                <Picker mode="date" value={endDate} onChange={(e) => setEndDate(e.detail.value)}>
                  <View className={styles.picker}>
                    <Text className={styles.pickerText}>结束：{endDate}</Text>
                  </View>
                </Picker>
              </View>
            </View>
          </View>
        )}
        <View className={styles.section}>
          <View className={styles.switchRow}>
            <Text className={styles.switchLabel}>启用</Text>
            <Switch checked={isActive} onChange={(e) => setIsActive(e.detail.value)} />
          </View>
        </View>
      </Card>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>预算范围（支出分类）</Text>
        <Card>
          <View className={styles.section}>
            <Picker
              mode="selector"
              range={['全部分类', '指定分类']}
              value={scopeMode === 'all' ? 0 : 1}
              onChange={(e) => setScopeMode(e.detail.value === '0' ? 'all' : 'custom')}
            >
              <View className={styles.picker}>
                <Text className={styles.pickerText}>{scopeMode === 'all' ? '全部分类' : '指定分类'}</Text>
              </View>
            </Picker>
          </View>

          {scopeMode === 'custom' && (
            <View className={styles.section}>
              <View className={styles.checkboxList}>
                {expenseCategories.map((c) => {
                  const active = scopeIds.includes(c.id)
                  return (
                    <Text
                      key={c.id}
                      className={`${styles.checkboxItem} ${active ? styles.checkboxItemActive : ''}`}
                      onClick={() => toggleScope(c.id)}
                    >
                      {(c.icon || '') + c.name}
                    </Text>
                  )
                })}
              </View>
              <Text className={styles.tip}>当前版本的预算进度统计只计算“关联到该预算”的支出记录。</Text>
            </View>
          )}
        </Card>
      </View>

      <View className={styles.section}>
        <PrimaryButton text={loading ? '保存中…' : '保存'} disabled={loading} onClick={save} />
      </View>
    </View>
  )
}

export default BudgetEditPage

