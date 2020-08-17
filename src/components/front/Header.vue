<template lang="pug">
  header.header
    .g-container
      a(href="#", @click.prevent="changeRouter('/')")
        h1.header_logo
      nav.z1
        a(href="#" :class="{'active': rwdNav }", @click.prevent="rwdNav = !rwdNav").c_hamburger
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
            a.icon(href="#", @click.prevent="changeRouter('/productList')") 產品列表
          li.rwd-list_item
            a.icon(href="#", @click.prevent="changeRouter('/login')") 後台管理
          li.rwd-list_item
            a.icon(href="#", @click.prevent="changeRouter('/orderList')") 查詢訂單
          li.rwd-list_item
            a.icon(href="#", @click.prevent="changeRouter('/cart')") 購物車
          li.rwd-list_item
            a.icon(href="#", @click.prevent="changeRouter('/about')") 關於我們
          li.rwd-list_item
            a.icon.border-0(href="#", @click.prevent="changeRouter('/active')") 活動消息
      ul.header_nav_list
        li.dropdown
          a(href="#", @click.prevent) 關於我們
          ul.menu
            li.router-style
              a(href="#", @click.prevent="changeRouter('/about')") 關於書屋
        li.dropdown
          a(href="#", @click.prevent) 內容分類
          ul.menu
            li.router-style
              a(href="#", @click.prevent="changeRouter('/productList')") 財經企管
            li 電腦資訊
            li 自然科普
            li 旅遊相關
            li 醫療保健
            li 文學相關
        li.dropdown
          a(href="#", @click.prevent) 刊物種類
          ul.menu
            li 中文書
            li 英文書
            li 電子書
            li 雜誌
        li.dropdown
          a(href="#", @click.prevent) 活動消息
          ul.menu
            li.router-style
              a(href="#", @click.prevent="changeRouter('/active')") 最新活動

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      rwdNav: false,
    };
  },
  methods: {
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
