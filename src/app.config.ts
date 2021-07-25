/*
 * @Author: your name
 * @Date: 2021-07-25 10:27:51
 * @LastEditTime: 2021-07-26 00:53:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myApp\src\app.config.ts
 */
export default {
  pages: [
    'pages/index/index',
    'pages/feedback/index',
    'pages/images/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "asset/images/check2.png",
      "selectedIconPath": "asset/images/check1.png"
    },{
      "pagePath": "pages/feedback/index",
      "text": "关于我们",
      "iconPath": "asset/images/icon2.png",
      "selectedIconPath": "asset/images/icon1.png"
    }]
  },
}
