import { type RouteLocationNormalized } from "vue-router";

export interface TagsViewState {
  title: string;
  path: string;
  fullPath: string;
}
export const useTagsViewStore = defineStore("TagsView", () => {
  const visitedViews = ref<TagsViewState[]>([]);

  const addVisitedView = (view: RouteLocationNormalized) => {
    console.log(view.path, view.fullPath);
    const result = visitedViews.value.some((v, index) => {
      if (v.path === view.path) {
        if (v.fullPath !== view.fullPath) {
          visitedViews.value[index] = {
            title: view.meta.title as string,
            path: view.path,
            fullPath: view.fullPath,
          };
        }
        return true;
      }
    });
    
    (!result) && visitedViews.value.push({
      title: view.meta.title as string,
      path: view.path,
      fullPath: view.fullPath,
    })
  };

  const removeVisitedView = ((view: TagsViewState) => {
    visitedViews.value = visitedViews.value.filter((v) => v.path !== view.path);
  })
  return {
    visitedViews,
    addVisitedView,
    removeVisitedView
  };
});
