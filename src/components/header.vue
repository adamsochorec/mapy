<template>
  <header>
    <nav
      style="
        height: 50px;
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
      <div style="display: flex; align-items: center">
        <b class="gradient" style="font-size: var(--font-size-4)">Maps</b>
      </div>
      <div>
        <a
          style="color: var(--p-indigo-950)"
          size="large"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://vuejs.org"
          class="fa-brands fa-vuejs icon"
        ></a>
        <a
          style="color: var(--p-indigo-950); margin: 0 var(--grid-gap-1)"
          size="large"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://python.org"
          class="fa-brands fa-python"
        ></a>
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
</template>
<style scoped>
.cta {
  background: -o-linear-gradient(38deg, var(--p-indigo-950), var(--p-rose-800));
  background: linear-gradient(52deg, var(--p-indigo-950), var(--p-rose-800));
  -webkit-animation: gradientAnimation 3s ease infinite;
  animation: gradientAnimation 3s ease infinite;
  color: white;
  outline: 1px solid transparent;
  border: 1px solid transparent;
  -webkit-animation: gradientAnimation 3s ease infinite;
  animation: gradientAnimation 3s ease infinite;
  background-size: 400% 400%;
}
.cta:hover {
  background: transparent !important;
  border: 1px solid var(--p-indigo-950) !important;
  background: -o-linear-gradient(
    38deg,
    var(--p-indigo-950),
    var(--p-rose-800)
  ) !important;
  background: linear-gradient(
    52deg,
    var(--p-indigo-950),
    var(--p-rose-800)
  ) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  -webkit-animation: gradientAnimation 3s ease infinite !important;
  animation: gradientAnimation 3s ease infinite !important;
  background-size: 400% 400% !important;
}
</style>
