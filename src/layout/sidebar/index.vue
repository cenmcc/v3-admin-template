<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    class="layout-sidebar"
    :collapsed="isCollapsed"
  >
    <n-menu
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="options"
      class="layout-menu"
      key-field="urlpath"
      label-field="text"
      :value="urlPath"
      @update:value="handleUpdateValue"
      show-trigger="arrow-circle"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import menu from "./data";
import { useAppStore } from "@/store/modules/app";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";

const appStore = useAppStore()
const isCollapsed = computed(() => {
  return !appStore.opened
})
const onCollapsed = () => {
  console.log(1111)
}




/** 菜单栏逻辑 */
// 格式化菜单栏Icon
const renderIcon = (meta: any) => {
  if (!meta.icon) return;
  return () => h(NIcon, null, h("i", { class: `iconfont ${meta.icon || ""}` }));
};
// 格式化Menu
const options = menu.map((parent) => {
  if (parent.children instanceof Array && parent.children.length > 0) {
    parent.children = parent.children.map((c) => {
      return { ...c, icon: renderIcon(c.meta) };
    });
  }
  return { ...parent, icon: renderIcon(parent.meta) };
});

// 活跃的MenuKey
const route = useRoute();
const urlPath = computed(() => route.path);

// Menu点击
const router = useRouter();
const handleUpdateValue = (key: string, item: MenuOption) => {
  router.push(key);
  // urlPath.value = key
};
</script>

<style scoped></style>
