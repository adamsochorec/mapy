<script setup lang="ts">
import { ref } from "vue";
import Index from "@/views/index.vue";
import CountryFlag from "vue-country-flag-next";
const toggle = (event) => {
  op.value.toggle(event);
};

const op = ref();
</script>
<template>
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
    <header>
      <nav
        class="banner"
        style="
          height: 60px;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: space-between;
          width: 100vw;
          -o-object-position: center;
          object-position: center;
          position: absolute;
          z-index: 9;
          top: 0;
          left: 0;
          backdrop-filter: var(--blur-1);
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          overflow: hidden;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          padding: 0 var(--grid-gap-2);
        "
      >
        <b class="gradient" style="font-size: var(--font-size-3)">Maps</b>
        <div>
          <Button
            as="a"
            target="_blank"
            rel="noopener noreferrer nofollow"
            variant="text"
            href="https://vuejs.org"
            size="large"
            icon="fa-brands fa-vuejs"
          ></Button>
          <Button
            as="a"
            target="_blank"
            variant="text"
            size="large"
            rel="noopener noreferrer nofollow"
            href="https://python.org"
            icon="fa-brands fa-python"
          ></Button>
          <Button
            style="margin-left: var(--grid-gap-1)"
            icon="pi pi-github"
            label="GitHub"
            as="a"
            rounded
            size="small"
            href="https://github.com/adamsochorec/maps"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="cta"
          ></Button>
        </div>
      </nav>
    </header>
    <aside
      style="
        position: absolute;
        left: var(--grid-gap-2);
        bottom: 3.5rem;
        z-index: 99;
        display: flex;
        flex-direction: column;
        gap: var(--grid-gap-1);
      "
    >
      <Button icon="pi pi-info-circle" @click="toggle"></Button>
      <Popover ref="op">sfdfdf</Popover>
      <Button icon="pi pi-map"></Button>
    </aside>
    <!--  HEADER END -->
    <Index></Index>
    <!-- FOOTER START -->
    <footer
      style="
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 9;
        height: 5vh;
        min-height: 40px;
        background-color: var(--p-indigo-950);
        backdrop-filter: var(--blur-1);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: var(--font-size-7);
        text-align: center;
      "
    >
      <span
        >Coded with ❤︎ by
        <a
          class="gradient"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://github.com/adamsochorec"
          >Adam S.</a
        >
        in
        <CountryFlag
          country="dk"
          class="flag"
          size="small"
          style="vertical-align: sub"
        />
      </span>
    </footer>
    <!-- FOOTER END -->
  </main>
</template>
<style scoped>
.cta,
.cta:hover {
  background: -o-linear-gradient(38deg, var(--p-indigo-800), var(--p-rose-500));
  background: linear-gradient(52deg, var(--p-indigo-800), var(--p-rose-500));
  -webkit-animation: gradientAnimation 3s ease infinite;
  animation: gradientAnimation 3s ease infinite;
  color: white;
  outline: 1px solid transparent;
  border: 1px solid transparent;
}
</style>
