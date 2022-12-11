import Taro from "@tarojs/taro";
import { getFullUrl } from "./index";
import interceptor from "./interceptor";

Taro.addInterceptor(interceptor)

// 请求方法
export const request = async (options) => {
  const { url, data, method, header } = options
  const config = {
    url: getFullUrl(url),
    data,
    method: method.toUpperCase(),
    header,
  };
  return await Taro.request(config) as RequestRes.ResData
}
