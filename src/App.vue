<script setup lang="ts">
import Map from "./components/swiper-map.vue";
</script>

<template>
  <main>
    <Map></Map>
  </main>
</template>

<style scoped>
main {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-family: var(--content-font);
  overflow: hidden;
}
</style>
