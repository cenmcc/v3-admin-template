<template>
  <n-card>
    <n-form inline :label-width="80" :model="searchForm" ref="searchFormRef">
      <n-form-item label="姓名">
        <n-input
          v-model:value="searchForm.name"
          placeholder="输入姓名"
          clearable
        />
      </n-form-item>
      <n-form-item>
        <n-button @click="handleSearch" type="primary"> 搜索 </n-button>
      </n-form-item>
      <n-form-item>
        <n-button @click="clearSearch" type="error"> 重置 </n-button>
      </n-form-item>
    </n-form>
  </n-card>
  <n-card style="margin-top: 10px">
    <n-button type="primary" style="margin-bottom: 10px">新建用户</n-button>
    <n-data-table
      :columns="columns"
      :data="tableData"
      :pagination="pagination"
      bordered
      :single-line="false"
    />
  </n-card>
</template>

<script setup lang="ts">
import { withDirectives, resolveDirective } from "vue";
import { NButton, NPopconfirm } from "naive-ui";
import type { DataTableColumn } from "naive-ui";
interface ISearchForm {
  name: string;
}
interface ITableData extends ISearchForm {
  age: number;
}
const permission = resolveDirective("permission");

// 搜索
const searchForm1: ISearchForm = {
  name: "",
};
const searchForm = ref<ISearchForm>({ ...searchForm1 });
const clearSearch = () => {
  searchForm.value = { ...searchForm1 };
};
const handleSearch = () => {
  console.log("handleSearch");
};

// 表格
const columns: DataTableColumn[] = [
  // 编号
  {
    key: "#",
    title: "编号",
    align: "center",
    width: 100,
    render(_, index: number) {
      return index + 1;
    },
  },
  // 姓名
  {
    key: "name",
    title: "姓名",
    align: "center",
  },
  // 年龄
  {
    key: "age",
    title: "年龄",
    align: "center",
  },
  // 操作
  {
    title: "操作",
    key: "actions",
    width: 180,
    fixed: "right",
    align: "center",
    render(row) {
      const actions = [
        withDirectives(
          h(
            NButton,
            {
              quaternary: true,
              type: "info",
              onClick: () => {
                console.log("编辑", row.name);
              },
            },
            { default: "编辑" }
          ),
          [[permission, ['11']]]
        ),
        withDirectives(
          h(
            NPopconfirm,
            {
              onNegativeClick: (e) => {
                console.log("onNegativeClick", e);
              },
              onPositiveClick: (e) => {
                console.log("onPositiveClick", e);
              },
            },
            {
              trigger: () =>
                h(
                  NButton,
                  { type: "error", quaternary: true },
                  { default: "删除" }
                ),
              default: "删除提示的文案",
            }
          ),
          [[permission, ['11']]]
        ),
      ];
      return actions;
    },
  },
];
const tableData: ITableData[] = [
  { name: "张三", age: 18 },
  {
    name: "李四",
    age: 24,
  },
  {
    name: "王五",
    age: 55,
  },
];
const pagination = {
  pageSize: 10,
};
</script>

<style scoped></style>
