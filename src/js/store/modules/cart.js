import axios from 'axios';
axios.defaults.withCredentials = true
const state = {
    list: null,
    loading: true,
    error: false
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
                commit('load');
                reject(error);
            });
        })
    },
    add({ commit }, id) {
        return new Promise((resolve, reject) => {
            axios.post(`http://80.87.197.194:8888/cart/${id}`).then(response => {
                resolve(true);
            }).catch(error => {
                reject(error);
            });
        });
    },
    increment({ commit }, id) {
        return new Promise((resolve, reject) => {
            axios.post(`http://80.87.197.194:8888/cart/${id}`).then(response => {
                commit('load', response.data);
                resolve(true);
            }).catch(error => {
                reject(error);
            });
        });
    },
    decrement({ commit }, id) {
        return new Promise((resolve, reject) => {
            axios.put(`http://80.87.197.194:8888/cart/${id}`).then(response => {
                commit('load', response.data);
                resolve(true);
            }).catch(error => {
                reject(error);
            });
        });
    },
    remove({ commit }, id) {
        return new Promise((resolve, reject) => {
            axios.delete(`http://80.87.197.194:8888/cart/${id}`).then(response => {
                commit('load', response.data);
                resolve(true);
            }).catch(error => {
                reject(error);
            });
        });
    }
};

const mutations = {
    load(state, list) {
        if(list) {
            state.list = list;
            state.loading = false;
            state.error = false;
        } else {
            state.error = true;
        }
    },
    clear(state) {
        state.loading = true;
        state.error = false;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}