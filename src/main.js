import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import vf from "vue-forage";

Vue.config.productionTip = false;
Vue.use(vf);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
