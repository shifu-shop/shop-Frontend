import axios from 'axios';

const state = [];

const getters = {
};


const actions = {
    load({ commit }) {
        axios.get('http://80.87.197.194:8888/cart').then(response => {
            console.log(response)
        }).catch(error => {
            console.table(error)
        });
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

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}