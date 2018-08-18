<template>
    <div class="product-item section">
        <header class="product-item-header">
            <div class="col-4 product-item-header-img">
                <img src="" alt="">
            </div>
            <div class="product-item-header-description col-8">
                <h3 class="product-item-header-title">{{ product.title }}</h3>
                <p class="product-item-header-id">id: {{ product._id }}</p>
                <p class="product-item-header-price">{{ product.price }} $</p>
                <div class="product-header-buttons">
                    <button class="btn btn-custom-green" @click="addToCart(product._id)">Add to cart</button>
                </div>
            </div>
        </header>
        <main class="product-item-body col-8 offset-2">
            <h3 class="product-item-body-title">Description:</h3>
            <p class="product-item-body-description">{{ product.description }}</p>
        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "Product",
        methods: {
            addToCart(id) {
                this.$store.dispatch('cart/add', id);
            }
        },
        computed: {
            ...mapState({
                product: state => state.products.product
            })
        },
        created() {
            this.$store.dispatch('products/loadProduct', this.$route.params.id);
            console.log(this.product)
        }
    }
</script>

<style scoped>
    .product-item-header {
        display: flex;
        border-bottom: 1px solid rgb(227, 228, 232);
        flex-direction: row;
        align-items: flex-start;
        padding-bottom: 20px;
    }

    .product-item-header-img {
        display: flex;
    }

    .product-item-body {
        margin-top: 20px;
    }

    .product-item-header-description {
        display: flex;
        flex-direction: column;
    }

    .product-item-header-img > img {
        width: 200px;
        height: 200px;
        border: 1px solid rgb(227, 228, 232);
        border-radius: 5%;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        display: flex;
        margin: auto;
        color: deepskyblue;
        cursor: pointer;
    }

    .product-item-header-title {
        font-size: 1.6rem;
    }

    .product-item-body-title {
        font-weight: normal;
    }

    .product-item-header-id {
        margin: 0;
        font-size: 1rem;
    }

    .product-item-header-price {
        font-weight: bold;
        margin-top: 20px;
        font-size: 2rem;
    }

    .product-item {
        font-size: 2rem;
    }

    .product-item-body-description {
        font-size: 1.3rem;
    }
</style>