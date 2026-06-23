import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { taroStorage } from './storage'

interface AuthState {
  token: string | null
  setToken: (token: string | null) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      logout: () => set({ token: null })
    }),
    {
      name: 'paybook_auth',
      storage: createJSONStorage(() => taroStorage)
    }
  )
)
