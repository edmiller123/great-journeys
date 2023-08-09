<script setup lang="ts">
  import { ref } from 'vue';
  import LocationSelect from './components/LocationSelect.vue';
  import {northIsland, places, southIsland} from "./lib/places";

  const from = ref({place: "", open: false, niOpen: false, siOpen: false});
  const hoveredLocation = ref({name: "", x: "", y: ""});

  function handleFromOpen() {
    from.value.open = !from.value.open;
    
  }

  function handleNiOpen() {
    from.value.niOpen = !from.value.niOpen;
  }

  function handleSiOpen() {
    from.value.siOpen = !from.value.siOpen;
  }

  function handleFromLocationSelect(location: any) {
    from.value.place = location;
  }

  function getHoveredLocation(location: any) {
    hoveredLocation.value = location;
  }
</script>

<template>
  <div class='flex justify-center text-left'>
    <div class='flex items-center justify-start p-3 w-full border-2 rounded-xl border-gj-green'>
      <!-- From -->
      <LocationSelect :places='places' :getHoveredLocation='getHoveredLocation' :hoveredLocation='hoveredLocation' label='From' :selected-location='from.place' title="Departure From" :select-open='from.open' :handle-open='handleFromOpen' :handle-ni-open='handleNiOpen' :handle-si-open='handleSiOpen' :ni-open='from.niOpen' :si-open='from.siOpen' :northIsland='northIsland' :southIsland='southIsland' :handle-location-select='handleFromLocationSelect' />

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
