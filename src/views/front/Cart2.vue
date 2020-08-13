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
              span 購買人姓名
            .input
              input(type="text")
          li
            .name
              span 聯絡E-MAIL
            .input
              input(type="email")
          li
            .name
              span 連絡電話
            .input
              input(type="text")
          li
            .name
              span 收件地址
            .input
              input(type="text")
      .orderInfo
        .section-title
          p 訂單備註
        textarea(type="text")
</template>
<script>

export default {

};
</script>
<style lang="sass">
  .cart_banner-bg
    background: #7799ed
</style>
