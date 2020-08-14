<template lang="pug">
  main.order
    section.c-banner
      .c-banner_bg.order_banner-bg
      h3.c-banner_text 顧客專區
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/about") 顧客專區
        li.c-breadcrumb_item
          router-link(to="/about") 訂單查詢
    section.cart_content.g-container
      .title-block
        h2.title-block_title
          | 訂單查詢
        h3.title-block_subtitle ORDER TRACKING
      .order-table
        ul.thead
          li.th 訂購日期
          li.th 訂單編號
          li.th 訂單金額
          li.th 付款方式
          li.th 訂單狀態
        ul.tbody
          li.tr
            ul.tr-list
              li.td 2019/10/19
              li.td 123132132
              li.td 800
              li.td 21313212
              li.td OKOKO
        .order-total
          |共
          em 0
          |筆訂單
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

.order_banner-bg
  background: #eea18a

</style>
