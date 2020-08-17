import axios from 'axios';
import $ from 'jquery';

export default {
  // 狀態
  namespaced: true,
  state: {
    products: [],
    orders: [],
    couponDateSet: {}, // 優惠券取得與修改格式不同
    coupon: [],
    storage: [],
    alertMessage: '',
    pagination: {},
  },
  // 放非同步行為
  actions: {
    getProducts(context, payload) { // 取得產品
      context.commit('LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/products?page=${payload}&paged=10`;
      axios.defaults.headers.common.Authorization = `Bearer ${context.rootState.token.api_token}`;
      axios.get(api)
        .then((response) => {
          context.commit('PAGINATION_ADD', response.data.meta.pagination);
          context.commit('PRODUCT_ADD', response.data);
          context.commit('LOADING', false, { root: true });
        })
        .catch((error) => {
          context.commit('ALERT_MESSAGE', error);
          context.commit('LOADING', false, { root: true });
        });
    },
    updateProducts(context, payload) { // 更新產品
      context.commit('LOADING', true, { root: true });
      let httpMethod = 'post';
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/product`;

      if (payload.id) { // 如果有id欄位代表 是更新
        httpMethod = 'patch';// 更改http方法為patch
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/product/${payload.id}`;// 並加api 戴上參數
      }
      axios[httpMethod](api, payload)
        .then(() => {
          const msg = {
            state: true,
            response: true,
            message: '產品更新成功',
          };
          context.dispatch('getProducts');
          $('#productModal').modal('hide');
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        })
        .catch(() => {
          const msg = {
            state: true,
            response: false,
            message: '產品更新失敗',
          };
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        });
    },
    deleteProducts(context, payload) { // 刪除產品
      context.commit('LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/product/${payload.id}`;
      axios.delete(api)
        .then(() => {
          const msg = {
            state: true,
            response: true,
            message: '產品刪除成功',
          };
          context.dispatch('getProducts');
          $('#delProductModal').modal('hide');
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        })
        .catch(() => {
          const msg = {
            state: true,
            response: false,
            message: '產品刪除失敗',
          };
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        });
    },
    getOrders(context, payload) { // 取得訂單
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/orders?page=${payload}&paged=10`;
      axios.defaults.headers.common.Authorization = `Bearer ${context.rootState.token.api_token}`;
      axios.get(api)
        .then((response) => {
          console.log();
          context.commit('LOADING', false, { root: true });
          context.commit('ORDER_ADD', response.data.data);
          context.commit('PAGINATION_ADD', response.data.meta.pagination);
        })
        .catch((error) => {
          context.commit('ALERT_MESSAGE', error);
          context.commit('LOADING', false, { root: true });
        });
    },
    updateOrders(context, payload) { // 更新訂單付款狀態
      context.commit('LOADING', true, { root: true });
      // eslint-disable-next-line prefer-const
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/orders/${payload.id}/paid`;
      if (payload.status) { // 如果有id欄位代表 是更新
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/orders/${payload.id}/unpaid`;
      }
      axios.patch(api)
        .then(() => {
          const msg = {
            state: true,
            response: true,
            message: '已成功修改付款狀態',
          };
          context.dispatch('getOrders');
          $('#changeModal').modal('hide');
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        })
        .catch(() => {
          const msg = {
            state: true,
            response: false,
            message: '修改失敗',
          };
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        });
    },
    getCoupon(context, payload) { // 取得優惠券
      context.commit('LOADING', true, { root: true });
      axios.defaults.headers.common.Authorization = `Bearer ${context.rootState.token.api_token}`;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/coupons?page=${payload}&paged=8`;
      axios.get(api)
        .then((response) => {
          context.commit('PAGINATION_ADD', response.data.meta.pagination);
          context.commit('COUPON_ADD', response.data.data);
          context.commit('COUPON_DATA_RESET');
          context.commit('LOADING', false, { root: true });
        })
        .catch(() => {
          context.commit('COUPON_DATA_RESET');
          context.commit('LOADING', false, { root: true });
        });
    },
    updateCoupon(context, payload) { // 更新優惠券
      context.commit('LOADING', true, { root: true });
      context.commit('COUPON_EDIT_SET', payload);
      let httpMethod = 'post';
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/coupon`;

      if (payload.id) { // 如果有id欄位代表 是更新
        httpMethod = 'patch';// 更改http方法為patch
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/coupon/${payload.id}`;// 並加api 戴上參數
      }
      axios[httpMethod](api, context.state.couponDateSet)
        .then(() => {
          const msg = {
            state: true,
            response: true,
            message: '優惠券更新成功',
          };
          context.dispatch('getCoupon');
          $('#couponModal').modal('hide');
          context.commit('LOADING', false, { root: true });
          context.commit('COUPON_DATA_RESET');
          context.commit('ALERT_ADD', msg, { root: true });
        })
        .catch(() => {
          const msg = {
            state: true,
            response: false,
            message: '優惠券更新失敗',
          };
          context.commit('COUPON_DATA_RESET');
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        });
    },
    deleteCoupon(context, payload) { // 刪除優惠券
      context.commit('LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/coupon/${payload.id}`;
      axios.delete(api)
        .then(() => {
          const msg = {
            state: true,
            response: true,
            message: '優惠券刪除成功',
          };
          context.dispatch('getCoupon');
          $('#coupondeleteModal').modal('hide');
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        })
        .catch(() => {
          const msg = {
            state: true,
            response: false,
            message: '產品刪除失敗',
          };
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        });
    },
    getStorages(context, payload = 1) { //
      context.commit('LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/storage?page=${payload}&paged=8`;
      axios.defaults.headers.common.Authorization = `Bearer ${context.rootState.token.api_token}`;
      axios.get(api)
        .then((response) => {
          context.commit('PAGINATION_ADD', response.data.meta.pagination);
          context.commit('LOADING', false, { root: true });
          context.commit('STORAGE_ADD', response.data.data);
        })
        .catch((error) => {
          context.commit('ALERT_MESSAGE', error);
          context.commit('LOADING', false, { root: true });
        });
    },
    deleteStorage(context, payload) {
      context.commit('LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/storage/${payload}`;
      axios.delete(api)
        .then(() => {
          const msg = {
            state: true,
            response: true,
            message: '檔案刪除成功',
          };
          context.dispatch('getStorages');
          $('#delStorageModal').modal('hide');
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        })
        .catch(() => {
          const msg = {
            state: true,
            response: true,
            message: '檔案刪除失敗',
          };
          context.commit('LOADING', false, { root: true });
          context.commit('ALERT_ADD', msg, { root: true });
        });
    },
  },
  mutations: {
    PRODUCT_ADD(state, payload) {
      state.products = payload;
    },
    ORDER_ADD(state, payload) {
      state.orders = payload;
    },
    COUPON_ADD(state, payload) {
      state.coupon = payload;
    },
    COUPON_EDIT_SET(state, payload) { // 設定優惠券更新修改前的格式
      state.couponDateSet.title = payload.title;
      state.couponDateSet.code = payload.code;
      state.couponDateSet.percent = payload.percent;
      state.couponDateSet.enabled = payload.enabled;
      state.couponDateSet.deadline_at = payload.deadline.datetime;
    },
    COUPON_DATA_RESET(state) {
      state.couponDataSet = {};
    },
    STORAGE_ADD(state, payload) {
      state.storage = payload;
    },
    PAGINATION_ADD(state, payload) {
      state.pagination = payload;
    },
    ALERT_MESSAGE(state, payload) {
      state.alertMessage = payload;
    },
  },
  getters: {
    productsList(state) { // 產品的陣列
      return state.products.data;
    },
    productsPagination(state) { // 產品的導覽資訊
      return state.products.meta.pagination;
    },
    ordersList(state) {
      return state.orders;
    },
    couponsList(state) {
      return state.coupon;
    },
    storagesList(state) {
      return state.storage;
    },
    paginationData(state) {
      return state.pagination;
    },
  },
};
