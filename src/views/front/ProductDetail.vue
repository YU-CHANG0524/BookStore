<template lang="pug">
  main.produtDetail(v-if="productDetail.origin_price")
    section.c-banner.produtDetail_banner-bg
      .c-banner_bg
      h3.c-banner_text 產品細節
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          a(href="#", @click.prevent="changeRouter('/productList')") 產品列表
        li.c-breadcrumb_item
          router-link(to="/about") {{productDetail.category}}
        li.c-breadcrumb_item
          router-link(to="/about") {{productDetail.title}}
    section.produtDetail_content
      .content_main
        .content_main_img
          img( :src="productDetail.imageUrl[0]", alt="")
        .content_main_information
          .title {{productDetail.title}}
          .price
            |定價
            del {{productDetail.origin_price}}
            |元，
            span.discount.t-red {{Math.floor((productDetail.price/productDetail.origin_price)*100)}}
            |折
            em.dollars.t-red {{productDetail.price}}
            | 元

          ul.book-info
            li
              span 作者：
              em {{productDetail.options.author}}
            li
              span 出版社：
              em(v-if="productDetail.options.press") {{productDetail.options.press}}
            li
              span 出版日：
              span {{productDetail.options.publication_date}}
              span {{productDetail.options.inventory}}
          .buy
            .top
              .stock
                | 庫存：
                span {{productDetail.options.inventory}}
              .addCount
                a.material-icons(href="#", @click.prevent="chageCount(-1)") remove
                input(type="text", v-model="purchase.quantity")
                a.material-icons(href="#", @click.prevent="chageCount(1)") add
            .bottom
              a(href="#", @click.prevent="addshopCart(productDetail.id)").addCart 加入購物車
              a(href="#", @click.prevent).goCart 立即購買
      .content_else
        .block
          h3.title 內容簡介
          .text
            p {{productDetail.content}}
        .block
          h3.title 內容介紹
          .text
            p {{productDetail.description}}
        .block
          h3.title 詳細資料
          ul.table
            li.table_row
              .th 編／譯者
              .td {{productDetail.options.translator}}
            li.table_row
              .th 語言
              .td {{productDetail.options.language}}
            li.table_row
              .th ISBN
              .td {{productDetail.options.isbn}}
            li.table_row
              .th 出版地
              .td {{productDetail.options.publisher_place}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      purchase: {
        product: '',
        quantity: 1,
      },
    };
  },
  methods: {
    getDetails() {
      this.getProductDetails(this.$route.params.id);
    },
    chageCount(value) {
      const vm = this;
      vm.purchase.quantity += value;
    },
    addshopCart(id) {
      const vm = this;
      const purchase = {
        product: id,
        quantity: vm.purchase.quantity,
      };
      this.addCart(purchase);
    },
    buyNow() {
      const vm = this;
      vm.addshopCart();
      vm.$route.push('/cart');
    },
    ...mapActions('customer', ['getProductDetails', 'addCart']),
  },
  computed: {
    ...mapGetters('customer', ['productDetail', 'alertInfo']),
  },
  watch: {
    purchase: {
      handler(val) {
        if (val.quantity < 1) {
          this.$swal('數量不可小於1');
          this.purchase.quantity = 1;
        } else if (val.quantity > 20) {
          this.$swal('數量不可大於20');
          this.purchase.quantity = 20;
        }
      },
      deep: true,
    },
    alertInfo: {
      handler(val) {
        this.$swal(val);
      },
    },
  },
  created() {
    this.getDetails();
  },
};
</script>
<style lang="sass">
  .produtDetail_banner-bg
    background: #8d70c7
</style>
