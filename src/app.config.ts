export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/mine/index',
    'pages/login/index',
    'pages/workFlow/index',
    'pages/success/index'
  ],
  entryPagePath: 'pages/home/index',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#333333',
    backgroundColor: '#fff',
    position: 'bottom',
    list: [{
      text: '首页',
      pagePath: 'pages/home/index',
      iconPath: 'assets/icons/tabBar/icon_home_default.png',
      selectedIconPath: 'assets/icons/tabBar/icon_home_selected.png',
    },
    {
      text: '我的',
      pagePath: 'pages/mine/index',
      iconPath: 'assets/icons/tabBar/icon_my_default.png',
      selectedIconPath: 'assets/icons/tabBar/icon_my_selected.png',
    }],
  },
})
