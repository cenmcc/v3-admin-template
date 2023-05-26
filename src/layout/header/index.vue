<template>
  <n-layout-header bordered position="absolute" class="header-box">
    <div class="header-top">
      <div class="header-left">
        <div class="toggle-btn" @click="appStore.toggleSidebar">
          <i class="iconfont" :class="toggleIcon"></i>
        </div>
        <div class="crumbs">
          <n-breadcrumb>
            <n-breadcrumb-item
              v-for="(matchItem, index) in breadcrumb"
              :key="matchItem.href"
              :href="matchItem.href"
              :clickable="matchItem.clickable"
              >{{ matchItem.title }}</n-breadcrumb-item
            >
          </n-breadcrumb>
        </div>
      </div>
    </div>
    <div class="header-tags">
      <n-tag
        closable
        :checked="tag.path === route.path"
        size="small"
        :type="tag.path === route.path ? 'info' : 'default'"
        v-for="tag in tagsViewStore.visitedViews"
        :key="tag.fullPath"
        class="tags"
        @close="handleTagsClose(tag)"
        @click="handleTagsClick(tag)"
        >{{ tag.title }}
      </n-tag>
    </div>
  </n-layout-header>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/modules/app";
import { useTagsViewStore } from "@/store/modules/tagsview";
import type { TagsViewState } from "@/store/modules/tagsview";
const appStore = useAppStore();
const tagsViewStore = useTagsViewStore();
const route = useRoute();
const router = useRouter();
interface ICrumbs {
  clickable: boolean;
  href: string;
  title: string;
}
const breadcrumb = computed<ICrumbs[]>(() => {
  return route.matched.map((item) => {
    let path =
      item.path === route.path
        ? ""
        : item.redirect === route.path
        ? ""
        : `/#${item.path}`;

    return {
      clickable: Boolean(path),
      href: path,
      title: (item.meta.title as string) || "",
    };
  });
});
const toggleIcon = computed(() => {
  return {
    "icon-outdent": appStore.opened,
    "icon-indent": !appStore.opened,
  };
});

const addTags = () => {
  tagsViewStore.addVisitedView(route);
};
const handleTagsClose = (item: TagsViewState) => {
  tagsViewStore.removeVisitedView(item);
};
const handleTagsClick = (item: TagsViewState) => {
  router.push(item.fullPath);
};
watch(
  route,
  () => {
    addTags();
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<style scoped lang="scss">
.header-box {
  display: flex;
  flex-direction: column;
  height: 70px;
  .header-top {
    height: 50px;
    display: flex;
    justify-content: space-between;
    .header-left {
      display: flex;
      align-items: center;
      .toggle-btn {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
  .header-tags {
    height: 30px;
    margin-top: 1px;
    background-color: #fff;
    box-shadow: 0px 0px 3px #ccc;
    z-index: 99;
    display: flex;
    align-items: center;
    padding-left: 10px;
    .tags {
      margin-left: 5px;
      a {
        text-decoration: none;
      }
    }
  }
}
.iconfont {
  font-size: 20px;
}
</style>
