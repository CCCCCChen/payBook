export interface TokenOut {
  access_token: string
  token_type: string
}

export interface Account {
  id: number
  name: string
  type: string
  initial_balance: number
  sort_order: number
  is_deleted: boolean
}

export interface Category {
  id: number
  name: string
  type: 'income' | 'expense'
  icon?: string | null
  color?: string | null
  sort_order: number
  is_system: boolean
  is_deleted: boolean
}

export type TransactionType = 'income' | 'expense' | 'transfer_in' | 'transfer_out'

export interface Transaction {
  id: number
  type: TransactionType
  amount: number
  category_id?: number | null
  account_id: number
  to_account_id?: number | null
  date: string
  note?: string | null
  budget_id?: number | null
}

export interface RecurringTemplate {
  id: number
  name: string
  type: 'income' | 'expense'
  amount: number
  category_id?: number | null
  account_id: number
  cycle_type: 'weekly' | 'monthly'
  cycle_day: number
  next_due_date: string
  is_active: boolean
  note?: string | null
}

export interface PendingTransaction {
  id: number
  template_id?: number | null
  type: 'income' | 'expense'
  amount: number
  category_id?: number | null
  account_id: number
  date: string
  due_date: string
  note?: string | null
  status: 'pending' | 'confirmed' | 'skipped'
}

export interface Budget {
  id: number
  name: string
  cycle_type: 'weekly' | 'monthly' | 'custom'
  start_date?: string | null
  end_date?: string | null
  amount: number
  category_scope: number[]
  is_active: boolean
  period_start?: string | null
  period_end?: string | null
  spent: number
  remaining: number
  percent: number
  is_over: boolean
}

export interface StatisticsSummary {
  month: string
  income: number
  expense: number
  balance: number
  fixed_monthly_expense: number
}

export interface StatisticsCategoryItem {
  category_id: number
  amount: number
  name: string
  icon?: string | null
  color?: string | null
}

export interface AccountBalanceItem {
  account_id: number
  name: string
  type: string
  balance: number
}
