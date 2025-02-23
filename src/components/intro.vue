<template>
  <section>
    <div class="banner">
      <img
        src="https://www.thunderforest.com/images/sets/interlaken-636.png"
        alt="Banner showcasing Slavic Media Lightroom Presets"
      />
      <div class="title flex-center">
        <h1>Maps</h1>
        <div class="stack">
          <span class="fa-brands fa-js"></span
          ><span class="fa-brands fa-vuejs"></span>
          <span class="fa-brands fa-docker"></span>
          <span class="fa-brands fa-css3"></span>
          <span class="fa-brands fa-html5"></span>
        </div>
        <Button
          severity="primary"
          icon="pi pi-star-fill"
          variant="outlined"
          rounded
          label="Give a star"
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
  height: 240px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100vw;
  backdrop-filter: var(--blur-1) !important; /* Standard syntax */
  -webkit-backdrop-filter: var(--blur-1) !important; /* Chrome, Safari, Opera */
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
.stack span {
  font-size: var(--font-size-5);
}
img {
  position: relative;
  display: block;
  width: 100%;
  -webkit-filter: blur(50px);
  filter: blur(50px);
}
.title {
  position: absolute;
  text-align: center;
  margin-bottom: var(--grid-gap-2);
  padding: var(--grid-gap-2);
}
@media only screen and (max-width: 500px) {
  p {
    font-size: var(--font-size-8);
  }
  .banner {
    height: var(--dimension-2);
  }
}
</style>
