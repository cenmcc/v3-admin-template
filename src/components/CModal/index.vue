<template>
  <n-modal :show="show" @update-show="handleModalChange">
    <n-card
      :title="props.title"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
      class="modal-card"
      :style="{ width: width }"
    >
      <template #header-extra>
        <div class="close" @click="emit('update:show', false)">
          <i class="iconfont icon-close"></i>
        </div>
      </template>
      <slot></slot>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
interface IProps {
  show?: boolean;
  title?: string;
  width: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: '',
  width: '600px'
});
const emit = defineEmits<{
  (e: "update:show", val: boolean): void;
}>();

const handleModalChange = (val: boolean) => {
  emit("update:show", val);
};
</script>

<style lang="scss" scoped>
.close {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.modal-card {
  width: 600px;
  position: fixed;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
}
</style>
