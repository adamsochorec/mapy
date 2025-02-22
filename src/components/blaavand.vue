<script lang="ts" setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import geoData from "../assets/blaavand.json";

const initialMap = ref<L.Map | null>(null);

onMounted(() => {
  initialMap.value = L.map("blavand-map").setView([55.55781, 8.25], 11);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(initialMap.value);

  // Add Godby circle
  const lighthouse = L.circle(
    geoData.lighthouse.coordinates as [number, number],
    {
      color: "black",
      fillColor: "black",
      fillOpacity: 0.5,
      radius: geoData.lighthouse.radius,
    }
  ).addTo(initialMap.value);
  lighthouse.bindPopup(geoData.lighthouse.popup);
});
</script>

<template>
  <div class="map" id="blavand-map"></div>
</template>

<style lang="css" scoped></style>
