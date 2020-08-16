import axios from 'axios';
import router from '../router';

export default {

  namespaced: true,
  state: {
    searchCoupons: '',
    customerOrder: [],
    customerOrderDetail: {},
    allProducts: [],
    ProductDetails: {},
    shopCart: [],
    cartSum: 0,
    alertMessage: {},
  },
  actions: {
    getProducts(context) { // 取得商品
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/products?paged=10`;
      axios.get(api)
        .then((response) => {
          context.commit('PRODUCT_ADD', response.data.data);
        })
        .catch(() => {
        });
    },
    getProductDetails(context, payload) { // 取得商品細節
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/product/${payload}`;
      axios.get(api)
        .then((response) => {
          console.log(response);
          context.commit('PRODUCT_DETAIL_ADD', response.data.data);
        })
        .catch(() => {
        });
    },
    addCart(context, payload) { // 加到購物車
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/shopping`;
      axios.post(api, payload)
        .then(() => {
          context.commit('CART_MSG_ADD', { icon: 'success', title: '成功加入購物車' });
          context.commit('CART_SUM', 1);
        })
        .catch(() => {
          context.commit('CART_MSG_ADD', { icon: 'error', title: '產品已在購物車' });
        });
    },
    getCart(context) { // 取得購物車
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/shopping`;
      axios.get(api)
        .then((response) => {
          context.commit('CART_ADD', response.data.data);
          context.commit('CART_SUM_SET', response.data.data.length);
        })
        .catch(() => {
          // context.commit('CART_MSG_ADD', '產品已在購物車');
        });
    },
    updateCart(context, payload) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/shopping`;
      axios.patch(api, payload)
        .then(() => {
          context.dispatch('getCart');
        })
        .catch(() => {
          // context.commit('CART_MSG_ADD', '產品已在購物車');
        });
    },
    deleteSingleCart(context, payload) { // 刪除購物車單筆資料
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/shopping/${payload}`;
      axios.delete(api)
        .then(() => {
          context.dispatch('getCart');
          context.commit('CART_MSG_ADD', { icon: 'success', title: '成功刪除' });
        })
        .catch(() => {
          console.log(payload);
          context.commit('CART_MSG_ADD', { icon: 'error', title: '刪除失敗' });
        });
    },
    resetCart(context, payload) { // 清空購物車
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/shopping/all/product`;
      axios.delete(api, payload)
        .then(() => {
          context.dispatch('getCart');
          context.commit('CART_MSG_ADD', { icon: 'success', title: '已清空購物車' });
          context.commit('CART_SUM_RESET');
        })
        .catch(() => {
        });
    },
    searchCoupons(context, payload) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/coupon/search`;
      axios.post(api, payload)
        .then((response) => {
          context.commit('CART_MSG_ADD', { icon: 'success', title: '已套用優惠券' });
          context.commit('COUPON_ADD', response.data.data);
        })
        .catch(() => {
          context.commit('CART_MSG_ADD', { icon: 'error', title: '無效的優惠券' });
        });
    },
    addOrder(context, payload) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/orders`;
      axios.post(api, payload)
        .then((res) => {
          console.log(res);
          router.push('/cart4');
          context.commit('CART_SUM_SET', 0);
          sessionStorage.clear();
        })
        .catch(() => {
        });
    },
  },
  mutations: {
    PRODUCT_ADD(state, payload) {
      state.allProducts = payload;
    },
    PRODUCT_DETAIL_ADD(state, payload) {
      state.ProductDetails = payload;
    },
    CART_MSG_ADD(state, payload) {
      state.alertMessage = payload;
    },
    CART_ADD(state, payload) {
      state.shopCart = payload;
    },
    CART_SUM(state, payload) {
      state.cartSum += payload;
    },
    CART_SUM_SET(state, payload) {
      state.cartSum = payload;
    },
    CART_SUM_RESET(state) {
      state.cartSum = 0;
    },
    ORDER_ADD(state, payload) {
      state.customerOrder = payload;
    },
    COUPON_ADD(state, payload) {
      state.searchCoupons = payload;
    },
  },
  getters: {
    productList(state) {
      return state.allProducts;
    },
    productDetail(state) {
      return state.ProductDetails;
    },
    alertInfo(state) {
      return state.alertMessage;
    },
    shopList(state) {
      return state.shopCart;
    },
    cartSum(state) {
      return state.cartSum;
    },
    couponInfo(state) {
      return state.searchCoupons;
    },
  },
};
