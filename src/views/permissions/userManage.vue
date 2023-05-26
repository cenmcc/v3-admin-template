<template>
  <n-card>
    <n-form inline :label-width="80" :model="searchForm" ref="searchFormRef" label-placement="left">
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
      remote
      bordered
      :single-line="false"
      @update:page="handlePageChange"
    />
  </n-card>
</template>

<script setup lang="ts">
import CButton from "../../components/CButton/CButton";
import type { DataTableColumn } from "naive-ui";
interface ISearchForm {
  name: string;
}
interface ITableData extends ISearchForm {
  age: number;
}

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
      return [
        h(CButton, {
          text: "编辑",
          onClick: () => {
            console.log("编辑", row.name);
          },
        }),
        h(CButton, {
          type: "error",
          confirm: true,
          content: "确认删除该文案吗",
          text: "删除",
          onClick: () => {
            console.log("删除", row.name);
          },
        }),
      ];
    },
  },
];
const tableData = ref<ITableData[]>([
])
interface IPagination {
  page: number;
  itemCount?: number;
  pageCount?: number;
  pageSize: number;
  pageSizes?: Array<any>;
  showSizePicker?: boolean;
  prefix(item: any): string
}
const pagination = reactive<IPagination>({
  page: 1,
  pageCount: 99,
  itemCount: 987,
  pageSize: 10,
  pageSizes: [
      {
        label: '10 每页',
        value: 10
      },
      {
        label: '20 每页',
        value: 20
      },
      {
        label: '30 每页',
        value: 30
      },
      {
        label: '40 每页',
        value: 40
      }
    ],
  prefix ({ itemCount }) {
    return `共计${itemCount}条`
  }
})
onMounted(() => {
  tableData.value = [
  { name: "张三", age: 18 },
  {
    name: "李四",
    age: 24,
  },
  {
    name: "王五",
    age: 55,
  },
  {
    name: "王五",
    age: 55,
  },
  {
    name: "王五",
    age: 55,
  },
  {
    name: "王五",
    age: 55,
  },
  {
    name: "王五",
    age: 55,
  },
  {
    name: "王五",
    age: 55,
  },
  {
    name: "王五",
    age: 55,
  },
  {
    name: "王五",
    age: 55,
  }
  ]
})
const handlePageChange = (page: number) => {
  pagination.page = page
  console.log(page)
}
</script>

<style scoped></style>
