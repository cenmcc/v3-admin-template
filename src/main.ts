import { createApp } from 'vue'
import './styles'
import App from './App.vue'
import router from './router'
import '@/router/permission'
import { loadDirectives } from "@/directives"

const app = createApp(App)

/** 加载指令 */
loadDirectives(app)

/** 注册路由 */
app.use(router)
router.isReady().then(() => {
  app.mount("#app")
})