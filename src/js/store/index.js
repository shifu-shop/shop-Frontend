import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import products from './modules/products.js';
import product from './modules/product.js';
import cart from './modules/cart.js';

import Vue from "vue";
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        products,
        product,
        cart
    },
    plugins: [createPersistedState()]
});