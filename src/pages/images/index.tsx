/*
 * @Author: your name
 * @Date: 2021-07-26 00:33:46
 * @LastEditTime: 2021-08-01 16:30:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\pages\images\index.tsx
 */
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { AtSearchBar } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'


export default class Images extends Component {
    state = {
        value: ''
    }
    onChange (value) {
        this.setState({
            value: value
        })
    }
    render() {
        return (
            <View>
                <AtSearchBar
                    value={this.state.value}
                    onChange={this.onChange.bind(this)} />
            </View>
        )
    }
}