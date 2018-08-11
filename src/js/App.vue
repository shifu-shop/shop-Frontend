<template>
    <main id="main">
        <nav class="navbar navbar-expand navbar-dark bg-custom-green">
            <div class="container">
                <div class="row">
                    <a id="logo" class="col-4 offset-2">Shopos</a>
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