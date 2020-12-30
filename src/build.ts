/**
 * see. https://jp.vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E5%8C%96%E3%81%95%E3%82%8C%E3%81%9F%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AF%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%8B
 */
// @ts-nocheck
import { CarouselItemList } from "@/components";
import { VueConstructor } from "vue/types/umd";
import { Item } from "@/components/types";

// Vue.use() によって実行される install 関数を定義
export function install(vue: VueConstructor) {
  if (install.installed) return;
  install.installed = true;

  vue.component(CarouselItemList.name, CarouselItemList);
}

// Vue.use() のためのモジュール定義を作成
// Create module definition for Vue.use()
const plugin = {
  install
};

// vue が見つかった場合に自動インストールする (ブラウザで <script> タグを用いた場合等)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// (npm/webpack 等で) モジュールとして利用させるためコンポーネントを export する
export { CarouselItemList, Item };
