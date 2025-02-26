<script setup lang="ts">
import { ref } from "vue";
import Index from "@/views/index.vue";
import Footer from "@/components/footer.vue";
import Header from "@/components/header.vue";
/* import MapSwitch from "@/components/map-switch.vue";
 */
</script>
<template>
  <body>
    <main
      style="
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
        overflow: hidden;
      "
    >
      <!--  HEADER START -->
      <Header></Header>
      <!--  HEADER END -->
      <!--       <MapSwitch></MapSwitch>
 -->
      <Index></Index>
      <!-- FOOTER START -->
      <Footer></Footer>
      <!-- FOOTER END -->
    </main>
  </body>
</template>
<style scoped></style>
