import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
// 載入router 供跳轉頁面使用
import router from '../router';
// 其他store模組
import admin from './admin';
import customer from './customer';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false, // loading狀態
    iconLoading: false,
    alertMessage: {
      state: false,
      response: '',
      message: '',
    },
    token: {},
  },
  mutations: {
    LOADING(state, payload) { // 畫面loading
      state.isLoading = payload;
    },
    TOKEN_SAVE(state, payload) { // 存入token
      state.token.api_token = payload;
    },
    ICON_STATUS(state, payload) {
      state.iconLoading = payload;
    },
    ALERT_RESET(state) {
      const data = {
        state: false,
        response: '',
        message: '',
      };
      state.alertMessage = data;
    },
    ALERT_ADD(state, payload) {
      state.alertMessage.state = payload.state;
      state.alertMessage.response = payload.response;
      state.alertMessage.message = payload.message;
    },
  },
  actions: {
    openLoadingState(context) { // 啟動loading
      context.commit('LOADING', true);
    },
    login(context, payload) { // 登入
      const api = `${process.env.VUE_APP_API}/api/auth/login`;
      context.commit('LOADING', true); // 啟動loading畫面
      axios.post(api, payload)
        .then((response) => {
          const tokenId = response.data.token; // token
          const expiredTime = response.data.expired; // 有效時間
          document.cookie = `work =${tokenId}; expires= ${new Date(expiredTime * 1000)}; path=/`; // 存入cookie中

          router.push('/admin/product'); // 跳轉到admin
          context.commit('TOKEN_SAVE', tokenId);
        })
        .catch(() => {
          context.commit('LOADING', false);
        });
    },
    logout(context) {
      const api = `${process.env.VUE_APP_API}/api/auth/logout`;
      context.commit('LOADING', true); // 啟動loading畫面
      axios.post(api, context.state.token)
        .then(() => {
          router.push('/login');
          context.commit('LOADING', false);
        })
        .catch(() => {
          context.commit('LOADING', false);
        });
    },
  },
  getters: {
    iconLoadingStatus(state) {
      return state.iconLoading;
    },
  },
  modules: {
    admin,
    customer,
  },
});
