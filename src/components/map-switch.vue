<script setup lang="ts">
import { ref } from "vue";
import RadioButton from "primevue/radiobutton";

const selectedStyle = ref("Landscape");
const mapStyles = [
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
];
</script>
<template>
  <aside>
    <div style="position: absolute; bottom: 40px; right: 40px; z-index: 999">
      <div v-for="(mapOptions, index) in mapStyles" :key="index">
        <RadioButton
          v-model="selectedStyle"
          :inputId="mapOptions.value"
          name="dynamic"
          :value="mapOptions.value"
        />
        <label :for="mapOptions.value">{{ mapOptions.label }}</label>
      </div>
    </div>
  </aside>
</template>
