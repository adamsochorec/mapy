<script setup lang="ts">
import Index from "@/views/index.vue";
import CountryFlag from "vue-country-flag-next";
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
            style="
              background-color: var(--p-indigo-900);
              color: white;
              border: none;
            "
            as="a"
            target="_blank"
            rel="noopener noreferrer nofollow"
            variant="text"
            href="https://vuejs.org"
            icon="fa-brands fa-vuejs"
          ></Button>
          <Button
            style="
              background-color: var(--p-indigo-900);
              margin: 0 var(--grid-gap-2);
              color: white;
              border: none;
            "
            as="a"
            target="_blank"
            variant="text"
            rel="noopener noreferrer nofollow"
            href="https://python.org"
            icon="fa-brands fa-python"
          ></Button>
          <Button
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

    <!--  HEADER END -->
    <Index></Index>
    <!-- FOOTER START -->
    <footer
      style="
        position: relative;
        bottom: 0;
        left: 0;
        height: auto;
        color: var(--p-indigo-900);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: var(--font-size-7);
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
  -webkit-animation: gradientAnimation 3s ease infinite;
  animation: gradientAnimation 3s ease infinite;
  background-size: 400% 400%;
}
</style>
