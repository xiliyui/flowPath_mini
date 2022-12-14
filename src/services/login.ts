import Taro from "@tarojs/taro"
import { request } from "@/utils/request"

/**
 * 微信授权登录
 * @param  {Login.LoginParams} params
 */
export const login = async (params: Login.LoginParams) => {
  const url = '/users:wechatLogin'
  return await Taro.cloud.callContainer({
    path: url,
    method: 'POST',
    data: params,
    header: {
      'X-WX-SERVICE': 'inertia',
    }
  })
  return await request({
    url,
    method: 'POST',
    data: params,
  })
}