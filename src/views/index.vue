<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Map from "@/components/Map.vue";
import CountryFlag from "vue-country-flag-next";
import geoData from "@/assets/geoData.json";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { useArrowNavigation } from "@/composables/useArrowNavigation";

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
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false, // Disable dragability
  });
  const removeArrowNavigation = useArrowNavigation(swiper);

  onUnmounted(() => {
    removeArrowNavigation();
  });
});
</script>

<template>
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
        <div
          class="specs-desktop"
          v-if="mapData"
          style="
            position: absolute;
            left: 5rem;
            bottom: 0;
            z-index: 999;
            max-width: 20rem;
            height: 20rem;
            color: var(--p-indigo-950);
          "
        >
          <country-flag
            class="flag"
            :country="mapData.country"
            size="normal"
          /><b
            style="
              font-size: var(--font-size-4);
              margin-left: var(--grid-gap-1);
            "
            >{{ mapData.title }}</b
          >
          <p>
            {{ mapData.desc }}
          </p>
          <Button
            v-if="mapData.strava"
            as="a"
            :href="mapData.strava"
            target="_blank"
            label="Full route"
            rel="noopener noreferrer nofollow"
            icon="fa-brands fa-strava"
            severity="primary"
            style="
              background-color: var(--p-indigo-950);
              color: white;
              border: none;
              margin-top: var(--grid-gap-1);
            "
          />
        </div>
        <Button
          class="specs-mobile"
          v-if="mapData.strava"
          as="a"
          :href="mapData.strava"
          target="_blank"
          label="Full route"
          rel="noopener noreferrer nofollow"
          icon="fa-brands fa-strava"
          severity="primary"
          style="
            background-color: var(--p-indigo-950);
            color: white;
            border: none;
            position: absolute;
            bottom: var(--grid-gap-3);
            left: var(--grid-gap-3);
            z-index: 999;
          "
        />

        <Map :mapData="mapData" style="height: 100%; width: 100%"></Map>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<style scoped>
@media only screen and (min-width: 667px) {
  .specs-mobile {
    display: none;
  }
}
@media only screen and (max-width: 667px) {
  .specs-desktop {
    display: none;
  }
}
</style>
