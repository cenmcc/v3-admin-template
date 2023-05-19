<template>
  <n-layout class="layout-box" position="absolute">
    <n-layout-header bordered class="layout-header">
      XXXX后台管理系统
    </n-layout-header>
    <n-layout has-sider class="layout-main" position="absolute">
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
        style=""
        class="layout-sidebar"
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

        />
      </n-layout-sider>
      <n-layout-content class="layout-content">
        <n-scrollbar trigger="none">
          <router-view></router-view>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { h } from "vue";
import type { MenuOption } from "naive-ui";
import { NIcon } from "naive-ui";
import menu from "./data";

interface Meta {
  icon?: string;
  title: string;
}
const renderIcon = (meta: Meta) => {
  if (!meta.icon) return;
  return () => h(NIcon, null, h("i", { class: `iconfont ${meta.icon || ""}` }));
};
const route = useRoute();
const urlPath = computed(() => route.path);
const options = menu.map((parent) => {
  if (parent.children instanceof Array && parent.children.length > 0) {
    parent.children = parent.children.map((c) => {
      return { ...c, icon: renderIcon(c.meta) };
    });
  }
  return { ...parent, icon: renderIcon(parent.meta) };
});
const router = useRouter();
const handleUpdateValue = (key: string, item: MenuOption) => {
  router.push(key);
  // urlPath.value = key
};
</script>

<style scoped lang="scss">
.layout-box {
  height: 100%;

  .layout-header {
    height: 60px;
  }

  .layout-main {
    top: 60px;
    height: 100%;

    .layout-sidebar {
      height: 100%;
      max-height: 100%;
      :deep(.n-layout-toggle-button) {
        top: 33%;
      }
    }

    .layout-content {
    }
  }
}
</style>
