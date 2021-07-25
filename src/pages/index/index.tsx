/*
 * @Author: your name
 * @Date: 2021-07-25 10:27:51
 * @LastEditTime: 2021-07-26 01:36:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\pages\index\index.tsx
 */
import { Component } from 'react'
import { View, Text, Image, Navigator, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import { getList } from '../../api/request/http'

export default class Index extends Component {
  state = {
    swiperList: []
  }
  componentWillMount () { }

  componentDidMount () { 
    getList({}).then(res=>{
      this.setState({
        swiperList: res.data.array
      })
      console.log(this.state.swiperList)
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let {swiperList} = this.state
    return (
      <View className="container">
        <view className="input-cont">
          <Navigator url="/pages/images/index" open-type="navigate">搜索</Navigator>
        </view>
        <View className="swiper-cont">
          <Swiper>
            {swiperList.map(item => {
              return (
                <SwiperItem>
                  <Navigator>
                    <Image className="img-cont" mode="widthFix" src={item.image} />
                  </Navigator>
                </SwiperItem>
              )
            })}
          </Swiper>
        </View>
      </View>
    )
  }
}