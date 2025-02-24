<template>
  <section>
    <div class="banner">
      <div class="filter"></div>
      <img src="../assets/map.svg" />
      <div class="title flex-center">
        <h1>Maps</h1>
        <div class="stack">
          <Button
            as="a"
            target="_blank"
            rel="noopener"
            href="https://vuejs.org"
            variant="outlined"
            icon="fa-brands fa-vuejs"
          ></Button>
          <Button
            as="a"
            target="_blank"
            rel="noopener"
            href="https://python.org"
            variant="outlined"
            icon="fa-brands fa-python"
          ></Button>
          <Button
            as="a"
            target="_blank"
            rel="noopener"
            href="https://docker.com"
            variant="outlined"
            icon="fa-brands fa-docker"
          ></Button>
        </div>
        <Button
          icon="pi pi-github"
          variant="outlined"
          label="GitHub"
          as="a"
          href="https://github.com/adamsochorec/maps"
          target="_blank"
          rel="noopener"
        ></Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  height: 50vh;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100vw;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  position: relative;
  background: #000;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-shadow: var(--box-shadow-1);
  box-shadow: var(--box-shadow-1);
}
h1,
h2 {
  line-height: 1;
  margin: 0;
}
h1 {
  font-size: var(--font-size-1);
}
.stack {
  margin: var(--grid-gap-2);
  display: flex;
  grid-gap: var(--grid-gap-2);
}
img {
  position: relative;
  display: block;
  opacity: 0.9;
  width: 100%;
}
.title {
  position: absolute;
  text-align: center;
  margin-bottom: var(--grid-gap-2);
  padding: var(--grid-gap-2);
}
</style>
