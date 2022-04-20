import Vue, { CreateElement, VNode } from "vue";

import App from "./App.vue";
import store from "./store";
import VueLaunchDarkly from "./launch-darkly/vue-ld";

Vue.use(VueLaunchDarkly);

new Vue({
  store,
  render: (h: CreateElement): VNode => h(App),
}).$mount("#app");
