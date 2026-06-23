import React, { useEffect, useMemo, useState } from 'react'
import { Button, Text, View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import Card from '@/components/Card'
import Cell from '@/components/Cell'
import PrimaryButton from '@/components/PrimaryButton'
import { getAccounts } from '@/services/accounts'
import { getCategories } from '@/services/categories'
import { deleteRecurringTemplate, getPendingTransactions, getRecurringTemplates } from '@/services/recurring'
import type { Account, Category, PendingTransaction, RecurringTemplate } from '@/types/api'
import styles from './index.module.scss'

function RecurringTemplatesPage() {
  const [templates, setTemplates] = useState<RecurringTemplate[]>([])
  const [pending, setPending] = useState<PendingTransaction[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const accountMap = useMemo(() => {
    const map = new Map<number, string>()
    accounts.forEach((a) => map.set(a.id, a.name))
    return map
  }, [accounts])

  const categoryMap = useMemo(() => {
    const map = new Map<number, string>()
    categories.forEach((c) => map.set(c.id, c.name))
    return map
  }, [categories])

  const refresh = async () => {
    try {
      const [t, p, a, c] = await Promise.all([
        getRecurringTemplates(),
        getPendingTransactions(),
        getAccounts(),
        getCategories()
      ])
      setTemplates(t)
      setPending(p.filter((it) => it.status === 'pending'))
      setAccounts(a)
      setCategories(c)
    } catch (e) {
      console.error('[RecurringTemplates] refresh failed', e)
      Taro.showToast({ title: '加载失败', icon: 'none' })
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  useDidShow(() => {
    refresh()
  })

  const openEdit = (id?: number) => {
    Taro.navigateTo({ url: `/pages/recurringEdit/index${id ? `?id=${id}` : ''}` })
  }

  const openPending = () => {
    Taro.navigateTo({ url: '/pages/pendingTransactions/index' })
  }

  const removeTemplate = async (tpl: RecurringTemplate) => {
    const res = await Taro.showModal({
      title: '删除模板',
      content: `确认删除「${tpl.name}」？`
    })
    if (!res.confirm) return
    try {
      await deleteRecurringTemplate(tpl.id)
      Taro.showToast({ title: '已删除', icon: 'success' })
      refresh()
    } catch (e) {
      console.error('[RecurringTemplates] delete failed', e)
      Taro.showToast({ title: '删除失败', icon: 'none' })
    }
  }

  return (
    <View className={styles.container}>
      <View className={styles.topRow}>
        <View className={styles.half}>
          <PrimaryButton text="新建模板" onClick={() => openEdit()} />
        </View>
        <View className={styles.half}>
          <PrimaryButton text={`待确认 ${pending.length}`} onClick={openPending} />
        </View>
      </View>

      <Text className={styles.sectionTitle}>模板列表</Text>
      <Card>
        {templates.length === 0 && <Cell title="暂无模板" desc="点上方“新建模板”开始" />}
        {templates.map((t) => {
          const accountName = accountMap.get(t.account_id) || `账户#${t.account_id}`
          const categoryName =
            t.category_id && categoryMap.get(t.category_id) ? categoryMap.get(t.category_id) : '未指定分类'
          const desc = `${t.type === 'expense' ? '支出' : '收入'} · ${accountName} · ${categoryName} · ${
            t.cycle_type === 'weekly' ? `每周${t.cycle_day}` : `每月${t.cycle_day}号`
          }`
          const right = `${t.is_active ? '启用' : '停用'} · ${Number(t.amount).toFixed(2)}`
          return (
            <View key={t.id}>
              <Cell title={t.name} desc={`${desc} · 下次 ${t.next_due_date}`} rightText={right} onClick={() => openEdit(t.id)} />
              <Button className={styles.dangerBtn} onClick={() => removeTemplate(t)}>
                删除
              </Button>
            </View>
          )
        })}
      </Card>

      <Text className={styles.hint}>weekly 的 cycle_day 建议用 0-6（0=周日），monthly 用 1-31。</Text>
    </View>
  )
}

export default RecurringTemplatesPage

