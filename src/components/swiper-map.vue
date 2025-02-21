<script setup lang="ts">
import Aaland from "../components/aaland.vue";
import Blaavand from "../components/blaavand.vue";
import Vasterbotten from "../components/vasterbotten.vue";
import Vestkystruten from "../components/vestkystruten.vue";
</script>

<template>
  <div class="container">
    <div class="section"><Aaland></Aaland></div>
    <div class="section"><Blaavand></Blaavand></div>
    <div class="section"><Vasterbotten></Vasterbotten></div>
    <div class="section"><Vestkystruten></Vestkystruten></div>
  </div>
</template>
<style scoped>
.container .map {
  height: 100vh;
  width: 100vw;
}
.section {
  margin: 1rem 0;
}
</style>
