import React, { useEffect, useMemo, useState } from 'react'
import { Input, Picker, Switch, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs'
import Card from '@/components/Card'
import PrimaryButton from '@/components/PrimaryButton'
import { getAccounts } from '@/services/accounts'
import { getCategories } from '@/services/categories'
import { createRecurringTemplate, getRecurringTemplates, updateRecurringTemplate } from '@/services/recurring'
import type { Account, Category, RecurringTemplate } from '@/types/api'
import styles from './index.module.scss'

function RecurringEditPage() {
  const idParam = Taro.getCurrentInstance().router?.params?.id
  const templateId = idParam ? Number(idParam) : null

  const [accounts, setAccounts] = useState<Account[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)

  const [name, setName] = useState('')
  const [type, setType] = useState<'income' | 'expense'>('expense')
  const [amount, setAmount] = useState('0')
  const [accountId, setAccountId] = useState<number | null>(null)
  const [categoryId, setCategoryId] = useState<number | null>(null)
  const [cycleType, setCycleType] = useState<'weekly' | 'monthly'>('monthly')
  const [cycleDay, setCycleDay] = useState(1)
  const [nextDueDate, setNextDueDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [isActive, setIsActive] = useState(true)
  const [note, setNote] = useState('')

  const accountOptions = useMemo(() => accounts.map((a) => a.name), [accounts])
  const categoryOptions = useMemo(() => ['不指定', ...categories.map((c) => `${c.icon || ''}${c.name}`)], [categories])

  const selectedAccountIndex = useMemo(() => {
    if (!accountId) return 0
    const idx = accounts.findIndex((a) => a.id === accountId)
    return idx >= 0 ? idx : 0
  }, [accounts, accountId])

  const selectedCategoryIndex = useMemo(() => {
    if (!categoryId) return 0
    const idx = categories.findIndex((c) => c.id === categoryId)
    return idx >= 0 ? idx + 1 : 0
  }, [categories, categoryId])

  const loadBaseData = async () => {
    try {
      const [a, c] = await Promise.all([getAccounts(), getCategories()])
      setAccounts(a)
      setCategories(c.filter((it) => it.nature === type))
      if (!accountId && a.length) setAccountId(a[0].id)
    } catch (e) {
      console.error('[RecurringEdit] load base data failed', e)
      Taro.showToast({ title: '加载失败', icon: 'none' })
    }
  }

  const loadTemplate = async () => {
    if (!templateId) return
    try {
      const list = await getRecurringTemplates()
      const tpl = list.find((it) => it.id === templateId)
      if (!tpl) return

      setName(tpl.name)
      setType(tpl.type)
      setAmount(String(tpl.amount))
      setAccountId(tpl.account_id)
      setCategoryId(tpl.category_id ? tpl.category_id : null)
      setCycleType(tpl.cycle_type)
      setCycleDay(tpl.cycle_day)
      setNextDueDate(tpl.next_due_date)
      setIsActive(tpl.is_active)
      setNote(tpl.note || '')
    } catch (e) {
      console.error('[RecurringEdit] load template failed', e)
    }
  }

  useEffect(() => {
    loadBaseData()
  }, [])

  useEffect(() => {
    loadTemplate()
  }, [])

  useEffect(() => {
    loadBaseData()
  }, [type])

  const save = async () => {
    if (loading) return
    if (!name.trim()) {
      Taro.showToast({ title: '请输入名称', icon: 'none' })
      return
    }
    if (!accountId) {
      Taro.showToast({ title: '请选择账户', icon: 'none' })
      return
    }
    const amt = Number(amount)
    if (!Number.isFinite(amt) || amt <= 0) {
      Taro.showToast({ title: '金额不合法', icon: 'none' })
      return
    }

    setLoading(true)
    try {
      const payload: Omit<RecurringTemplate, 'id'> = {
        name: name.trim(),
        type,
        amount: amt,
        category_id: categoryId,
        account_id: accountId,
        cycle_type: cycleType,
        cycle_day: cycleDay,
        next_due_date: nextDueDate,
        is_active: isActive,
        note: note.trim()
      }
      if (templateId) {
        await updateRecurringTemplate(templateId, payload)
      } else {
        await createRecurringTemplate(payload)
      }
      Taro.showToast({ title: '已保存', icon: 'success' })
      Taro.navigateBack()
    } catch (e) {
      console.error('[RecurringEdit] save failed', e)
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
          <Input className={styles.input} value={name} onInput={(e) => setName(e.detail.value)} placeholder="例如 房租" />
        </View>

        <View className={styles.section}>
          <View className={styles.row}>
            <View className={styles.half}>
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
            <View className={styles.half}>
              <Input
                className={styles.input}
                value={amount}
                type="number"
                onInput={(e) => setAmount(e.detail.value)}
                placeholder="金额"
              />
            </View>
          </View>
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
              if (idx === 0) setCategoryId(null)
              else setCategoryId(categories[idx - 1]?.id ?? null)
            }}
          >
            <View className={styles.picker}>
              <Text className={styles.pickerText}>
                {categoryId ? categories.find((c) => c.id === categoryId)?.name : '不指定分类'}
              </Text>
            </View>
          </Picker>
        </View>
      </Card>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>周期设置</Text>
        <Card>
          <View className={styles.section}>
            <Picker
              mode="selector"
              range={['每月', '每周']}
              value={cycleType === 'monthly' ? 0 : 1}
              onChange={(e) => setCycleType(e.detail.value === '0' ? 'monthly' : 'weekly')}
            >
              <View className={styles.picker}>
                <Text className={styles.pickerText}>{cycleType === 'monthly' ? '每月' : '每周'}</Text>
              </View>
            </Picker>
          </View>

          <View className={styles.section}>
            <Input
              className={styles.input}
              value={String(cycleDay)}
              type="number"
              onInput={(e) => setCycleDay(Number(e.detail.value || 0))}
              placeholder={cycleType === 'monthly' ? '每月第几天(1-31)' : '每周几(0-6, 0=周日)'}
            />
            <Text className={styles.tip}>
              {cycleType === 'monthly'
                ? 'monthly：cycle_day=1-31，超出当月最大天数时自动按月末处理'
                : 'weekly：cycle_day=0-6（0=周日），当前版本按 next_due_date 每 7 天滚动'}
            </Text>
          </View>

          <View className={styles.section}>
            <Picker mode="date" value={nextDueDate} onChange={(e) => setNextDueDate(e.detail.value)}>
              <View className={styles.picker}>
                <Text className={styles.pickerText}>下次生成日期：{nextDueDate}</Text>
              </View>
            </Picker>
          </View>
        </Card>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>其他</Text>
        <Card>
          <View className={styles.section}>
            <Input className={styles.input} value={note} onInput={(e) => setNote(e.detail.value)} placeholder="备注模板(可选)" />
          </View>
          <View className={styles.section}>
            <View className={styles.row}>
              <View className={styles.half}>
                <Text className={styles.tip}>启用</Text>
              </View>
              <View className={styles.half}>
                <Switch checked={isActive} onChange={(e) => setIsActive(e.detail.value)} />
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View className={styles.section}>
        <PrimaryButton text={loading ? '保存中…' : '保存'} disabled={loading} onClick={save} />
      </View>
    </View>
  )
}

export default RecurringEditPage

