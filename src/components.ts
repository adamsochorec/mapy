import { App } from "vue";
import { defineAsyncComponent } from "vue";

// Function to register global components with lazy loading
export function registerGlobalComponents(app: App) {
  app.component(
    "Map",
    defineAsyncComponent(() => import("@/components/swiper-map.vue"))
  );
  app.component(
    "Aaland",
    defineAsyncComponent(() => import("@/components/aaland.vue"))
  );
  app.component(
    "Blaavand",
    defineAsyncComponent(() => import("@/components/blaavand.vue"))
  );
  app.component(
    "Vestkystruten",
    defineAsyncComponent(() => import("@/components/vestkystruten.vue"))
  );
  app.component(
    "Vasterbotten",
    defineAsyncComponent(() => import("@/components/vasterbotten.vue"))
  );
}
