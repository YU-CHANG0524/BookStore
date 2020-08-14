<template lang="pug">
  main.cart
    section.c-banner
      .c-banner_bg.cart_banner-bg
      h3.c-banner_text 購物專區
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/about") 購物專區
        li.c-breadcrumb_item
          router-link(to="/about") 購物明細
    section.cart_content.g-container
      .title-block
        h2.title-block_title
          | 購物明細
        h3.title-block_subtitle PURCHASED ITEMS
      .step
        .step_item.active
          span.number 1
          span.text 購物明細
        .step_item
          span.number 2
          span.text 購買人與配送明細
        .step_item
          span.number 3
          span.text 訂單確認
        .step_item
          span.number 4
          span.text 完成購買
      .cart_list
        .cart_list_header
          .block(style="width:45%") 產品內容
          .block(style="width:15%") 價格
          .block(style="width:15%") 數量
          .block(style="width:15%") 小記
        ul.cart_list_content
          li.cart_list_content_item
            .productName(style="width:45%")
              .img
                img(src="https://www.ivy.com.tw/ivy_mall_backend/upload/ER01.png", alt="")
              .title Reading Comprehension Practice 1 (高效能閱讀練習1)
            .price(style="width:15%") 123元
            .count(style="width:15%")
                a.material-icons(href="#", @click.prevent) remove
                input(type="text", value="1")
                a.material-icons(href="#", @click.prevent) add
            .dollars(style="width:15%") 456元
            .deleteProduct(style="width:10%")
              a(href="#", @click.prevent) 刪除
      .purchaseInfo
        .section-title
          p 請選擇優惠及付款方式
        ul.way-list
          li
            .name
              .img
                img(src="../../assets/images/front/icon/discount.png")
              span 優惠碼
            .input
              input(type="text")
            .verify
              a(href="#", @click.prevent) 套用
          li
            .name
              .img
                img(src="../../assets/images/front/icon/pay.png")
              span 付款方式
            .input
              select
                option(value="" ) ------- 請選擇 -------
                option(value="" ) 1
                option(value="" ) 2
      .orderInfo
        .section-title
          p 訂單明細
        .total-info
          .text
            p 購買總金額
            span.totalPrice 198
              span.text-dark 元
          .checkout-btn
            a(href="#", @click.prevent="changeRouter('/cart2')") 前往結帳

</template>
<script>

export default {
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>
<style lang="sass">
  .cart_banner-bg
    background: #7799ed
</style>
