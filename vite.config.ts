import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

export default defineConfig({
  plugins: [
    vue({
      template: {},
    }),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  build: {
    outDir: "dist", // build dir
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/assets/style.css";`,
      },
    },
  },
});
