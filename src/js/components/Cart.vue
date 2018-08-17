<template>
    <h3>Product list</h3>
</template>

<script>
    export default {
        name: "Cart",
        created() {
            this.$store.dispatch('cart/load');
            console.log('Корзина')
        }
    }
</script>

<style scoped>

</style>