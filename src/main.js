import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap';

import ScrollBar from '@morioh/v-smooth-scrollbar';

import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue';
import router from './router';
import store from './store';
// filter
import dataFormat from './filter/dataFormat';
import moneySign from './filter/moneySign';
// https://blog.csdn.net/dj0379/article/details/52883315 下方套件
// import 'default-passive-events';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.use(ScrollBar);

Vue.filter('dataFormat', dataFormat);
Vue.filter('moneySign', moneySign);

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  // 檢查是否要驗證
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/auth/check`;
    axios.post(api, store.state.token) // 調用vuex 的token
      .then((res) => {
        if (res.data.success) {
          // 成功就跳轉
          next();
        } else {
          // 其餘跳轉匯login頁
          next({
            path: '/',
          });
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  } else { // 如果沒有meta就直接放行
    next();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
});