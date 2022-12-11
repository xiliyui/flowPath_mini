import { FC } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Button } from '@antmjs/vantui'
import './index.less'

const Home: FC = () => {
  const navDetails = () => {
    Taro.navigateTo({
      url: '/pages/details/index'
    })
  }

  return (
    <View className='home'>
      <Text>Hello world!</Text>
      <Button type='info' block onClick={navDetails}>Details</Button>
    </View>
  )
}

export default Home