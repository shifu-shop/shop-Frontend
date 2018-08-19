<template>
        <div>
            <div class="product-list">
                <section class="section product row" v-for="product in products">
                    <header class="product-header col-4">
                        <img :src="product.img64" alt="source image" class="product-header-img" v-if="product.img64">
                        <div class="product-header-img" v-else>
                            <p>No photo</p>
                        </div>
                    </header>
                    <div class="product-header-title col-8">
                        <router-link :to="'product/' + product._id" class="product-title col-12">{{ product.title }}</router-link>
                        <article class="product-description col-12">
                            <p class="product-description-title">
                                Id: {{ product._id }}
                            </p>
                            <p class="product-description-content">
                                {{ product.description }}
                            </p>
                        </article>
                    </div>
                </section>
            </div>
            <div class="section row">
                <ul class="pagination col-12 justify-content-center">
                    <li class="page-item" v-for="p in pageCount">
                        <a @click.prevent="selectPage(p)" class="page-link">{{ p }}</a>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "Main",
        methods: {
            selectPage(selectedPage) {
                this.$store.dispatch('products/load', { value: 10, offset: selectedPage * 10 - 10 });
            }
        },
        computed: {
            ...mapState({
                products: state => state.products.products,
                pageCount: state => state.products.pageCount
            })
        }
    }
</script>

<style scoped>
    .product-header-img {
        width: 200px;
        height: 200px;
        border: 1px solid rgb(227, 228, 232);
        border-radius: 5%;
        justify-content: center;
        flex-direction: column;
        font-size: 1.2rem;
        text-align: center;
        display: flex;
        margin: auto;
        color: deepskyblue;
        cursor: pointer;
    }

    .product-header-buttons > button {
        width: 200px;
        margin-top: 15px;
    }

    .product-title {
        font-size: 1.5rem;
    }
</style>