<script setup lang="ts">
import { PhCaretUp, PhCaretDown } from "@phosphor-icons/vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

defineProps<{
  label: string;
  handleOpen: () => void;
  selectedLocation: string;
  title: string;
  selectOpen: boolean;
  niOpen: boolean;
  siOpen: boolean;
  handleNiOpen: () => void;
  handleSiOpen: () => void;
  northIsland: string[];
  southIsland: string[];
  handlePlaceSelect: (place: string) => void;
}>();
</script>

<template>
  <div class="flex flex-col w-full mx-3">
    <Popover class="relative flex flex-col">
      <label class="font-semibold">{{ label }}</label>
      <PopoverButton
        class="relative flex items-center pl-3 border border-gj-green rounded-md h-12 cursor-pointer hover:border-gj-green focus:outline-none"
      >
        <div @click="handleOpen" class="">
          <span>{{ selectedLocation }}</span>
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
          class="absolute left-80 z-10 mt-20 min-h-96 flex mx-h-max w-screen max-w-max -translate-x-1/2 px-4"
        >
          <div
            class="w-screen max-w-2xl min-h-96 flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
          >
            <div class="flex">
              <div class="p-4 w-1/2">
                <h2 class="text-lg text-gj-green">{{ title }}</h2>
                <div>
                  <div @click="handleNiOpen" class="flex justify-between items-center text-left mt-2 cursor-pointer">
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
                      :key="place"
                      class="group relative p-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <div @click='handlePlaceSelect(place)'
                        class="font-semibold border-b text-gray-900"
                      >
                        {{ place }}
                        <span class="absolute inset-0" />
                      </div>
                    </div>
                  </template>
                </div>
                <div class='mt-3'>
                  <div @click="handleSiOpen" class="flex justify-between items-center text-left mt-2 cursor-pointer">
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
                      :key="place"
                      class="group relative p-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <div @click='handlePlaceSelect(place)'
                        class="font-semibold border-b text-gray-900"
                      >
                        {{ place }}
                        <span class="absolute inset-0" />
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <div
                class="w-1/2 flex justify-center items-center h-full mt-8 mb-4 py-4"
              >
                <img
                  src="https://easybuild.co.nz/wp-content/uploads/2020/06/NZ-Map_grey.png"
                  class="w-2/3 h-2/3"
                />
              </div>
            </div>
            <div class='p-4 text-white'>
              <button class='bg-gj-green uppercase w-1/3 py-4 text-xl hover:bg-gj-green-hover'>Next</button>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <!-- <div
      v-if="selectOpen"
      class="absolute flex top-32 bg-white p-2 w-1/3 shadow-2xl border border-gray-50 rounded-md z-50"
    >
      <div class="w-1/2 flex flex-col">
        <div>
          <span class="text-lg text-gj-green">{{ title }}</span>
          <div class="flex justify-between items-center text-left mt-2">
            <span class="text-gj-green font-semibold text-xl"
              >North Island</span
            >
            <PhCaretUp
              @click="handleNiOpen"
              :size="12"
              weight="bold"
              :class="niOpen ? 'rotate-180' : 'rotate-90'"
              class="w-5 h-5 mt-1 text-gj-green cursor-pointer"
            />
          </div>
          <ul class="mt-2" v-if="niOpen">
            <template v-for="place in places" :key="place.name">
              <li
                v-if="place.location === 'North Island'"
                class="border-b text-lg cursor-pointer hover:bg-gray-100"
                @click="handlePlaceSelect(place.name)"
              >
                {{ place.name }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <div class="flex justify-between items-center text-left mt-2">
            <span class="text-gj-green font-semibold text-xl"
              >South Island</span
            >
            <PhCaretUp
              @click="handleSiOpen"
              :size="12"
              weight="bold"
              :class="siOpen ? 'rotate-180' : 'rotate-90'"
              class="w-5 h-5 mt-1 text-gj-green cursor-pointer"
            />
          </div>
          <ul class="mt-2" v-if="siOpen">
            <template v-for="place in places" :key="place.name">
              <li
                v-if="place.location === 'South Island'"
                class="border-b text-lg cursor-pointer hover:bg-gray-100"
                @click="handlePlaceSelect(place.name)"
              >
                {{ place.name }}
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div id='map' class='w-1/3 flex m-auto'>
        <img
        src='https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-l+e23737(174.0907,-41.2522)/174.0907,-41.2522,2.95,0/300x200@2x?access_token=pk.eyJ1Ijoic2hhbXB1cnJzIiwiYSI6ImNsZjdhcmJweDB5cGw0M212YnplaTFkNnkifQ.RRUvcHyfO7W0Pg4vOQ4UvA'
        alt="static map"
        className="rounded-lg h-52"
      />
      </div>
    </div> -->
  </div>
</template>
