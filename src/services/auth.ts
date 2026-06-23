import Taro from '@tarojs/taro'
import { apiRequest } from './api'
import type { TokenOut } from '@/types/api'

export async function loginWithWechatCode(): Promise<TokenOut> {
  const loginRes = await Taro.login()
  if (!loginRes.code) {
    throw new Error('wechat_login_no_code')
  }
  return apiRequest<TokenOut>('/auth/login', {
    method: 'POST',
    data: { code: loginRes.code }
  })
}

