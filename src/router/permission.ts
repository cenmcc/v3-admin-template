import router from './index'
import { whiteList } from '@/config/white-list'
import NProgress from "nprogress"
import "nprogress/nprogress.css"
NProgress.configure({ showSpinner: false })


const isLogin = true // 是否登录

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if(isLogin) {
    // 已登录
    if(to.path === "/login") {
      // 如果跳转的是登录页面
      next({ path: "/" })
    } else {
      // 如果跳转的不是登录页面
      next()
    }
  } else {
    // 没登录
    if(whiteList.indexOf(to.path) !== -1) {
      // 如果在免登录的白名单中，则直接进入
      next()
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      next("/login")
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
