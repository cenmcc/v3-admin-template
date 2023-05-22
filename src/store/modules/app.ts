import { defineStore } from "pinia";
// interface ISidebar {
//   opened: boolean;
//   withoutAnimation: boolean;
// }
export const useAppStore = defineStore("app", {
  state: () => ({
    opened: true,
    withoutAnimation: false
  }),
  actions: {
    // 切换侧边栏状态
    toggleSidebar(withoutAnimation: boolean) {
      console.log(111)
      this.opened = !this.opened;
      this.withoutAnimation = withoutAnimation
    },
    // 收起侧边栏
    closeSidebar(withoutAnimation: boolean) {
      this.opened = false
      this.withoutAnimation = withoutAnimation
    },
  },
});
