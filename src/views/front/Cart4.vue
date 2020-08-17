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
          router-link(to="/about") 完成購買
    section.cart_content.g-container
      .title-block
        h2.title-block_title
          | 完成購買
        h3.title-block_subtitle Complete the purchase
      .step
        .step_item.finished
          span.number 1
          span.text 購物明細
        .step_item.finished
          span.number 2
          span.text 購買人與配送明細
        .step_item.finished
          span.number 3
          span.text 訂單確認
        .step_item.active
          span.number 4
          span.text 完成購買
      .success-bg
        .checkout-btn.return
          a(href="#", @click.prevent="changeRouter('/productList')") 繼續逛逛

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

.success-bg
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  margin: 0 auto
  max-width: 1200px
  height: 400px
  background-image: url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
  background-position: center center
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
