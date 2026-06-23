import { apiRequest } from './api'
import type { Transaction } from '@/types/api'
import { toQueryString } from '@/utils/query'

export async function getTransactions(params: {
  month?: string
  start_date?: string
  end_date?: string
  account_id?: number
  category_id?: number
  keyword?: string
  budget_id?: number
}): Promise<Transaction[]> {
  const qs = toQueryString(params)
  return apiRequest<Transaction[]>(`/transactions${qs}`)
}

export async function createTransaction(payload: Omit<Transaction, 'id'>): Promise<Transaction> {
  return apiRequest<Transaction>('/transactions', {
    method: 'POST',
    data: payload
  })
}

export async function transfer(payload: {
  from_account_id: number
  to_account_id: number
  amount: number
  transaction_date: string
  note?: string
}): Promise<{ success: boolean }> {
  return apiRequest<{ success: boolean }>('/transactions/transfer', {
    method: 'POST',
    data: payload
  })
}
