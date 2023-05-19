import type {  App } from "vue"
import SvgIcon from "@/components/SvgIcon/index.vue" // Svg Component
import "virtual:svg-icons-register"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export function loadSvg(app: App) {
  app.component("SvgIcon", SvgIcon)
}



export function loadIcon(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}