<template>
    <main id="main">
        <nav class="navbar navbar-expand navbar-dark bg-custom-green">
            <div class="container">
                <div class="row container justify-content-between">
                    <a id="logo">Shopos</a>
                    <router-link to="/cart" style="color: white; text-decoration: none">Корзина</router-link>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <transition name="fade" mode="out-in" appear>
                        <router-view class="col-12"></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'App',
    }
</script>