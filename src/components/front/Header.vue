<template lang="pug">
  header.header
    .g-container
      a(href="#", @click.prevent="changeRouter('/')")
        h1.header_logo
      nav.z1
        a(href="#" :class="{'active': rwdNav }", @click.prevent="tabNavhamburger()").c_hamburger
          .line-box
            .line
            .line
            .line
        ul.header_user
          li.header_user_item
            a.icon(href="#", @click.prevent="changeRouter('/login')")
              .circle
                span.material-icons login
              | 後台
          li.header_user_item
            a.icon(href="#", @click.prevent="changeRouter('/orderList')")
              .circle
                  span.material-icons list_alt
              | 訂單
          li.header_user_item
            a.icon(href="#", @click.prevent="changeRouter('/cart')")
              .circle
                span.material-icons add_shopping_cart
                span.count(v-if="cartSum !== 0") {{ cartSum }}
              | 購物車
    nav.header_nav(:class="{'active': rwdNav }")
      .header_nav_rwd
        ul.rwd-list
          li.rwd-list_item
            a.icon(href="#", @click.prevent="changeRouter('/productList'); tabNavhamburger(); ") 產品列表
          li.rwd-list_item
            a.icon(href="#", @click.prevent="changeRouter('/login'); tabNavhamburger(); ") 後台管理
          li.rwd-list_item
            a.icon(href="#", @click.prevent="changeRouter('/orderList'); tabNavhamburger(); ") 查詢訂單
          li.rwd-list_item
            a.icon(href="#", @click.prevent="changeRouter('/cart'); tabNavhamburger(); ") 購物車
          li.rwd-list_item
            a.icon(href="#", @click.prevent="changeRouter('/about'); tabNavhamburger(); ") 關於我們
          li.rwd-list_item
            a.icon.border-0(href="#", @click.prevent="changeRouter('/active'); tabNavhamburger(); ") 活動消息
      ul.header_nav_list
        li.dropdown
          a(href="#", @click.prevent) 關於我們
          ul.menu
            li.router-style
              a(href="#", @click.prevent="changeRouter('/about')") 關於書屋
        li.dropdown
          a(href="#", @click.prevent) 產品分類
          ul.menu
            li.router-style
              a(href="#", @click.prevent="changeRouter('/productList'); setFilterKey('全部');") 全部
            li.router-style
              a(href="#", @click.prevent="changeRouter('/productList'); setFilterKey('中文書');") 中文書
            li.router-style
              a(href="#", @click.prevent="changeRouter('/productList'); setFilterKey('英文書');") 英文書
            li.router-style
              a(href="#", @click.prevent="changeRouter('/productList'); setFilterKey('電子書');") 電子書
            li.router-style
              a(href="#", @click.prevent="changeRouter('/productList'); setFilterKey('雜誌');") 雜誌
        li.dropdown
          a(href="#", @click.prevent) 好站分享
          ul.menu
            li.router-style
              a(href="https://www.youtube.com/channel/UCEL8871qFEakpqYpwBSjHNA", target="_blank") Alex 宅幹嘛
            li.router-style
              a(href="https://gooaye.com/", target="_blank") 股癌
            li.router-style
              a(href="https://www.youtube.com/c/%E7%99%BE%E9%9D%88%E6%9E%9CNews/featured", target="_blank") 百靈果
        li.dropdown
          a(href="#", @click.prevent) 活動消息
          ul.menu
            li.router-style
              a(href="#", @click.prevent="changeRouter('/active')") 最新活動

</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      rwdNav: false,
    };
  },
  methods: {
    tabNavhamburger() {
      const vm = this;
      vm.rwdNav = !vm.rwdNav;
    },
    setFilterKey(key) {
      sessionStorage.setItem('filterProdut', key);
      sessionStorage.setItem('filterContent', '全部');
    },
    ...mapMutations('customer', ['CART_MSG_ADD']),
    ...mapActions('customer', ['getCart']),
  },
  computed: {
    ...mapGetters('customer', ['cartSum']),
  },
  created() {
    this.getCart();
  },
};
</script>
<style lang="sass">

</style>
