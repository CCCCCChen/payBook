import { apiRequest } from './api'
import type { Category } from '@/types/api'

export async function getCategories(): Promise<Category[]> {
  return apiRequest<Category[]>('/categories')
}
