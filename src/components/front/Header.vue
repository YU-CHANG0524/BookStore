<template lang="pug">
  header.header
    .g-container
      a(href="#", @click.prevent="changeRouter('/')")
        h1.header_logo
      nav.z1
        a(href="#", @click.prevent).c_hamburger
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
                span.count 0
              | 購物車
    nav.header_nav
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
// import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {

  },
};
</script>
<style lang="sass">

</style>
