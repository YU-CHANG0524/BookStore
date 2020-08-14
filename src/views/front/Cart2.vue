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
          router-link(to="/about") 購買人與配送資訊
    section.cart_content.g-container
      .title-block
        h2.title-block_title
          | 購買人與配送資訊
        h3.title-block_subtitle CUSTOMER INFORMATION
      .step
        .step_item.finished
          span.number 1
          span.text 購物明細
        .step_item.active
          span.number 2
          span.text 購買人與配送明細
        .step_item
          span.number 3
          span.text 訂單確認
        .step_item
          span.number 4
          span.text 完成購買
      .purchaseInfo
        .section-title
          p 購買人與配送資訊
        ul.way-list
          li
            .name
              label(for="name") 購買人姓名
            .input
              input(type="text" ,id="name", required)
          li
            .name
              label(for="mail") 聯絡E-MAIL
            .input
              input(type="email", id="mail", required)
          li
            .name
              label(for="phone") 連絡電話
            .input
              input(type="tel", id="phone", required)
          li
            .name
              label(for="address") 收件地址
            .input
              input(type="text", id="address", required)
      .orderInfo
        .section-title
          p 訂單備註
        .textarea
          textarea(type="text", placeholder="為避免此欄位文字過長，導致無法完整顯示，請示時換行敘述。")
      .btn-group
        .checkout-btn.mr-5.return
          a(href="#", @click.prevent="changeRouter('/cart')") 返回購物車
        .checkout-btn.next
          a(href="#", @click.prevent="changeRouter('/cart3')") 下一步
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

.cart_banner-bg
  background: #7799ed
.cart
  .way-list
    li
      border: 0
    .name
      max-width: 160px
      margin-right: 3rem
    .input
      width: 30%
      input
        max-width: initial
        height: 60px
.textarea
  textarea
    padding: 1.25rem
    margin-top: 55px
    width: 100%
    min-height: 300px
    resize: none
    transition: all .3s
    border: 1px solid #cacaca
    &:focus
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08)
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
