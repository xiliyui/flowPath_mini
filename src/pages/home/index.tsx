import { FC, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { CellGroup, Cell } from '@antmjs/vantui'
import { queryList } from '@/services/workFlow'
import styles from './index.module.less'

const Home: FC = () => {
  const [list, setList] = useState<WorkFlow.ListRes[] | []>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res: any = await queryList()
    if (res.statusCode === 200) {
      setList(res.data)
    }
  }

  return (
    <View className={styles.cont}>
      <Text className={styles.title}>work flow</Text>
      <CellGroup inset>
        {
          list?.map((item) => (
            <Cell
              key={item?.displayName}
              isLink
              title={item?.displayName}
              value='开始'
              linkType='navigateTo'
              url={`/pages/workFlow/index?id=${item?.name?.split('/')?.[3]}`}
            />
          ))
        }
      </CellGroup>
    </View>
  )
}

export default Home