import Taro from "@tarojs/taro";
import { getBaseUrl } from "@/config/env";

const { baseUrl } = getBaseUrl();

// 获取完整请求路径
export const getFullUrl = (url: string) => {
  if (!url) throw new Error(`请求路径配置错误, 请正确配置请求路径后重试!~`)
  if (url.startsWith('https') || url.startsWith('http')) return url
  return baseUrl + url
}

// 获取缓存数据
export const getStorage = (key: string) => {
  return Taro.getStorageSync(key) || ''
}

// 更新缓存数据
export const updateStorage = (key: string, data: any) => {
  try {
    return Taro.setStorageSync(key, data)
  } catch (e) {
    console.log("🚀 ~ file: request.ts ~ line 23 ~ updateStorage ~ e", e)
  }
}

// 设置当前选中的 tabbar
export const setActiveTabbar = (active: number) => {
  const pageCtx = Taro.getCurrentInstance().page;
  const tabbar = Taro.getTabBar<any>(pageCtx)
  tabbar?.setActive(active)
}