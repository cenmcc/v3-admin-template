<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides,zhCN, dateZhCN } from "naive-ui";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#409eff",
    primaryColorHover: "#79bbFF",
    primaryColorPressed: "#79bbFF",
    primaryColorSuppl: "#79bbFF",
  },
  Button: {
  },
};
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
    <n-message-provider>
      <RouterView></RouterView>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped lang="scss"></style>