import Vue from "vue";
import Vuex, { Store } from "vuex";
import { launchDarkly } from "./launch-darkly/store/launch-darkly.store";

Vue.use(Vuex);

export interface RootState {}

export default new Store<{}>({
  modules: {
    launchDarkly,
  },
});
