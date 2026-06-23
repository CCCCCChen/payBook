import { apiRequest } from './api'
import type { PendingTransaction, RecurringTemplate } from '@/types/api'

export async function getRecurringTemplates(): Promise<RecurringTemplate[]> {
  return apiRequest<RecurringTemplate[]>('/recurring-templates')
}

export async function createRecurringTemplate(payload: Omit<RecurringTemplate, 'id'>): Promise<RecurringTemplate> {
  return apiRequest<RecurringTemplate>('/recurring-templates', {
    method: 'POST',
    data: payload
  })
}

export async function updateRecurringTemplate(
  id: number,
  payload: Partial<Omit<RecurringTemplate, 'id'>>
): Promise<RecurringTemplate> {
  return apiRequest<RecurringTemplate>(`/recurring-templates/${id}`, {
    method: 'PUT',
    data: payload
  })
}

export async function deleteRecurringTemplate(id: number): Promise<{ success: boolean }> {
  return apiRequest<{ success: boolean }>(`/recurring-templates/${id}`, {
    method: 'DELETE'
  })
}

export async function getPendingTransactions(): Promise<PendingTransaction[]> {
  return apiRequest<PendingTransaction[]>('/pending-transactions')
}

export async function confirmPendingTransaction(
  id: number,
  payload?: Partial<Pick<PendingTransaction, 'amount' | 'category_id' | 'account_id' | 'date' | 'note'>>
): Promise<{ success: boolean; transaction_id: number }> {
  return apiRequest<{ success: boolean; transaction_id: number }>(`/pending-transactions/${id}/confirm`, {
    method: 'POST',
    data: payload ?? {}
  })
}

export async function skipPendingTransaction(id: number): Promise<{ success: boolean }> {
  return apiRequest<{ success: boolean }>(`/pending-transactions/${id}/skip`, {
    method: 'POST'
  })
}

