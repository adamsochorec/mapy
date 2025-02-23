import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import PrimeVueTheme from "@primevue/themes/material";
import { definePreset } from "@primevue/themes";
import "primeicons/primeicons.css";
import CountryFlag from "vue-country-flag-next";

const app = createApp(App);

const slavicmedia = definePreset(PrimeVueTheme, {
  semantic: {
    primary: {
      50: "{blue.50}",
      100: "{blue.100}",
      200: "{blue.200}",
      300: "{blue.300}",
      400: "{blue.400}",
      500: "{blue.500}",
      600: "{blue.600}",
      700: "{blue.700}",
      800: "{blue.800}",
      900: "{blue.900}",
      950: "{blue.950}",
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: slavicmedia,
  },
});

app.component("CountryFlag", CountryFlag);

app.use(PrimeVue);
createApp(App).mount("#app");
