<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
    a.navbar-brand.mr-5(href='#') 後台管理
    #navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item(:class="{'active' : currentPage=='product'}",
                    @click="currentPage='product';openLoadingState()")
          router-link.nav-link(to='/admin/product') 產品管理
        li.nav-item(:class="{'active' : currentPage=='order'}",
                    @click="currentPage='order';openLoadingState()")
          router-link.nav-link(to='/admin/order') 訂單管理
        li.nav-item(:class="{'active' : currentPage=='coupon'}",
                    @click="currentPage='coupon';openLoadingState()")
          router-link.nav-link(to="/admin/coupon") 優惠券管理
        li.nav-item(:class="{'active' : currentPage=='storage'}",
                    @click="currentPage='storage';openLoadingState()")
          router-link.nav-link(to="/admin/storage") 上傳檔案管理

    .btn.btn-outline-light.my-2.my-sm-0(@click.prevent="logout") 登出
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      currentPage: 'product',
    };
  },
  methods: {
    ...mapActions(['logout', 'openLoadingState']),
  },
};
</script>
