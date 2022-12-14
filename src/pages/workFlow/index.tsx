import { FC, useState, useEffect } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Steps, Button } from '@antmjs/vantui'
import useCountDown from '@/hooks/countdown'
import { queryDetails } from '@/services/workFlow'
import styles from './index.module.less'

const initSteps = [
  {
    displayName: '步骤一',
    description: '描述信息',
  },
  {
    displayName: '步骤二',
    description: '描述信息',
  },
  {
    displayName: '步骤三',
    description: '描述信息',
  },
  {
    displayName: '步骤四',
    description: '描述信息',
  },
]

const WorkFlow: FC = () => {
  const [steps, setSteps] = useState(initSteps)
  const [active, setActive] = useState(0)
  const [activeIcon, setActiveIcon] = useState('circle')
  const [activeColor, setActiveColor] = useState('#07c160')
  const [btnType, setBtnType] = useState<any>('primary')
  const [btnDisabled, setBtnDisabled] = useState(false)
  const { count, run, clear } = useCountDown(60)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const workflowId = getCurrentInstance().router?.params.id;
    const res: any = await queryDetails({ workflowId: workflowId as string, userId: '' })
    setSteps(res?.steps)
  }

  const nextStep = () => {
    setActive(active + 1)
  }

  const checkStatus = (icon, color, type) => {
    setActiveIcon(icon)
    setActiveColor(color)
    setBtnType(type)
  }

  useEffect(() => {
    clear()
    run()
    checkStatus('circle', '#07c160', 'primary')
    if (active > steps.length - 1) {
      Taro.navigateTo({
        url: '/pages/success/index'
      })
    }
  }, [active])

  useEffect(() => {
    if (count <= 50) {
      checkStatus('cross', '#ee0a24', 'danger')
      setBtnDisabled(true)
      clear()
    } else if (count <= 55) {
      checkStatus('fail', '#ff976a', 'warning')
    }
  }, [count])

  const renderStep = (step) => (
    <View className={styles.step}>
      <Text className={styles.title}>{step?.displayName}</Text>
      <Text className={styles.desc}>{step?.description}</Text>
      <Button type={btnType} disabled={btnDisabled} block onClick={nextStep}>完成</Button>
    </View>
  )

  return (
    <View className={styles.cont}>
      <Steps
        steps={steps?.map((step) =>({
          text: step?.displayName,
          desc: '',
        }))}
        active={active}
        activeIcon={activeIcon}
        activeColor={activeColor}
        inactiveIcon='success'
      />
      {renderStep(steps[active])}
    </View>
  )
}

export default WorkFlow