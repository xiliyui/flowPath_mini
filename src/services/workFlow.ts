import { request } from "@/utils/request"

/**
 * @description: 获取 workflow 列表
 * @param {WorkFlow} params
 * @return {*}
 */
export const queryList = async (params: WorkFlow.ListParams) => {
  const { userId, workflowId } = params
  const url = `/users/${userId}/workflows/${workflowId}`
  return await request({
    url,
    method: 'GET',
  })
}