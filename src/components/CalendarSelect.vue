<script setup lang="ts">
defineProps(['label', 'modelValue']);
defineEmits(['update:modelvalue']);
</script>

<template>
  <div class="flex flex-col w-full mx-3">
    <div class='relative flex flex-col'>
      <label class="font-semibold">{{ label }}</label>
      <div class="relative flex items-center pl-3 border border-gj-green rounded-md h-12 cursor-pointer hover:border-gj-green focus:outline-none">
        <!-- @vue-ignore -->
        <input type='date' class='pr-1 border-none w-full outline-none cursor-pointer focus:border-none focus:outline-none' :value='modelValue' @input="$emit('update:modelValue', $event.target.value)" />
      </div>
    </div>
  </div>
</template>
