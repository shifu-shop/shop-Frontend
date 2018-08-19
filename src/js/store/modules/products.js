import axios from 'axios';

const state = {
    products: [],
    pageNumber: 0,
    pageCount: 0
};

const getters = {
};


const actions = {
    load({ commit }, { value, offset }) {
        return new Promise((resolve, reject) => {
            axios.get(`http://80.87.197.194:8888/getallproducts?value=${value}&offset=${offset}`).then(response => {
                commit('load', response.data);
                resolve(true);
            }).catch(error => {
                reject(error);
            });
        })
    },
    add({ commit }, { image, title, description, price, cropImg }) {
        return new Promise((resolve, reject) => {
            axios.post('http://80.87.197.194:8888/product64', {
                title,
                description,
                category: 1,
                price,
                image: cropImg
            }).then(response => {
                resolve(true);
            }).catch(error => {
                reject(error);
            });
        })
    },
    pageCount({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get('http://80.87.197.194:8888/getcount').then(response => {
                let l = response.data,
                    s = 10;
                commit('pageCount', Math.ceil(l/s));
                resolve(true);
            }).catch(error => {
                reject(error);
            })
        })
    }
};

const mutations = {
    load(state, productsArray) {
        state.products = productsArray;
    },
    pageCount(state, counted) {
        state.pageCount = counted;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}