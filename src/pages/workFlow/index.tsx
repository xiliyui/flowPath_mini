import { FC, useState, useEffect } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Button } from '@antmjs/vantui'
import CustomSteps from '@/components/CustomSteps'
// import useCountDown from '@/hooks/countdown'
import { completeExecution, insertExecution, queryDetails } from '@/services/workFlow'
import styles from './index.module.less'

const WorkFlow: FC = () => {
  const [steps, setSteps] = useState<WorkFlow.Step[]>([])
  const [executionId, setExecutionId] = useState()
  const [active, setActive] = useState(0)
  const [btnType, setBtnType] = useState<any>('primary')
  const [btnDisabled, setBtnDisabled] = useState(false)
  // const { count, run, clear } = useCountDown(300)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const workflowId = getCurrentInstance().router?.params.id;
    const res: any = await queryDetails({ workflowId: workflowId as string, userId: '' })
    console.log("🚀 ~ file: index.tsx:43 ~ fetchData ~ res", res)
    if (res?.statusCode === 200) {
      const execRes: any = await insertExecution({
        workflow: workflowId,
        ...res?.data,
      })
      console.log("🚀 ~ file: index.tsx:49 ~ fetchData ~ execRes", execRes)
      if (execRes?.statusCode === 200) {
        setExecutionId(execRes?.data?.name?.split('/')?.[3])
      }
      setSteps(res?.data?.steps)
    }
  }

  const nextStep = () => {
    setActive(active + 1)
  }

  // const checkStatus = (type) => {
  //   setBtnType(type)
  // }

  const complete = async () => {
    const res: any = await completeExecution({ executionId })
    return res?.statusCode === 200
  }

  useEffect(() => {
    // clear()
    // run()
    // checkStatus('primary')
    if (steps.length && active > steps.length - 1) {
      complete().then(res => {
        if (res) {
          Taro.navigateTo({
            url: '/pages/success/index'
          })
        }
      })
    }
  }, [active])

  // useEffect(() => {
  //   if (count <= 0) {
  //     checkStatus('danger')
  //     setBtnDisabled(true)
  //     clear()
  //   } else if (count <= 180) {
  //     checkStatus('warning')
  //   }
  // }, [count])

  const renderStep = (step) => (
    <View className={styles.step}>
      <Text className={styles.desc}>{step?.description}</Text>
      <Button type={btnType} disabled={btnDisabled} block onClick={nextStep}>完成</Button>
    </View>
  )

  return (
    <View className={styles.cont}>
      <CustomSteps steps={steps?.map((item) => ({ step: item?.displayName }))} active={active} />
      {renderStep(steps[active])}
    </View>
  )
}

export default WorkFlow