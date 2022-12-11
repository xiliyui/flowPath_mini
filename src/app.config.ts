export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/workFlow/index',
    'pages/success/index'
  ],
  entryPagePath: "pages/home/index",
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
