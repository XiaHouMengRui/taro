/*
 * @Author: your name
 * @Date: 2021-07-25 10:27:51
 * @LastEditTime: 2021-08-12 00:07:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\pages\index\index.tsx
 */
import { Component } from 'react'
import { View, Text, Image, Navigator, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

import { AtGrid } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { getList } from '../../api/request/http'

export default class Index extends Component {
  state = {
    swiperList: [],
    listBanner: 
      [
        {
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '领取中心'
        },
        {
          image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
          value: '找折扣'
        },
        {
          image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          value: '领会员'
        },
        {
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          value: '新品首发'
        },
        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '领豆豆'
        },
        {
          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
          value: '手机馆'
        }
      ]
    
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
        <View className="input-cont">
          <Navigator url="/pages/images/index" open-type="navigate">搜索</Navigator>
        </View>
        <View className="swiper-cont">
          <Swiper indicatorDots autoplay circular>
            {swiperList.map(item => {
              return (
                // 轮播图
                <SwiperItem>
                  <Navigator url="www.baidu.com" open-type="navigate">
                    <Image className="img-cont" mode="widthFix" src={item.image} />
                  </Navigator>
                </SwiperItem>
                // 活动banner

                // 商品list
                
              )
            })}
          </Swiper>
        </View>
        <View>
          <AtGrid data={this.state.listBanner}/>
        </View>
      </View>
    )
  }
}
