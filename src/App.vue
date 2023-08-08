<script setup lang="ts">
  import { ref } from 'vue';
  import LocationSelect from './components/LocationSelect.vue';

  const northIsland = ["Auckland", "Hamilton", "Ohakune", "Wellington"];
  const southIsland = ["Christchurch", "Picton", "Greymouth", "Dunedin", "Invercargill", "Queenstown"];

  const from = ref("");
  const fromOpen = ref(false);
  const niOpen = ref(false);
  const siOpen = ref(false);

  function handleFromSelect(location: string) {
    from.value = location;
    console.log(from.value);
  }

  function handleFromOpen() {
    fromOpen.value = !fromOpen.value;
  }

  function handleNiOpen() {
    niOpen.value = !niOpen.value;
  }

  function handleSiOpen() {
    siOpen.value = !siOpen.value;
  }
</script>

<template>
  <div class='flex justify-center text-left'>
    <div class='flex items-center justify-start p-3 w-full border-2 rounded-xl border-gj-green'>
      <!-- From -->
      <LocationSelect label='From' :selected-location='from' title="Departure From" :select-open='fromOpen' :handle-open='handleFromOpen' :handle-ni-open='handleNiOpen' :handle-place-select='handleFromSelect' :handle-si-open='handleSiOpen' :ni-open='niOpen' :si-open='siOpen' :northIsland='northIsland' :southIsland='southIsland' />

      <!-- To -->
      <div class='flex flex-col w-full mx-3'>
        <label class='font-semibold'>To</label>
        <select v-model='from' class='border border-gj-green rounded-md h-12 cursor-pointer focus:outline-none'></select>
      </div>

      <!-- Leave On -->
      <div class='flex flex-col w-full mx-3'>
        <label class='font-semibold'>Leave on</label>
        <select v-model='from' class='border border-gj-green rounded-md h-12 cursor-pointer focus:outline-none'></select>
      </div>

      <!-- Return On -->
      <div class='flex flex-col w-full mx-3'>
        <label class='font-semibold'>Return on</label>
        <select v-model='from' class='border border-gj-green rounded-md h-12 cursor-pointer focus:outline-none'></select>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
