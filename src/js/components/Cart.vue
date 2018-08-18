<template>
    <div class="section row flex-column" v-if="error.length">
        <h3 class="text-center">{{ error }}</h3>
    </div>
    <div v-else>
        <section class="section row cart flex-column">
            <h3 class="text-center"> Total price: {{ cart.list.totalPrice }} $</h3>
            <h3 class="text-center"> Total items: {{ cart.list.totalItems }} piece</h3>
        </section>
        <section class="section product row" v-for="product in list">
            <header class="product-header col-4">
                <img src="" alt="" class="product-header-img">
            </header>
            <div class="product-header-title col-8">
                <router-link :to="'product/' + product.item._id" class="product-title col-12">{{ product.item.title }}</router-link>
                <article class="product-description col-12">
                    <p class="product-description-title">
                        Id: {{ product.item._id }}
                    </p>
                    <p class="product-description-content">
                        {{ product.item.description }}
                    </p>
                </article>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "Cart",
        data() {
          return {
              list: [],
              error: ''
          }
        },
        computed: {
            ...mapState({
                cart: state => state.cart
            })
        },
        created() {
            this.$store.dispatch('cart/load').then(success => {
                this.error = '';
                for (const productId in this.cart.list.items) {
                    const product = this.cart.list.items[productId];
                    this.list.push(product);
                }
            }).catch(error => {
                this.error = 'Cart is empty';
            });
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