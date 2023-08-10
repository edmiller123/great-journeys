<script setup lang="ts">
import { PhCaretUp, PhCaretDown, PhCheck } from "@phosphor-icons/vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import nzSVG from "./nzSVG.vue";

defineProps<{
  next: () => void;
  places: any;
  getHoveredLocation: (location: any) => void;
  hoveredLocation: any;
  label: string;
  handleOpen: () => void;
  selectedLocation: any;
  title: string;
  selectOpen: boolean;
  niOpen: boolean;
  siOpen: boolean;
  handleNiOpen: () => void;
  handleSiOpen: () => void;
  northIsland: any;
  southIsland: any;
  handleLocationSelect: (place: any) => void;
}>();
</script>

<template>
  <div class="flex flex-col w-full mx-3">
    <Popover class="relative flex flex-col">
      <label class="font-semibold">{{ label }}</label>
      <PopoverButton
        class="relative flex items-center pl-3 border border-gj-green rounded-md h-12 cursor-pointer hover:border-gj-green focus:outline-none"
      >
        <div @click="handleOpen">
          <span>{{ selectedLocation.name }}</span>
          <PhCaretDown
            :size="12"
            class="absolute top-3.5 right-2 w-5 h-5 z-50"
          />
        </div>
      </PopoverButton>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <PopoverPanel
          class="absolute left-80 z-10 mt-20 min-h-80 flex max-h-max w-screen max-w-max -translate-x-1/2 px-4"
        >
          <div
            class="w-screen max-w-2xl min-h-96 flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
          >
            <div class="flex">
              <div class="p-4 w-1/2">
                <h2 class="text-lg text-gj-green">{{ title }}</h2>
                <div>
                  <div
                    @click="handleNiOpen"
                    class="flex justify-between items-center text-left mt-2 cursor-pointer"
                  >
                    <span class="text-gj-green font-semibold text-xl"
                      >North Island</span
                    >
                    <PhCaretUp
                      :size="12"
                      weight="bold"
                      :class="niOpen ? 'rotate-180' : 'rotate-90'"
                      class="w-5 h-5 mt-1 text-gj-green cursor-pointer"
                    />
                  </div>
                  <template v-if="niOpen">
                    <div
                      v-for="place in northIsland"
                      :key="place.name"
                      :class="
                        hoveredLocation.name === place.name
                          ? 'group relative p-2 bg-gray-50 cursor-pointer'
                          : 'group relative p-2 hover:bg-gray-50 cursor-pointer'
                      "
                    >
                      <div
                        @click="handleLocationSelect(place)"
                        @mouseover="getHoveredLocation(place)"
                        class="flex items-center justify-between font-semibold border-b text-gray-900"
                      >
                        {{ place.name }}
                        <span class="absolute inset-0" />
                        <PhCheck
                          v-if="place.name === selectedLocation.name"
                          :size="20"
                          color="#205052"
                          weight="bold"
                        />
                      </div>
                    </div>
                  </template>
                </div>
                <div class="mt-3">
                  <div
                    @click="handleSiOpen"
                    class="flex justify-between items-center text-left mt-2 cursor-pointer"
                  >
                    <span class="text-gj-green font-semibold text-xl"
                      >South Island</span
                    >
                    <PhCaretUp
                      :size="12"
                      weight="bold"
                      :class="siOpen ? 'rotate-180' : 'rotate-90'"
                      class="w-5 h-5 mt-1 text-gj-green cursor-pointer"
                    />
                  </div>
                  <template v-if="siOpen">
                    <div
                      v-for="place in southIsland"
                      :key="place.name"
                      :class="
                        hoveredLocation.name === place.name
                          ? 'group relative p-2 bg-gray-50 cursor-pointer'
                          : 'group relative p-2 hover:bg-gray-50 cursor-pointer'
                      "
                    >
                      <div
                        @click="handleLocationSelect(place)"
                        @mouseover="getHoveredLocation(place)"
                        class="flex items-center justify-between font-semibold border-b text-gray-900"
                      >
                        {{ place.name }}
                        <span class="absolute inset-0" />
                        <PhCheck
                          v-if="place.name === selectedLocation.name"
                          :size="20"
                          color="#205052"
                          weight="bold"
                        />
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <div
                class="w-1/2 flex flex-col justify-center items-center h-full mt-3 pt-4 cursor-pointer"
              >
                <nzSVG
                  :selectedLocation="selectedLocation"
                  :hoveredLocation="hoveredLocation"
                  :places="places"
                  :getHoveredLocation="getHoveredLocation"
                  :handle-location-select="handleLocationSelect"
                />
                <div class="w-[140%] ml-28 p-4 text-white transition-all">
                  <PopoverButton
                    :disabled="!selectedLocation"
                    @click="next"
                    :class="
                      !selectedLocation
                        ? 'bg-gray-300 rounded-lg uppercase w-1/3 py-4 text-xl focus:outline-none hover:outline-none'
                        : 'bg-gj-green rounded-lg uppercase w-1/3 py-4 text-xl cursor-pointer hover:bg-gj-green-hover'
                    "
                    >Next
                  </PopoverButton>
                </div>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
