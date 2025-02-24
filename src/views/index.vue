<script setup lang="ts">
import Map from "@/components/map.vue";
import CountryFlag from "vue-country-flag-next";
import geoData from "@/assets/geoData.json";
import $ from "jquery";
import "magnific-popup";

$(document).ready(function () {
  $(".popup-with-form").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#name",

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = "#name";
        }
      },
    },
  });
});
</script>

<template>
  <div
    style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 1rem"
  >
    <Card
      v-for="(mapData, index) in geoData"
      :key="index"
      style="width: 25rem; overflow: hidden"
    >
      <template #header>
        <Map :mapData="mapData"></Map>
      </template>
      <template #title>
        <CountryFlag
          :country="mapData.country"
          class="flag"
          size="normal"
          style="vertical-align: baseline"
        />
        <span style="margin-left: var(--grid-gap-2)">{{
          mapData.title
        }}</span></template
      >
      <template #content>
        <p class="m-0">
          {{ mapData.desc }}
        </p>
      </template>
      <template #footer>
        <div style="display: flex; justify-content: space-between">
          <Button
            icon="pi pi-expand"
            as="a"
            raised
            variant="text"
            class="popup-with-form"
            href="#lightbox"
          ></Button>
          <Button
            v-if="mapData.strava"
            as="a"
            :href="mapData.strava"
            target="_blank"
            rel="noopener"
            icon="fa-brands fa-strava"
            variant="text"
            raised
          />
        </div>
        <!-- <Map id="lightbox" class="white-popup-block mfp-hide"></Map> -->
      </template>
    </Card>
  </div>
</template>
<style scoped>
.map {
  height: 200px;
  width: 100%;
}
</style>
