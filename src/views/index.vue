<script setup lang="ts">
import { onMounted } from "vue";
import Map from "@/components/map.vue";
import CountryFlag from "vue-country-flag-next";
import geoData from "@/assets/geoData.json";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

onMounted(() => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
</script>

<template>
  <!-- Slider main container -->
  <div class="swiper" style="width: 100%; height: 95vh">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
        class="swiper-slide"
        v-for="(mapData, index) in geoData"
        :key="index"
      >
        <div
          class="info"
          style="
            width: 50vw;
            position: absolute;
            bottom: 3rem;
            left: 10rem;
            z-index: 999;
            backdrop-filter: var(--blur-1);
            padding: var(--grid-gap-1);
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: var(--border-radius-1);
          "
        >
          <CountryFlag
            :country="mapData.country"
            class="flag"
            size="normal"
            style="vertical-align: baseline"
          />
          <b
            style="
              margin-left: var(--grid-gap-2);
              font-size: var(--font-size-4);
            "
            >{{ mapData.title }}</b
          >
          <p class="m-0">
            {{ mapData.desc }}
          </p>
          <Button
            v-if="mapData.strava"
            as="a"
            :href="mapData.strava"
            target="_blank"
            rel="noopener noreferrer nofollow"
            icon="fa-brands fa-strava"
            variant="text"
            raised
          />
        </div>
        <Map :mapData="mapData" style="height: 100%; width: 100%"></Map>
      </div>
    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: var(--p-indigo-950);
}
</style>
