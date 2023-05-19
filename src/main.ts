import { createApp } from 'vue'
import './styles'
import App from './App.vue'
import router from './router'
import '@/router/permission'
import store from '@/store'
import { loadDirectives } from "@/directives"
import { loadSvg } from "@/icons"


const app = createApp(App)


/** 加载El-Icon */

/** 加载插件 */
loadDirectives(app)
/** 注册全局Svg */
loadSvg(app)  
/** 注册路由 */
app.use(router).use(store)
router.isReady().then(() => {
  app.mount("#app")
})