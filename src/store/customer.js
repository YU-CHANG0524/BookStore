import axios from 'axios';

export default {

  namespaced: true,
  state: {
    searchCoupons: {},
    customerOrder: [],
    customerOrderDetail: {},
    allProducts: [],
    ProductDetails: {},
    shopCart: [],
    alertMessage: '',
  },
  actions: {
    getProducts(context) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/products?paged=10`;
      axios.get(api)
        .then((response) => {
          context.commit('PRODUCT_ADD', response.data.data);
        })
        .catch(() => {
        });
    },
    getProductDetails(context, payload) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/product/${payload}`;
      axios.get(api)
        .then((response) => {
          console.log(response);
          context.commit('PRODUCT_DETAIL_ADD', response.data.data);
        })
        .catch(() => {
        });
    },
    addCart(context, payload) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/shopping`;
      axios.get(api, payload)
        .then(() => {
          context.commit('CART_ADD', '成功加入購物車');
        })
        .catch(() => {
          // context.commit('CART_ADD', '產品已在購物車');
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
    CART_ADD(state, payload) {
      state.alertMessage = payload;
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
  },
};
