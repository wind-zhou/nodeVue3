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
    router.addRoute(item)
  })
  callBack && callBack()
}


// 设置全局路由守卫
router.beforeEach((to, from) => {
  const store = useGloableStore();
  const { isGetterRouter, changeGetterRouter } = store;
  if (to.name === '/login') {
    return true
  } else {
    // 如果已经授权 ，则继续跳f转，否则，重定向至登录页
    if (!localStorage.getItem('token') && to.name !== 'login') {
      // 没有授权
      return { name: 'login' }
    } else {
      // 已经授权
      // 判断 有没有注册路由
      if (!isGetterRouter) {
        // 动态加载路由
        ConfigRouter(() => store.changeGetterRouter(true));
      }
      return true;
    }
  }

})



export default router
