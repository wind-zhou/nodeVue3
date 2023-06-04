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
  if (!router.hasRoute("mainbox")) {
    router.addRoute({
      path: "/mainbox",
      name: "mainbox",
      component: MainBox
    })
  }
  routesConfig.forEach(item => {
    checkPermission(item) && router.addRoute('mainbox', item)
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
        //删除所有的嵌套路由
        //mainbox
        router.removeRoute("mainbox")
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

// 判断用户是否有管理员权限
const checkPermission = (item) => {
  const store = useGloableStore();
  const { userInfo } = store;
  if (item.requireAdmin) {
    return userInfo.role === 1
  }
  return true
}




export default router
