<template>
    <div v-if="cart.loading || cart.error" class="section">
        <h3 class="text-center">Loading...</h3>
    </div>
    <div class="section" v-else-if="!list.length">
        <h3 class="text-center">Cart is empty</h3>
    </div>
    <div v-else>
        <section class="section row cart flex-column">
            <h3 class="text-center"> Total price: {{ cart.list.totalPrice }} $</h3>
            <h3 class="text-center"> Total items: {{ cart.list.totalItems }}</h3>
        </section>
        <section class="section product row" v-for="product in list">
            <header class="product-header col-4">
                <img src="" alt="" class="product-header-img">
                <div class="dropdown product-header-buttons row flex-column">
                    <button class="btn btn-custom-green dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        quantity: {{ product.quantity }}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li class="dropdown-item" style="cursor: pointer" @click="$store.dispatch('cart/increment', product.item._id)">Increment</li>
                        <li class="dropdown-item" style="cursor: pointer" @click="$store.dispatch('cart/decrement', product.item._id)">Decrement</li>
                        <li class="dropdown-item" style="cursor: pointer" @click="$store.dispatch('cart/remove', product.item._id)">Remove</li>
                    </ul>
                </div>
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
              list: []
          }
        },
        computed: {
            ...mapState({
                cart: state => state.cart
            })
        },
        created() {
            this.$store.dispatch('cart/load');
            this.$store.subscribe((mutation, state) => {
                if(mutation.type === 'cart/load') {
                    this.list = [];
                    for (const productId in state.cart.list.items) {
                        const product = this.cart.list.items[productId];
                        this.list.push(product);
                    }
                }
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
    .product-header-buttons > h4 {
        margin: 0;
    }
    .product-header-buttons > button {
        margin: 20px auto 0 auto;
    }
</style>