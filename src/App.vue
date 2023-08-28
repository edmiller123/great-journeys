<script setup lang="ts">
import { ref, watch } from "vue";
import LocationSelect from "./components/LocationSelect.vue";
import { northIsland, places, southIsland } from "./lib/places";
import CalendarSelect from "./components/CalendarSelect.vue";

const from = ref({
  place: "",
  hovered: "",
  open: false,
  niOpen: true,
  siOpen: true,
  disabled: false,
});
const to = ref({
  place: "",
  hovered: "",
  open: false,
  niOpen: true,
  siOpen: true,
  disabled: true,
});
const leaveDate = ref("");
const returnDate = ref("");

let localSouthIsland: any = ref([]);

watch(leaveDate, (newQuestion, oldQuestion) => {
  if (newQuestion !== oldQuestion) {
    console.log(leaveDate);
  }
});

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
  let adjacent = null;
  if(location.hasOwnProperty("adjacents")) {
    if(southIsland.some((item: any) => item.name === location.name)) {
      adjacent = southIsland.find((item: any) => location.adjacents.includes(item.name));
    }
    else {
      adjacent = northIsland.find((item: any) => location.adjacents.includes(item.name));
    }
  }
  if(location.train.includes("Northern Explorer")) {
    to.value.siOpen = false;
    to.value.niOpen = true;
  }
  else if(location.train.includes("Coastal Pacific")) {
    to.value.niOpen = false;
    to.value.siOpen = true;
    if(adjacent) {
      localSouthIsland.value = [...southIsland.filter((item: any) => item.train.includes("Coastal Pacific") && item.name !== location.name).map((item: any) => {return {name: item.name, x: item.x, y: item.y, train: item.train}}), adjacent];
    }
    else {
      localSouthIsland.value = southIsland.filter((item: any) => item.train.includes("Coastal Pacific") && item.name !== location.name).map((item: any) => {return {name: item.name, x: item.x, y: item.y, train: item.train}});
    }
  }
  else if(location.train.includes("TranzAlpine") && location.train.length === 1) {
    to.value.niOpen = false;
    to.value.siOpen = true;
    if(adjacent) {
      localSouthIsland.value = [...southIsland.filter((item: any) => item.train.includes("TranzAlpine") && item.name !== location.name).map((item: any) => {return {name: item.name, x: item.x, y: item.y, train: item.train}}), adjacent];
    }
    else {
      localSouthIsland.value = southIsland.filter((item: any) => item.train.includes("TranzAlpine") && item.name !== location.name).map((item: any) => {return {name: item.name, x: item.x, y: item.y, train: item.train}});
    }
  }
  else if(location.train.includes("Scenic Coach")) {
    to.value.niOpen = false;
    to.value.siOpen = true;
    if(adjacent) {
      localSouthIsland.value = [...southIsland.filter((item: any) => item.train.includes("Scenic Coach") && item.name !== location.name).map((item: any) => {return {name: item.name, x: item.x, y: item.y, train: item.train}}), adjacent];
    }
    else {
      localSouthIsland.value = southIsland.filter((item: any) => item.train.includes("Scenic Coach") && item.name !== location.name).map((item: any) => {return {name: item.name, x: item.x, y: item.y, train: item.train}});
    }
  }
  from.value.place = location;
  to.value.disabled = false;
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
  <div class="">
    <div class="block bg-gj-cream h-36 w-full"></div>
    <div class="text-left bg-white mx-48 my-20">
      <h1 class="px-5 text-gj-brown">Book your journey</h1>
      <div class="flex justify-center text-left">
        <div class="flex items-center justify-start p-3 w-full">
          <!-- From -->
          <LocationSelect
            :next="fromNext"
            :places="places"
            :getHoveredLocation="getHoveredLocation"
            :hoveredLocation="from.hovered"
            label="From"
            :other-selection='to.place'
            :selected-location="from.place"
            title="Departure From"
            :select-open="from.open"
            :handle-open="handleFromOpen"
            :handle-ni-open="handleNiOpen"
            :handle-si-open="handleSiOpen"
            :ni-open="from.niOpen"
            :si-open="from.siOpen"
            :northIsland="northIsland"
            :southIsland="southIsland"
            :handle-location-select="handleFromLocationSelect"
            :disabled='from.disabled'
          />

          <!-- To -->
          <LocationSelect
            :next="toNext"
            :places="places"
            :getHoveredLocation="getToHoveredLocation"
            :hoveredLocation="to.hovered"
            label="To"
            :other-selection='from.place'
            :selected-location="to.place"
            title="Travelling To"
            :select-open="to.open"
            :handle-open="handleToOpen"
            :handle-ni-open="handleToNiOpen"
            :handle-si-open="handleToSiOpen"
            :ni-open="to.niOpen"
            :si-open="to.siOpen"
            :northIsland="northIsland"
            :southIsland="localSouthIsland.length > 0 ? localSouthIsland : southIsland"
            :handle-location-select="handleToLocationSelect"
            :disabled='to.disabled'
          />

          <!-- Leave On -->
          <CalendarSelect
            label="Leave On"
            :model-value="leaveDate"
            @update:modelValue="(newValue: string) => leaveDate = newValue"
            :selectedDate="leaveDate"
          />

          <!-- Return On -->
          <CalendarSelect label="Return On" v-model="returnDate" />

          <div class="w-2/3">
            <span class="opacity-0">-</span>
            <button
              class="h-12 w-full rounded-lg font-semibold text-white bg-gj-green hover:bg-gj-green-hover"
            >
              Search Fares
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gj-cream w-full h-screen">
      <div class="mx-48 py-20 px-5">
        <h1 class="text-gj-brown">Winter Specials</h1>
        <p class="text-xl leading-3">
          Book a Northern Explorer journey through a wintry wonderland with our
          amazing Winter special offers.
        </p>
        <div class="flex justify-center mx-48 mt-24 h-1/2">
          <div class='w-2/3'>
            <img
              class="w-full"
              src="https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div class="w-1/3 bg-gj-green-shade p-4 text-white">
            <h2 class='text-4xl'>Save 15% on Northbound Fares*</h2>
            <p class='text-lg'>Get aboard the Northern Explorer with 15% off this Winter when going northbound.</p>
            <p class='my-10'>PROMOCODE: GONORTH15</p>
            <p class='my-10 text-sm'>Offer valid from 1 June to 31 August 2023</p>
            <a href='#' class='my-10 no-underline text-white text-xl hover:underline hover:text-white'>
              [*View full terms]
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
