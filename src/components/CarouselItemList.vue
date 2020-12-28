<template>
  <div :class="$style.slider">
    <a
      v-for="({ linkLabel }, itemIndex) in items"
      :key="itemIndex"
      @click="visibleIndex = itemIndex"
    >
      {{ linkLabel || itemIndex }}
    </a>
    <div>
      <carousel-item
        v-for="(item, itemIndex) in items"
        v-show="visibleIndex === itemIndex"
        :item="item"
        :key="itemIndex"
        @click.native="itemClicked(itemIndex)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import CarouselItem, { Item } from "./CarouselItem.vue";

export default Vue.extend({
  name: "CarouselItemList",
  components: {
    CarouselItem
  },
  props: {
    items: {
      type: Array as PropType<Item[]>
    }
  },
  data() {
    return {
      visibleIndex: 0
    };
  },
  methods: {
    itemClicked(itemIndex: number) {
      this.visibleIndex = itemIndex + 1 < this.items.length ? itemIndex + 1 : 0;
    }
  }
});
</script>

<style module>
.slider {
  text-align: center;
  overflow: hidden;
}
</style>
