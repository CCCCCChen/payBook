import type { Account, Category, Transaction } from '@/types/api'

const typeLabelMap: Record<string, string> = {
  income: '收入',
  expense: '支出',
  transfer_in: '转入',
  transfer_out: '转出'
}

export function buildTransactionMaps(accounts: Account[], categories: Category[]) {
  const accountMap = new Map<number, Account>()
  const categoryMap = new Map<number, Category>()
  accounts.forEach((a) => accountMap.set(a.id, a))
  categories.forEach((c) => categoryMap.set(c.id, c))
  return { accountMap, categoryMap }
}

export function getTransactionTitle(
  tx: Transaction,
  categoryMap: Map<number, Category>
) {
  const category = tx.category_id ? categoryMap.get(tx.category_id) : null
  return tx.note?.trim() || category?.name || typeLabelMap[tx.type] || tx.type
}

export function getTransactionDesc(
  tx: Transaction,
  accountMap: Map<number, Account>,
  categoryMap: Map<number, Category>
) {
  const account = accountMap.get(tx.account_id)
  const category = tx.category_id ? categoryMap.get(tx.category_id) : null
  const parts = [tx.date]
  if (category?.name) parts.push(category.name)
  if (account?.name) parts.push(account.name)
  return parts.join(' · ')
}

