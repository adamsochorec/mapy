<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
const props = defineProps<{
  mapData: {
    id: string;
    title: string;
    setView: [number, number];
    zoom: number;
    map: string;
    marker?: Array<{
      coordinates: [number, number];
      radius: number;
      popup: string;
    }>;
    polyline?: Array<{
      coordinates: Array<[number, number]>;
      options: { color: string };
      popup?: string;
    }>;
  };
}>();

const initialMap = ref<L.Map | null>(null);

const addMarkers = (map: L.Map, data: any) => {
  if (data.marker) {
    data.marker.forEach((item: any) => {
      const circle = L.circle(item.coordinates as [number, number], {
        color: "black",
        fillColor: "black",
        fillOpacity: 0.5,
        radius: item.radius,
      }).addTo(map);
      circle.bindPopup(item.popup);
    });
  }

  if (data.polyline) {
    data.polyline.forEach((item: any) => {
      const polylineOptions = {
        color: item.options.color || "black",
        dashArray: item.options.dashArray || "1,7",
      };
      const polyline = L.polyline(item.coordinates, polylineOptions).addTo(map);
      if (item.popup) {
        polyline.bindPopup(item.popup);
      }
    });
  }
};

onMounted(() => {
  initialMap.value = L.map(props.mapData.id, {
    zoomControl: false,
  }).setView(props.mapData.setView, props.mapData.zoom);

  L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(initialMap.value);

  L.control
    .zoom({
      position: "bottomright",
    })
    .addTo(initialMap.value);

  addMarkers(initialMap.value, props.mapData);
});

watch(
  () => props.mapData,
  (newData) => {
    if (initialMap.value) {
      initialMap.value.setView(newData.setView, newData.zoom);
      addMarkers(initialMap.value, newData);
    }
  }
);
</script>

<template>
  <div class="map" :id="props.mapData.id"></div>
</template>
