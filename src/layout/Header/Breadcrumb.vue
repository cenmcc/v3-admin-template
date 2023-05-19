<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>表格</el-breadcrumb-item>
    <el-breadcrumb-item>详情页</el-breadcrumb-item>
  </el-breadcrumb>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.breadcrumb {
  margin-left: 10px;
}
</style>