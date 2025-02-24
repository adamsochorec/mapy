<script setup lang="ts">
import { ref, onMounted } from "vue";
import Map from "@/components/map.vue";
import CountryFlag from "vue-country-flag-next";
import geoData from "@/assets/geoData.json";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const items = [
  {
    label: "OpenCycleMap",
    value: "cycle",
  },
  {
    label: "Transport",
    value: "transport",
  },
  {
    label: "Landscape",
    value: "landscape",
  },
  {
    label: "Outdoors",
    value: "outdoors",
  },
  {
    label: "Transport Dark",
    value: "transport-dark",
  },
  {
    label: "Spinal Map",
    value: "spinal-map",
  },
  {
    label: "Pioneer",
    value: "pioneer",
  },
  {
    label: "Mobile Atlas",
    value: "mobile-atlas",
  },
  {
    label: "Neighbourhood",
    value: "neighbourhood",
  },
  {
    label: "Atlas",
    value: "Atlas",
  },
  {
    separator: true,
  },
  {
    label: "Default",
  },
];

const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};
onMounted(() => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false, // Disable dragability
  });
});
</script>

<template>
  <!-- <aside
    style="
      position: absolute;
      right: var(--grid-gap-2);
      bottom: var(--grid-gap-3);
      z-index: 99;
      display: flex;
      flex-direction: column;
      gap: var(--grid-gap-1);
    "
  >
    <Button
      style="background-color: var(--p-indigo-900); color: white; border: none"
      icon="pi pi-info-circle"
      @click="toggle"
    ></Button>
    <Popover ref="op">
      <div class="info" style="z-index: 999999999999">
        <CountryFlag
          :country="MapData.country"
          class="flag"
          size="normal"
          style="vertical-align: baseline"
        />
        <b
          style="margin-left: var(--grid-gap-2); font-size: var(--font-size-4)"
          >{{ MapData.title }}</b
        >
        <p class="m-0">
          {{ MapData.desc }}
        </p>
        <Button
          v-if="MapData.strava"
          as="a"
          :href="MapData.strava"
          target="_blank"
          rel="noopener noreferrer nofollow"
          icon="fa-brands fa-strava"
          variant="text"
          raised
        />
      </div>
    </Popover>
    <SplitButton
      icon="pi pi-map"
      :model="items"
      style="background-color: var(--p-indigo-900); color: white; border: none"
    />
  </aside> -->
  <!-- Slider main container -->
  <div class="swiper" style="width: 100%; height: 100vh">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
        class="swiper-slide"
        v-for="(mapData, index) in geoData"
        :key="index"
      >
        <Map :mapData="mapData" style="height: 100%; width: 100%"></Map>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: var(--p-indigo-900);
}
</style>
