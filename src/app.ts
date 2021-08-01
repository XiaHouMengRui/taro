/*
 * @Author: your name
 * @Date: 2021-07-25 10:27:51
 * @LastEditTime: 2021-07-28 23:55:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\app.ts
 */
import { Component } from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
