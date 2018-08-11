import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import Vue from "vue";
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {

    },
    plugins: [createPersistedState()]
});