<script lang="ts" setup>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import geoData from "../assets/blaavand.json";

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
      const polylineOptions = {
        color: item.options.color || "black",
        dashArray: item.options.dashArray || "1,7",
      };
      // Add polyline
      const polyline = L.polyline(item.coordinates, polylineOptions).addTo(map);
      if (item.popup) {
        polyline.bindPopup(item.popup);
      }
    }
  });
};

onMounted(() => {
  const mapData = geoData.blaavand;
  initialMap.value = L.map("blaavand-map").setView(
    mapData.setView,
    mapData.zoom
  );

  L.tileLayer(
    `https://tile.thunderforest.com/${mapData.map}/{z}/{x}/{y}.png?apikey=7530a0f24d13406081285d989b4b17e5`,
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }
  ).addTo(initialMap.value);

  addMarkers(initialMap.value, geoData);
});
</script>

<template>
  <div class="map" id="blaavand-map"></div>
</template>

<style lang="css" scoped></style>
