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
          router-link(to="/about") 訂單確認
    section.cart_content.g-container
      .title-block
        h2.title-block_title
          | 訂單確認
        h3.title-block_subtitle ORDER CONFIRMED
      .step
        .step_item.finished
          span.number 1
          span.text 購物明細
        .step_item.finished
          span.number 2
          span.text 購買人與配送明細
        .step_item.active
          span.number 3
          span.text 訂單確認
        .step_item
          span.number 4
          span.text 完成購買
      .cart_list.mb-5
        .cart_list_header
          .block(style="width:45%") 產品內容
          .block(style="width:20%") 價格
          .block(style="width:20%") 數量
          .block(style="width:15%") 小記
        ul.cart_list_content
          li.cart_list_content_item
            .productName(style="width:45%")
              .img
                img(src="https://www.ivy.com.tw/ivy_mall_backend/upload/ER01.png", alt="")
              .title Reading Comprehension Practice 1 (高效能閱讀練習1)
            .price(style="width:20%") 123元
            .count(style="width:20%")
              p 1
            .dollars(style="width:15%") 456元
        .cart_list_body
          .d-flex.justify-content-between.mb-6
            .name
              p 購買小計
            .totalDollars.text-center(style="width:15%")
              em 200
              | 元
          .d-flex.justify-content-between
            .name
              p 優惠碼折抵
            .totalDollars.text-center(style="width:15%")
              em.text-dark -50
              | 元
        .cart_list_footer
          .d-flex.justify-content-between
            .name
              p 購買總金額
            .totalDollars.text-center(style="width:15%")
              em 200
              |元
      .finallyCheck
        .section-title
          p 付款方式與訂單資訊
        ul.way-list
          li
            .name
              p 付款方式
            .msg
              p 超商取貨付款
          li
            .name
              p 購買人姓名
            .msg
              p 張張
          li
            .name
              p 購買人E-MAIL
            .msg
              p asdasdas@gmail.com
          li
            .name
              p 購買人電話
            .msg
              p 09126548943
          li
            .name
              p 購買人地址
            .msg
              p 彰化縣和美鎮XXX路
      .btn-group
        .checkout-btn.mr-5.return
          a(href="#", @click.prevent="changeRouter('/cart2')") 上一步
        .checkout-btn.next
          a(href="#", @click.prevent="changeRouter('/cart4')") 確認購買
</template>
<script>

export default {
  data() {
    return {

    };
  },
};
</script>
<style lang="sass" scoped>
.cart_list_header
  margin-bottom: 0
.cart_list_content
  padding-top: 2.5rem
  background: #fcfcfc
  li
    border: 0
    margin-bottom: 0
.cart_list_footer
  font-size: 22px
  font-weight: 800
  border-top: 1px solid #000
  padding: 2.5rem 0 2.5rem 55px
  background: #fcfcfc
  .totalDollars
    font-weight: normal
    em
      font-style: initial
      color: #f00
      font-weight: 900
      margin-right: 0.25rem
.cart_list_body
  font-size: 20px
  font-weight: 800
  border-top: 1px solid #000
  padding: 2.5rem 0 2.5rem 55px
  background: #fcfcfc
  .totalDollars
    font-weight: normal
    em
      font-style: initial
      color: #f00
      margin-right: 0.25rem
.cart_banner-bg
  background: #7799ed
.cart
  .way-list
    display: flex
    flex-wrap: wrap
    li
      border: 0
      width: 50%
      &:nth-child(3)
        background: #fcfcfc
      &:nth-child(4)
        background: #fcfcfc
    .name
      max-width: 150px
      margin-right: 3rem
.btn-group
  margin-top: 1rem
  display: flex
  justify-content: flex-end
  .return
    a
      background: #3cb696
      &:hover
        background: #2c856f
</style>
