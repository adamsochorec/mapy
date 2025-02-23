<script setup lang="ts">
import Aaland from "@/components/aaland.vue";
import Blaavand from "@/components/blaavand.vue";
import Vasterbotten from "@/components/vasterbotten.vue";
import Vestkystruten from "@/components/vestkystruten.vue";
import CountryFlag from "vue-country-flag-next";
</script>

<template>
  <div
    style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 1rem"
  >
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <Aaland></Aaland>
      </template>
      <template #title>Expedition Åland</template>
      <template #subtitle>
        <CountryFlag country="ax" size="small" />
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer
        ><Button
          icon="pi pi-info-circle"
          severity="primary"
          label="Learn more"
        ></Button>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
      <template #header> <Blaavand></Blaavand> </template>
      <template #title>Blåvand</template>
      <template #subtitle>
        <CountryFlag country="dk" size="small" />
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer
        ><Button
          icon="pi pi-info-circle"
          severity="primary"
          label="Learn more"
        ></Button>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
      <template #header> <Vasterbotten></Vasterbotten> </template>
      <template #title>Västerbotten</template>
      <template #subtitle>
        <CountryFlag country="se" size="small" />
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer
        ><Button
          icon="pi pi-info-circle"
          severity="primary"
          label="Learn more"
        ></Button>
      </template>
    </Card>

    <Card style="width: 25rem; overflow: hidden">
      <template #header> <Vestkystruten></Vestkystruten></template>
      <template #title>Expedition Denmark</template>
      <template #subtitle>
        <CountryFlag country="dk" size="small" />
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer
        ><Button
          icon="pi pi-info-circle"
          severity="primary"
          label="Learn more"
        ></Button>
      </template>
    </Card>
  </div>
</template>
<style scoped>
.map {
  height: 200px;
  width: 100%;
}
.Card {
  margin: 1rem 0;
}
</style>
