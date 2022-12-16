import { FC } from 'react'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import styles from './index.module.less'

type Props = {
  steps: { step: string }[]
  active: number
}

const CustomSteps: FC<Props> = (props) => {
  const { steps, active } = props

  return (
    <View className={styles.cont}>
      <View className={classnames(styles.between, styles.right)}>{active > 0 ? steps?.[active - 1]?.step : null}</View>
      <View className={styles.center}>{steps?.[active]?.step}</View>
      <View className={classnames(styles.between, styles.left)}>{steps?.[active + 1]?.step}</View>
    </View>
  )
}

export default CustomSteps