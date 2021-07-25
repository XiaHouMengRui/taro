/*
 * @Author: your name
 * @Date: 2021-07-25 21:10:10
 * @LastEditTime: 2021-07-26 00:03:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\api\request\http.ts
 */
import httpApi from '../config';
import Taro from '@tarojs/taro';


export function Get(url, params) {
    return Taro.request({url: url, data: params, method: 'GET'}).catch(err=>console.log(err));
}

export function Post(url, params) {
    return Taro.request({url: url, data: params, method: 'POST'}).catch(err=>console.log(err));
}


export async function getList(params:Object) {
    let result = await Get(httpApi.swiperUrl, params);
    return result;
}