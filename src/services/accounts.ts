import { apiRequest } from './api'
import type { Account } from '@/types/api'

export async function getAccounts(): Promise<Account[]> {
  return apiRequest<Account[]>('/accounts')
}
