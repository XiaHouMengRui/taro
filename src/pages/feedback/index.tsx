/*
 * @Author: your name
 * @Date: 2021-07-25 20:54:20
 * @LastEditTime: 2021-07-26 01:13:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\pages\feedback\index.tsx
 */
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Feedback extends Component {
    state = {
        listData: [{
              "icon": "../../asset/images/check1.png",
              "name": "意见反馈"
            },
            {
              "icon": "../../asset/images/icon1.png",
              "name": "关于"
            }]
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className="container">
                {this.state.listData.map(item=>{
                    return (
                        <View className="item-cont">
                            <Image className="img-cont" mode="widthFix" src={item.icon} />
                            <Text className="name-cont">
                                {item.name}
                            </Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}