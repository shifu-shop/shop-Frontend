import Main from './components/Main.vue';
import PageNotFound from './components/PageNotFound.vue';
import AddProduct from './components/AddProduct.vue';
import Product from './components/Product.vue';
import Cart from './components/Cart.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
    {
        path: '/add',
        name: 'AddProduct',
        component: AddProduct
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: Product
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    }
];
export { routes };