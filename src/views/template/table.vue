<template>
  <n-card title="搜索">
    <n-form
      ref="formRef"
      inline
      :label-width="80"
      :model="formValue"
      :rules="rules"
      size="small"
    >
      <n-form-item label="姓名" path="name">
        <n-input v-model:value="formValue.name" placeholder="输入姓名" />
      </n-form-item>
      <n-form-item label="年龄" path="age">
        <n-input v-model:value="formValue.age" placeholder="输入年龄" />
      </n-form-item>
      <n-form-item label="电话号码" path="phone">
        <n-input v-model:value="formValue.phone" placeholder="电话号码" />
      </n-form-item>
      <n-form-item>
        <n-button type="primary" @click="handleValidateClick" size="small">
          验证
        </n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<script setup lang="ts">
import { NForm } from "naive-ui";
const message = useMessage()
interface IFormValue {
  name?: string;
  age?: string;
  phone?: string;
  [propName: string]: any;
}
const formRef = ref<InstanceType<typeof NForm> | null>(null);

const formValue = ref<IFormValue>({});
const rules = {
  name: {
    required: true,
    trigger: ["blur", "input"],
    message: "请输入 inputValue",
  },
};
const handleValidateClick = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("验证成功");
    } else {
      console.log(errors);
      message.error("验证失败");
    }
  });
};
</script>

<style scoped lang="scss"></style>
