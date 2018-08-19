<template>
    <main id="main">
        <nav class="navbar navbar-expand-lg navbar-dark bg-custom-green">
            <router-link to="/" class="navbar-brand">Shopos</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link">Your cart</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/add" class="nav-link">Add product</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
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