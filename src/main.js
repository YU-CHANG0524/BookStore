import Vue from 'vue';
// 請求APi套件
import axios from 'axios';
import VueAxios from 'vue-axios';
// Bootstrap
import 'bootstrap';
// 前台彈跳視窗
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// 動畫套件
import AOS from 'aos';
import 'aos/dist/aos.css';
// 驗證套件 下方為規則
import {
  ValidationProvider, extend, configure, localize, ValidationObserver,
} from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
// 驗證語系
import zhTW from './zh_tw';
// Vue 主要
import App from './App.vue';
import router from './router';
import store from './store';
// filter
import dataFormat from './filter/dataFormat';
import moneySign from './filter/moneySign';
// https://blog.csdn.net/dj0379/article/details/52883315 下方套件
import 'default-passive-events';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

// 彈跳視窗樣式設定
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};
// 驗證設定
localize('tw', zhTW);
extend('email', email);

extend('space', {
  ...required,
  message: '此欄位不可為空',
});
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
    // ...
  },
});
Vue.component('ValidationObserver', ValidationObserver);
// 以上為驗證設定
Vue.use(VueSweetalert2, options);

Vue.filter('dataFormat', dataFormat);
Vue.filter('moneySign', moneySign);
// 註冊為全域函式
Vue.prototype.changeRouter = (path) => {
  if (path === '/cart') {
    store.commit('LOADING', true);
    router.push(path).catch(() => {});
  // eslint-disable-next-line no-constant-condition
  } else if (path === '/about' || '/active') {
    store.commit('LOADING', true);
    setTimeout(() => {
      router.push(path).catch(() => {});
      store.commit('LOADING', false);
    }, 1000);
  }
  // router.push(path).catch(() => {});
};
// 驗證的元件
Vue.component('ValidationProvider', ValidationProvider);

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
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  }
});
