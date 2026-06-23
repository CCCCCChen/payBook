import { apiRequest } from './api'
import { toQueryString } from '@/utils/query'
import type { AccountBalanceItem, StatisticsCategoryItem, StatisticsSummary } from '@/types/api'

export async function getSummary(month: string): Promise<StatisticsSummary> {
  const qs = toQueryString({ month })
  return apiRequest<StatisticsSummary>(`/statistics/summary${qs}`)
}

export async function getCategoryPie(start: string, end: string): Promise<{ items: StatisticsCategoryItem[] }> {
  const qs = toQueryString({ start, end })
  return apiRequest<{ items: StatisticsCategoryItem[] }>(`/statistics/category-pie${qs}`)
}

export async function getAccountBalances(): Promise<{ items: AccountBalanceItem[] }> {
  return apiRequest<{ items: AccountBalanceItem[] }>('/statistics/account-balances')
}

