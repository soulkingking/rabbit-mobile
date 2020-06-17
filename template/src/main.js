import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import Rabbit from "@/components";
import Filter from "@/filter";
import Bus from "@/utils/bus";
import { Lazyload } from "vant";

import "vant/lib/index.css";

Vue.use(Vant);
Vue.use(Rabbit);
Vue.use(Filter);
Vue.use(Bus);
Vue.use(Lazyload, {
  lazyComponent: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
