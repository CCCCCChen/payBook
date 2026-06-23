import { apiRequest } from './api'
import type { Budget } from '@/types/api'

export async function getBudgets(): Promise<Budget[]> {
  return apiRequest<Budget[]>('/budgets')
}

export async function createBudget(
  payload: Omit<
    Budget,
    'id' | 'period_start' | 'period_end' | 'spent' | 'remaining' | 'percent' | 'is_over' | 'created_at' | 'updated_at'
  >
): Promise<Budget> {
  return apiRequest<Budget>('/budgets', {
    method: 'POST',
    data: payload
  })
}

export async function updateBudget(
  id: number,
  payload: Partial<Omit<Budget, 'id'>>
): Promise<Budget> {
  return apiRequest<Budget>(`/budgets/${id}`, {
    method: 'PUT',
    data: payload
  })
}

export async function deleteBudget(id: number): Promise<{ success: boolean }> {
  return apiRequest<{ success: boolean }>(`/budgets/${id}`, { method: 'DELETE' })
}

