import axios from 'axios';

const state = {
    loading: true,
    error: false,
    item: {}
};

const getters = {

};

const actions = {
    load({ commit }, productId) {
        commit('clear');
        axios.get(`http://80.87.197.194:8888/product/${productId}`).then(response => {
            commit('load', response.data);
        }).catch(error => {
            commit('load');
        })
    },
};

const mutations = {
    load(state, product) {
        if(product) {
            state.loading = false;
            state.item = product;
        } else {
            state.error = true;
        }
    },
    clear(state) {
        state.loading = true;
        state.error = false;
        state.item = {};
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}