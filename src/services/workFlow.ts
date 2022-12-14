import Taro from "@tarojs/taro"
import { request } from "@/utils/request"

/**
 * @description: 获取 workflow 列表
 * @param {WorkFlow} params
 * @return {*}
 */
export const queryList = async () => {
  const url = '/users/abc/workflows'
  return await Taro.cloud.callContainer({
    path: url,
    method: 'GET',
    header: {
      'X-WX-SERVICE': 'inertia',
    }
  })
  return await request({
    url,
    method: 'GET',
  })
}

/**
 * @description: 获取 workflow 详情
 * @param {WorkFlow} params
 * @return {*}
 */
export const queryDetails = async (params: WorkFlow.ListParams) => {
  const { workflowId } = params
  const url = `/users/abc/workflows/${workflowId}`
  return await Taro.cloud.callContainer({
    path: url,
    method: 'GET',
    header: {
      'X-WX-SERVICE': 'inertia',
    }
  })
  return await request({
    url,
    method: 'GET',
  })
}