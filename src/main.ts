import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { useProvider } from "@/hooks";
import VueCompositionApi from "@vue/composition-api";
Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
new Vue({
  router,
  store,
  setup() {
    useProvider();
    return {};
  },
  render: h => h(App)
}).$mount("#app");
