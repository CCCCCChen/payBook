import Taro from '@tarojs/taro'
import { apiRequest } from './api'
import type { TokenOut } from '@/types/api'

export interface PasswordAuthPayload {
  username: string
  password: string
}

export async function loginWithWechatCode(): Promise<TokenOut> {
  const loginRes = await Taro.login()
  if (!loginRes.code) {
    throw new Error('wechat_login_no_code')
  }
  return apiRequest<TokenOut>('/auth/wechat-login', {
    method: 'POST',
    data: { code: loginRes.code }
  })
}

export async function loginWithPassword(payload: PasswordAuthPayload): Promise<TokenOut> {
  return apiRequest<TokenOut>('/auth/password-login', {
    method: 'POST',
    data: payload
  })
}

export async function registerWithPassword(payload: PasswordAuthPayload): Promise<TokenOut> {
  return apiRequest<TokenOut>('/auth/register', {
    method: 'POST',
    data: payload
  })
}

