import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import './app.less'

class App extends Component<PropsWithChildren> {

  componentDidMount () {
    Taro.cloud.init({
      env: 'prod-9gq7lgcheba217b2'
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
