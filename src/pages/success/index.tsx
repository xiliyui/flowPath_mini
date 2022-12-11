import Taro from '@tarojs/taro'
import { View, Text } from "@tarojs/components"
import { Button, Image } from "@antmjs/vantui"
import IconSubmitSuccess from '@/assets/icons/icon_submit_success.png'
import styles from './index.module.less'

const Success: React.FC = () => {
  return (
    <View className={styles.cont}>
      <Image src={IconSubmitSuccess} />
      <Text>流程完成啦~</Text>
      <Button onClick={() => Taro.navigateBack({ delta: 2 })} style={{ marginTop: '24rpx' }}>返回首页</Button>
    </View>
  )
}

export default Success