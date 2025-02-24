<script setup lang="ts">
import Index from "@/views/index.vue";
import Footer from "@/components/footer.vue";
import Header from "@/components/header.vue";
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
        font-family: var(--content-font);
        overflow: hidden;
      "
    >
      <!--  HEADER START -->
      <Header></Header>
      <!--  HEADER END -->
      <Index></Index>
      <!-- FOOTER START -->
      <Footer></Footer>
      <!-- FOOTER END -->
    </main>
  </body>
</template>
<style scoped></style>
