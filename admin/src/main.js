
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'// pina 持久化
import Particles from "particles.vue3";  // 粒子库
import './util/axios.config'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'

const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App)
    .use(pinia)
    .use(router)
    .use(ElementPlus)
    .use(Particles)
    .mount('#app')
