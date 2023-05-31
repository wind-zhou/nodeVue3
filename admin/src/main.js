
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from "particles.vue3";  // 粒子库
import './util/axios.config'


import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElementPlus)
    .use(Particles)
    .mount('#app')
