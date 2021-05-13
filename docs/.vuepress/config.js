module.exports = {
  title: 'Fish-UI',
  description: '结合CSS3封装的特效UI组件',
  base: '/fish-ui/',  //部署到Github相关配置
  themeConfig: {
    sidebar: [
      {
        title: '更新日志',
        path: '/update/'
      },
      {
        title: 'Button 按钮',
        collapsable: false,
        children: [
          ['/button/rotateButton', '旋转按钮'],
          ['/button/polyButton', '聚合按钮'],
        ]
      }
    ]
  }
}
