<script lang="ts" setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import geyData from "../assets/blaavand.json";

const initialMap = ref(null);

onMounted(() => {
  initialMap.value = L.map("blavand-map").setView([55.55781, 8.25], 11);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(initialMap.value);

  // Add Godby circle
  const lighthouse = L.circle(geyData.lighthouse.coordinates, {
    color: "black",
    fillColor: "black",
    fillOpacity: 0.5,
    radius: geyData.lighthouse.radius,
  }).addTo(initialMap.value);
  lighthouse.bindPopup(geyData.lighthouse.popup);
});
</script>
<template><div class="map" id="blavand-map"></div></template>
<style lang="css" scoped></style>
