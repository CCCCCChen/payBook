import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { taroStorage } from './storage'

interface SettingsState {
  baseUrl: string
  setBaseUrl: (baseUrl: string) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      baseUrl: 'http://localhost:8000/api/v2',
      setBaseUrl: (baseUrl) => set({ baseUrl })
    }),
    {
      name: 'paybook_settings',
      storage: createJSONStorage(() => taroStorage)
    }
  )
)
