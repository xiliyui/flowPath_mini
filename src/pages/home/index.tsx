import { FC } from 'react'
import { View, Text } from '@tarojs/components'
import { CellGroup, Cell } from '@antmjs/vantui'
import styles from './index.module.less'

const Home: FC = () => {

  return (
    <View className={styles.cont}>
      <Text className={styles.title}>work flow</Text>
      <CellGroup inset>
        <Cell
          isLink
          title='出门'
          value='开始'
          linkType='navigateTo'
          url='/pages/workFlow/index'
        />
      </CellGroup>
    </View>
  )
}

export default Home