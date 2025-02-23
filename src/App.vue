<script setup lang="ts">
import Index from "@/views/index.vue";
import Intro from "@/components/intro.vue";
</script>
<template>
  <main>
    <Intro></Intro>
    <Index></Index>
    <footer>
      <span
        >Coded with ❤︎ by
        <a target="_blank" rel="noopener" href="https://github.com/adamsochorec"
          >Adam S.</a
        ></span
      >
    </footer>
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
footer {
  margin-top: var(--grid-gap-3);
  background-color: var(--p-card-background);
  width: 100%;
  text-align: center;
  padding: var(--grid-gap-1) 0;
}
</style>
