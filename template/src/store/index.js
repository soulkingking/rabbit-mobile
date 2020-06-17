import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { BASE_NAME } from "@/config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      key: BASE_NAME,
      reducer(state, paths) {
        return {};
      },
    }),
  ],
});
