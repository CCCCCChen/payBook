export interface TokenOut {
  access_token: string
  token_type: string
}

export interface Account {
  id: number
  name: string
  type: string
  subtype?: string | null
  initial_balance: number
  credit_limit?: number | null
  bill_date?: number | null
  due_date?: number | null
  sort_order: number
  is_deleted: boolean
  created_at?: string
  updated_at?: string
}

export interface Category {
  id: number
  name: string
  nature: 'income' | 'expense'
  expense_tier?: string | null
  icon?: string | null
  color?: string | null
  is_stable_income?: boolean
  sort_order: number
  is_system: boolean
  is_deleted: boolean
  created_at?: string
  updated_at?: string
}

export type TransactionType = 'income' | 'expense' | 'transfer_in' | 'transfer_out'

export interface Transaction {
  id: number
  entry_type: TransactionType
  amount: number
  category_id?: number | null
  account_id: number
  to_account_id?: number | null
  transaction_date: string
  note?: string | null
  budget_id?: number | null
  liability_id?: number | null
  is_cash_basis?: boolean
  created_at?: string
  updated_at?: string
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
  category_ids: number[]
  is_active: boolean
  period_start?: string | null
  period_end?: string | null
  spent: number
  remaining: number
  percent: number
  is_over: boolean
  created_at?: string
  updated_at?: string
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
