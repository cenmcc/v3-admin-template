import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue');

// 常驻路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: '首页'
    },
  },
  {
    path: '/template',
    component: Layout,
    redirect: '/template/table',
    meta: {
      title: '模板'
    },
    children: [
      {
        path: 'table',
        meta: {
          title: '表单'
        },
        component: () => import('@/views/template/table.vue')
      }
    ]
  },
  {
    path: '/permissions',
    component: Layout,
    meta: { title: '权限管理' },
    redirect: '/permissions/user-manage',
    children: [
      {
        path: 'user-manage',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/views/permissions/userManage.vue'),
      },
      {
        path: 'user-manage/:id',
        meta: {
          title: '编辑用户'
        },
        component: () => import('@/views/permissions/editUser.vue')
      },
      {
        path: 'role-manage',
        meta: {
          title: '角色管理'
        },
        component: () => import('@/views/permissions/roleManage.vue')
      }
    ]
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

const r = {
  path: '/settle',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/home/index.vue')
    }
  ]
}
router.addRoute(r)
export default router