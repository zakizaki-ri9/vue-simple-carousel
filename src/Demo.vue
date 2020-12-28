<template>
  <div id="app">
    <carousel-item-list :items="items" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CarouselItemList from "@/components/CarouselItemList.vue";
import { Item } from "@/components/CarouselItem.vue";

export default Vue.extend({
  name: "Demo",
  components: {
    CarouselItemList
  },
  computed: {
    items(): Item[] {
      return [
        {
          src: "https://placehold.jp/150x150.png"
        },
        {
          src: "https://placehold.jp/300x300.png"
        },
        {
          src: "https://placehold.jp/300x600.png"
        },
        {
          src: "https://placehold.jp/600x600.png"
        },
        {
          src: "https://placehold.jp/900x600.png"
        }
      ];
    }
  }
});
</script>
