import Taro from "@tarojs/taro"

const baseUrlOptions = {
  develop: 'https://api',
  trial: 'https://api',
  release: 'https://api'
}

export const getBaseUrl = () => {
  // 获取当前帐号信息
  const accountInfo = IS_WEAPP && Taro.getAccountInfoSync();
  const { envVersion }: any = accountInfo && accountInfo.miniProgram;
  const baseRequest: any = {}
  if (IS_WEAPP) {
    switch (envVersion) {
      case 'develop':
        baseRequest.baseUrl = baseUrlOptions.develop
        break;
      case 'trial':
        baseRequest.baseUrl = baseUrlOptions.trial
        break;
      case 'release':
        baseRequest.baseUrl = baseUrlOptions.release
        break;
    }
  }
  if (IS_H5) {
    baseRequest.baseUrl = '/api';
  }
  return baseRequest
}