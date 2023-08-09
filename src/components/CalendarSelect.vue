<script setup lang="ts">
import { DatePicker } from 'ant-design-vue';
defineProps(['label', 'modelValue', 'handleLeaveChange', 'selectedDate']);
defineEmits(['update:modelvalue']);
</script>

<template>
  <div class="flex flex-col w-full mx-3">
    <div class='relative flex flex-col'>
      <label class="font-semibold">{{ label }}</label>
      <DatePicker size='large' class='border-gj-green h-12 hover:border-gj-green' placeholder='' popup-class-name='createDatePicker' :value='modelValue' @input="$emit('update:modelValue', $event.target.value)" />
    </div>
  </div>
</template>
