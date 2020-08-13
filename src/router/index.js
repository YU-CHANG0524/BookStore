import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/front/Layout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/front/Home.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: '/active',
        name: 'active',
        component: () => import('../views/front/Active.vue'),
      },
      {
        path: '/productList',
        name: 'productList',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: '/productDetail',
        name: 'productDetail',
        component: () => import('../views/front/ProductDetail.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: '/cart2',
        name: 'cart2',
        component: () => import('../views/front/Cart2.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/back/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/back/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'product',
        name: 'product',
        component: () => import('../views/back/Product.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/back/Orders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('../views/back/Coupon.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'storage',
        name: 'storage',
        component: () => import('../views/back/Storage.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '*',
    name: 'error',
    component: () => import('../views/front/Error.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
