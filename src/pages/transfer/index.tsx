import React, { useEffect, useMemo, useState } from 'react'
import { Input, Picker, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs'
import Card from '@/components/Card'
import PrimaryButton from '@/components/PrimaryButton'
import { getAccounts } from '@/services/accounts'
import { transfer } from '@/services/transactions'
import type { Account } from '@/types/api'
import styles from './index.module.scss'

function TransferPage() {
  const [loading, setLoading] = useState(false)
  const [accounts, setAccounts] = useState<Account[]>([])

  const [fromAccountId, setFromAccountId] = useState<number | null>(null)
  const [toAccountId, setToAccountId] = useState<number | null>(null)
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [note, setNote] = useState('')

  const accountOptions = useMemo(() => accounts.map((a) => a.name), [accounts])

  const fromIndex = useMemo(() => {
    if (!fromAccountId) return 0
    const idx = accounts.findIndex((a) => a.id === fromAccountId)
    return idx >= 0 ? idx : 0
  }, [accounts, fromAccountId])

  const toIndex = useMemo(() => {
    if (!toAccountId) return 0
    const idx = accounts.findIndex((a) => a.id === toAccountId)
    return idx >= 0 ? idx : 0
  }, [accounts, toAccountId])

  const loadAccounts = async () => {
    try {
      const res = await getAccounts()
      setAccounts(res)
      if (res.length >= 2) {
        if (!fromAccountId) setFromAccountId(res[0].id)
        if (!toAccountId) setToAccountId(res[1].id)
      }
    } catch (e) {
      console.error('[Transfer] load accounts failed', e)
      Taro.showToast({ title: '加载账户失败', icon: 'none' })
    }
  }

  useEffect(() => {
    loadAccounts()
  }, [])

  const submit = async () => {
    if (loading) return
    if (!fromAccountId || !toAccountId) {
      Taro.showToast({ title: '请选择账户', icon: 'none' })
      return
    }
    if (fromAccountId === toAccountId) {
      Taro.showToast({ title: '转出/转入账户不能相同', icon: 'none' })
      return
    }
    const amt = Number(amount)
    if (!Number.isFinite(amt) || amt <= 0) {
      Taro.showToast({ title: '请输入正确金额', icon: 'none' })
      return
    }

    setLoading(true)
    try {
      await transfer({
        from_account_id: fromAccountId,
        to_account_id: toAccountId,
        amount: amt,
        transaction_date: date,
        note: note.trim()
      })
      Taro.showToast({ title: '转账成功', icon: 'success' })
      Taro.navigateBack()
    } catch (e) {
      console.error('[Transfer] submit failed', e)
      Taro.showToast({ title: '转账失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className={styles.container}>
      <Text className={styles.sectionTitle}>转账</Text>
      <Card>
        <View className={styles.section}>
          <Picker
            mode="selector"
            range={accountOptions}
            value={fromIndex}
            onChange={(e) => setFromAccountId(accounts[Number(e.detail.value)]?.id ?? null)}
          >
            <View className={styles.picker}>
              <Text className={styles.pickerText}>转出：{fromAccountId ? accounts.find((a) => a.id === fromAccountId)?.name : '选择账户'}</Text>
            </View>
          </Picker>
        </View>
        <View className={styles.section}>
          <Picker
            mode="selector"
            range={accountOptions}
            value={toIndex}
            onChange={(e) => setToAccountId(accounts[Number(e.detail.value)]?.id ?? null)}
          >
            <View className={styles.picker}>
              <Text className={styles.pickerText}>转入：{toAccountId ? accounts.find((a) => a.id === toAccountId)?.name : '选择账户'}</Text>
            </View>
          </Picker>
        </View>
        <View className={styles.section}>
          <Input className={styles.input} value={amount} type="number" onInput={(e) => setAmount(e.detail.value)} placeholder="金额" />
        </View>
        <View className={styles.section}>
          <Picker mode="date" value={date} onChange={(e) => setDate(e.detail.value)}>
            <View className={styles.picker}>
              <Text className={styles.pickerText}>日期：{date}</Text>
            </View>
          </Picker>
        </View>
        <View className={styles.section}>
          <Input className={styles.input} value={note} onInput={(e) => setNote(e.detail.value)} placeholder="备注（可选）" />
          <Text className={styles.tip}>转账不会计入收入/支出，只改变账户余额。</Text>
        </View>
      </Card>

      <View className={styles.section}>
        <PrimaryButton text={loading ? '提交中…' : '确认转账'} disabled={loading} onClick={submit} />
      </View>
    </View>
  )
}

export default TransferPage

