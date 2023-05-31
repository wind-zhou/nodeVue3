import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from "../views/MainBox.vue"
import { useGloableStore } from '../stores/index'
import routesConfig from './routesConfig'

// 基础路由列表
const routes = [
  {
    path: "/login",
    name: 'login',
    component: Login
  },
  {
    path: "/mainbox",
    name: 'mainbox',
    component: MainBox
  }
  //mainbox的嵌套路由, 后面根据权限动态添加
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// 动态加载路由
const ConfigRouter = (callBack) => {
  routesConfig.forEach(item => {
    router.addRoute('mainbox', item)
  })
  callBack && callBack()
}


// 设置全局路由守卫
router.beforeEach((to, from, next) => {
  const store = useGloableStore();
  const { isGetterRouter } = store;
  if (to.name === '/login') {
    // return true
    next()
  } else {
    // 如果已经授权 ，则继续跳f转，否则，重定向至登录页
    if (!localStorage.getItem('token') && to.name !== 'login') {
      // 没有授权
      // return { name: 'login' }
      next({
        path: "/login"
      })
    } else {
      // 已经授权
      // 判断 有没有注册路由
      if (!isGetterRouter) {
        // debug
        console.log('zz--------开始动态加载路由');
        // 动态加载路由
        ConfigRouter(() => {
          store.changeGetterRouter(true), next({
            path: to.fullPath
          })
        });
      } else {
        next()
      }
      // return true;
    }
  }

})



export default router
