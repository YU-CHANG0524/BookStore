<template lang="pug">
  main.product
    section.c-banner
      .c-banner_bg.product_banner-bg
      h3.c-banner_text 所有產品
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/productDetail") 產品列表
    section.product_content
      .sidebar
        .sidebar_box
          h5.title 書籍種類

          .checkbox-group(v-for="item in bookFrom" :key="item.id")
            input(type="checkbox",
                  :id="item.id",
                  :name="item.title",
                  :value="item.title")
            label( :for='item.id') {{item.title}}
        .sidebar_box
          h5.title 內容分類

          //- .checkbox-group(v-for="item in bookFrom" :key="item.id")
          //-   input(type="checkbox",
          //-         :id="item.id",
          //-         :name="item.title",
          //-         :value="item.title")
          //-   label( :for='item.id') {{item.title}}
      ul.product_list
        li(v-for="item in productList" :key="item.id")
          .item
            a.item_body(href="#", @click.prevent="productDetails(item.id)")
              .item_img
                img( :src="item.imageUrl[0]")
              .item_title {{ item.title }}
              .item_text {{ item.content }}
              .price
                .discount(v-if="item.price !== item.origin_price")
                  | 優惠
                  em {{ Math.floor((item.price/item.origin_price)*100) }}
                  | 折,
                  em {{item.price}}
                  | 元
                .original(v-else)
                  | 售價
                  em {{item.price}}
                  | 元
            .item_footer
              a(href="#", @click.prevent="addshopCart(item.id)").cartAdd 加入購物車

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      bookFrom: [
        {
          title: '全部',
          id: 'all',
        },
        {
          title: '中文書',
          id: 'chinese',
        },
        {
          title: '英文書',
          id: 'english',
        },
        {
          title: '電子書',
          id: 'ebook',
        },
        {
          title: '雜誌',
          id: 'magazine',
        },
      ],
    };
  },
  methods: {
    productDetails(id) {
      this.$router.push(`/productList/${id}`);
    },
    addshopCart(id) {
      const purchase = {
        product: id,
        quantity: 1,
      };
      this.addCart(purchase);
    },
    ...mapActions('customer', ['getProducts', 'addCart']),
  },
  computed: {
    ...mapGetters('customer', ['productList']),
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="sass">
  .product_banner-bg
    background: #fec140
</style>
