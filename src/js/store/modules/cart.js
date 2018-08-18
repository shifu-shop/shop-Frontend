import axios from 'axios';
axios.defaults.withCredentials = true
const state = {
    list: null
};

const getters = {
};


const actions = {
    load({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get('http://80.87.197.194:8888/cart').then(response => {
                commit('load', response.data);
                resolve(true);
            }).catch(error => {
                reject(error);
            });
        })
    },
    add({ commit }, id) {
        axios.post(`http://80.87.197.194:8888/cart/${id}`).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        });
    }

};

const mutations = {
    load(state, list) {
        state.list = list;
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}