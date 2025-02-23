<script setup lang="ts">
import Map from "@/components/map.vue";
import CountryFlag from "vue-country-flag-next";
import geoData from "@/assets/geoData.json";
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
      <template #footer
        ><Button
          icon="pi pi-info-circle"
          severity="primary"
          label="Learn more"
        ></Button>
      </template>
    </Card>
  </div>
</template>
<style scoped>
.map {
  height: 300px;
  width: 100%;
}
</style>
