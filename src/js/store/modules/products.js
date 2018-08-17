import axios from 'axios';

const state = {
    products: [],
    product: {},
    pageNumber: 0,
    pageCount: 0
};

const getters = {
};


const actions = {
    load({ commit }, { value, offset }) {
        return new Promise((resolve, reject) => {
            axios.get(`http://80.87.197.194:8888/getallproducts?value=${value}&offset=${offset}`).then(response => {
                commit('loadProducts', response.data);
                resolve(true);
            }).catch(error => {
                console.table(error);
                reject(error);
            });
        })
    },
    add({ commit }, { image, title, description, price }) {
        axios.post('http://80.87.197.194:8888/product', {
            title,
            description,
            category: 1,
            price
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.table(error);
        })
    },
    loadProduct({ commit }, productId) {
        commit('clearProduct');
        axios.get(`http://80.87.197.194:8888/product/${productId}`).then(response => {
            commit('selectProduct', response.data);
        }).catch(error => {
            console.table(error)
        })
    },
    pageCount({ commit }) {
        axios.get('http://80.87.197.194:8888/getcount').then(response => {
            let l = response.data,
                s = 10;
            commit('pageCount', Math.ceil(l/s));
        }).catch(error => {
            console.log(error)
        })
    }
};

const mutations = {
    loadProducts(state, productsArray) {
        state.products = productsArray;
    },
    selectProduct(state, productObj) {
        state.product = productObj;
    },
    clearProduct(state) {
        state.product = {};
    },
    nextPage(state) {
        state.pageNumber++;
    },
    previousPAge(state) {
        state.pageNumber--;
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