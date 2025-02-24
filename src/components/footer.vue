<template>
  <footer
    style="
      position: absolute;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.7);
      left: 0;
      padding: 0 5px;
      color: black;
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-8);
    "
  >
    <span
      >Coded with ❤︎ by
      <a
        style="color: #0078a8"
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://github.com/adamsochorec"
        >Adam S.</a
      >
    </span>
  </footer>
</template>
<style scoped>
.separator::after {
  content: "|";
  margin: 0 var(--grid-gap-1);
}
</style>
