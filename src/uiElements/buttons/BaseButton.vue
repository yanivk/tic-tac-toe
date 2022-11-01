<script setup lang="ts">
interface Props {
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  success?: boolean;
  info?: boolean;
  danger?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  primary: true,
  secondary: false,
  warning: false,
  success: false,
  info: false,
  danger: false,
});
</script>

<template>
  <button
    class="btn"
    :class="{
      primary: props.primary,
      secondary: props.secondary,
      warning: props.warning,
      success: props.success,
      info: props.info,
      danger: props.danger,
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
button.btn {
  min-width: 150px;
  padding: 10px 0;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
}

button.btn:hover {
  filter: invert(0.15);
}
</style>
