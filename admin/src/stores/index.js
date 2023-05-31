import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus';
import axios from 'axios';

export const useGloableStore = defineStore('gloable', {
  state: () => ({
    // 是否获取到路由 【锁】
    isGetterRouter: false,
    // 菜单是否展开 【横向】
    isCollapsed: false,
    // 用户信息
    userInfo: {}
  }),


  // action 里不能使用箭头函数？
  actions: {
    changeGetterRouter(payload) {
      this.isGetterRouter = payload
    },
    //控制侧边栏的展开
    changeCollapsed() {
      this.isCollapsed = !this.isCollapsed
    },

    // login 接口
    async login(params, callBack) {
      axios.post("http://localhost:3000/adminapi/user/login", params).then(res => {
        console.log(res, 'zz----------')
        if (res.data.ActionType === "OK") {
          // console.log(res.data.data)
          this.userInfo = res.data.data;
          this.isGetterRouter = false;
          callBack && callBack()
        } else {
          ElMessage.error(res.data.error || '用户名和密码不匹配111')
        }
      })

    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ['userInfo']
      },
    ],
  },
})
