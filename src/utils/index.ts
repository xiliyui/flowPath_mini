import { getBaseUrl } from "@/config/env";

const { baseUrl } = getBaseUrl();

// 获取完整请求路径
export const getFullUrl = (url: string) => {
  if (!url) throw new Error(`请求路径配置错误, 请正确配置请求路径后重试!~`)
  if (url.startsWith('https') || url.startsWith('http')) return url
  return baseUrl + url
}