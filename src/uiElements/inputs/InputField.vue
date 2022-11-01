<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  type: string;
  label?: string;
  placeholder?: string;
  inputValue?: string;
}>();

let localValue = computed(() => {
  return props.inputValue;
});

const emit = defineEmits(["update:modelValue"]);

function updateModelValue(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div class="group-input">
    <label>{{ label }}</label>
    <input
      v-model="localValue"
      :type="type"
      @input="updateModelValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped></style>
