<template>
  <picture>
    <source :srcset="item.src" :media="item.media || ''" :class="$style.item" />
    <img :src="item.src" :alt="item.alt || ''" :class="$style.item" />
  </picture>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Item } from "./types";

export default Vue.extend({
  name: "CarouselItem",
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true
    }
  }
});
</script>

<style module>
.item {
  object-fit: cover;
}
</style>
