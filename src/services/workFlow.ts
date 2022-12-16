import Taro from "@tarojs/taro"
import { request } from "@/utils/request"

/**
 * @description: 获取 workflow 列表
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
 * @param {WorkFlow.ListParams} params
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
    },
  })
  return await request({
    url,
    method: 'GET',
  })
}

/**
 * @description: 新建 execution
 * @param {WorkFlow.Execution} body
 * @return {*}
 */
export const insertExecution = async (body: WorkFlow.Execution) => {
  const url = '/users/abc/executions'
  return await Taro.cloud.callContainer({
    path: url,
    method: 'POST',
    header: {
      'X-WX-SERVICE': 'inertia',
    },
    data: body,
  })
  return await request({
    url,
    method: 'POST',
    body,
  })
}

/**
 * @description: 完成 execution
 * @param {{ id: string }} params
 * @return {*}
 */
export const completeExecution = async (params) => {
  const { executionId } = params
  const url = `/users/abc/executions/${executionId}:complete`
  return await Taro.cloud.callContainer({
    path: url,
    method: 'POST',
    header: {
      'X-WX-SERVICE': 'inertia',
    },
  })
  return await request({
    url,
    method: 'POST',
  })
}