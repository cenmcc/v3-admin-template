<template>
  <n-layout has-sider class="layout-box" position="absolute">
    <Sidebar class="layout-sidebar"/>
    <n-layout>
      <Header class="layout-header"/>
      <Main class="layout-content"/>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import Header from './header/index.vue'
import Sidebar from './sidebar/index.vue'
import Main from './main/index.vue'
</script>

<style scoped lang="scss">
.layout-box {
  height: 100%;
  width: 100%;
  .layout-header {
    height: 80px;
    background: #FFF;
  }
  .layout-content {
      top: 80px;
      padding: 10px;
      background-color: #f2f3f5;
    }
}
</style>
