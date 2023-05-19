<template>
  <el-container class="container">
    <AppAside />
    <el-container direction="vertical">
      <AppHeader />
      <AppMain />
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { AppHeader, AppMain, AppAside } from './index'
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>