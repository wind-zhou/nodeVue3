import { defineStore } from 'pinia'

export const useGloableStore = defineStore('gloable', {
  state: () => ({
    // 是否获取到路由 【锁】
    isGetterRouter: false,
    isCollapsed: false
  }),


  // action 里不能使用箭头函数？
  actions: {
    changeGetterRouter(payload) {
      this.isGetterRouter = payload
    },
    //控制侧边栏的展开
    changeCollapsed() {
      // debug
      console.log('%%%%%%%');
      this.isCollapsed = !this.isCollapsed
      console.log('zzz----',this.isCollapsed);
    }
  }

})
