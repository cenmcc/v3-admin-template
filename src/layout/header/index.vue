<template>
  <n-layout-header bordered position="absolute" class="header-box">
      <div class="toggle-btn" @click="appStore.toggleSidebar">
        <i class="iconfont" :class="toggleIcon"></i>
      </div>
  </n-layout-header>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";
const appStore = useAppStore();
const toggleIcon = computed(() => {
  return {
    'icon-outdent': appStore.opened,
    'icon-indent': !appStore.opened
  }
})
</script>

<style scoped lang="scss">
.header-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-btn {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
}
.iconfont {
  font-size: 26px;
}
</style>
