export default [
  {
    path: '/', // 一级路由
    // 二级路由
    component: '@/layouts/BasicLayout', // 引入布局组件
    routes: [
      { path: '/', component: './xform', title: '卡片' },
      { path: '/home', component: './home', title: 'parseUrl' },
      { path: '/city', component: './city', title: '三级联动' },
    ]
  },
]
