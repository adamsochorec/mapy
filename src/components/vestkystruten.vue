<script lang="ts" setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import geoData from "../assets/vestkystruten.json";

const initialMap = ref<L.Map | null>(null);

const addMarkers = (map: L.Map, data: any) => {
  Object.keys(data).forEach((key) => {
    const item = data[key];
    if (item.coordinates.length === 2) {
      // Add circle
      const circle = L.circle(item.coordinates as [number, number], {
        color: "black",
        fillColor: "black",
        fillOpacity: 0.5,
        radius: item.radius,
      }).addTo(map);
      circle.bindPopup(item.popup);
    } else {
      // Add polyline
      L.polyline(item.coordinates, item.options).addTo(map);
    }
  });
};

onMounted(() => {
  initialMap.value = L.map("vestkystruten-map").setView([56.1361, 9.9124], 6);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(initialMap.value);

  addMarkers(initialMap.value, geoData);
});
</script>

<template>
  <div class="map" id="vestkystruten-map"></div>
</template>

<style lang="css" scoped></style>
