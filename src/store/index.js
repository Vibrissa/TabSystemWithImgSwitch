import Vue from "vue";
import Vuex from "vuex";
import { state, mutations } from "./state";
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations
  // plugins,
});
