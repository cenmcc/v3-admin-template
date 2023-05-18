import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue');

// 常驻路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    meta: {},
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
]
// 异步路由
export const asyncRoutes: RouteRecordRaw[] = [

]


const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === "hash" ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH) : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes
})

export default router