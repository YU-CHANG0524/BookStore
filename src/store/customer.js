// import axios from 'axios';

export default {

  namespaced: true,
  state: {
    searchCoupons: {},
    customerOrder: [],
    customerOrderDetail: {},
    allProducts: [],
    ProductDetails: {},
    shopCart: {},
  },
  actions: {
    // getProducts(context, payload) {
    // },
  },
  mutations: {
    PRODUCT_ADD(state, payload) {
      state.allProducts = payload;
    },
    ORDER_ADD(state, payload) {
      state.customerOrder = payload;
    },
    COUPON_ADD(state, payload) {
      state.searchCoupons = payload;
    },
  },
  getters: {

  },
};
