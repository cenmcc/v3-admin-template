<template>
  <div class="header">
    <Hamburger :is-active="appStore.opened" @toggleClick="appStore.toggleSidebar" />
    <Breadcrumb />
  </div>
</template>

<script setup lang="ts">
import Hamburger from './Hamburger.vue'
import Breadcrumb from './Breadcrumb.vue'
import { useAppStore } from '@/store/modules/app';
const appStore = useAppStore()
</script>

<style scoped>
.header {
  height: var(--v3-header-height);
  display: flex;
  align-items: center;
}
</style>