<script setup lang="ts">
  import { ref, watch } from 'vue';
  import LocationSelect from './components/LocationSelect.vue';
  import {northIsland, places, southIsland} from "./lib/places";
  import CalendarSelect from './components/CalendarSelect.vue';

  const from = ref({place: "", hovered: "", open: false, niOpen: true, siOpen: true});
  const to = ref({place: "", hovered: "", open: false, niOpen: true, siOpen: true});
  const leaveDate = ref("");
  const returnDate = ref("");

  watch(leaveDate, (newQuestion, oldQuestion) => {
    if(newQuestion !== oldQuestion) {
      console.log(leaveDate);
    }
  })

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
    from.value.hovered = location;
  }

  function fromNext() {
    to.value.open = true;
  }

  function handleToOpen() {
    to.value.open = !to.value.open;
    
  }

  function handleToNiOpen() {
    to.value.niOpen = !to.value.niOpen;
  }

  function handleToSiOpen() {
    to.value.siOpen = !to.value.siOpen;
  }

  function handleToLocationSelect(location: any) {
    to.value.place = location;
  }

  function getToHoveredLocation(location: any) {
    to.value.hovered = location;
  }

  function toNext() {
    to.value.open = true;
  }
</script>

<template>
  <div class='flex justify-center text-left'>
    <div class='flex items-center justify-start p-3 w-full border-2 rounded-xl border-gj-green'>
      <!-- From -->
      <LocationSelect :next='fromNext' :places='places' :getHoveredLocation='getHoveredLocation' :hoveredLocation='from.hovered' label='From' :selected-location='from.place' title="Departure From" :select-open='from.open' :handle-open='handleFromOpen' :handle-ni-open='handleNiOpen' :handle-si-open='handleSiOpen' :ni-open='from.niOpen' :si-open='from.siOpen' :northIsland='northIsland' :southIsland='southIsland' :handle-location-select='handleFromLocationSelect' />

      <!-- To -->
      <LocationSelect :next='toNext' :places='places' :getHoveredLocation='getToHoveredLocation' :hoveredLocation='to.hovered' label='To' :selected-location='to.place' title="Travelling To" :select-open='to.open' :handle-open='handleToOpen' :handle-ni-open='handleToNiOpen' :handle-si-open='handleToSiOpen' :ni-open='to.niOpen' :si-open='to.siOpen' :northIsland='northIsland' :southIsland='southIsland' :handle-location-select='handleToLocationSelect' />

      <!-- Leave On -->
      <CalendarSelect label='Leave On' :model-value='leaveDate' @update:modelValue="(newValue: string) => leaveDate = newValue" :selectedDate='leaveDate' />

      <!-- Return On -->
      <CalendarSelect label='Return On' v-model='returnDate' />
    </div>
  </div>
</template>

<style scoped>
</style>
