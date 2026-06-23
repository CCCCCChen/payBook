import Taro from '@tarojs/taro'

export const taroStorage = {
  getItem: (name: string): string | null => {
    try {
      const v = Taro.getStorageSync(name)
      return typeof v === 'string' ? v : v ? JSON.stringify(v) : null
    } catch (e) {
      console.error('[Storage] getItem failed', name, e)
      return null
    }
  },
  setItem: (name: string, value: string) => {
    try {
      Taro.setStorageSync(name, value)
    } catch (e) {
      console.error('[Storage] setItem failed', name, e)
    }
  },
  removeItem: (name: string) => {
    try {
      Taro.removeStorageSync(name)
    } catch (e) {
      console.error('[Storage] removeItem failed', name, e)
    }
  }
}
