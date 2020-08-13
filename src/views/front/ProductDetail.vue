<template lang="pug">
  main.produtDetail
    section.c-banner.produtDetail_banner-bg
      .c-banner_bg
      h3.c-banner_text 產品細節
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/about") 產品列表
        li.c-breadcrumb_item
          router-link(to="/about") 書名
    section.produtDetail_content
      .content_main
        .content_main_img
          img(src="https://www.ivy.com.tw/ivy_mall_backend/upload/N50390-56849B.png", alt="")
        .content_main_information
          .title 電商人妻社群圈粉思維：單月從0到萬，讓流量變現的品牌爆紅經營心法
          .price
            |定價
            del 123
            |元，
            span.discount.t-red 79
            |折
            em.dollars.t-red 300
            | 元

          ul.book-info
            li
              span 作者：
              em 哈哈哈哈
            li
              span 出版社：
              em 囉囉囉
            li
              span 出版日：
              span 2020/08/12
          .buy
            .top
              .stock
                | 庫存：
                span 10
              .addCount
                a.material-icons(href="#", @click.prevent) remove
                input(type="text", value="1")
                a.material-icons(href="#", @click.prevent) add
            .bottom
              a(href="#", @click.prevent).addCart 加入購物車
              a(href="#", @click.prevent).goCart 立即購買
      .content_else
        .block
          h3.title 內容簡介
          .text
            p lorem ipsum dolor sit amet, consectet
        .block
          h3.title 內容介紹
          .text
            p lorem ipsum dolor sit amet, consectet
        .block
          h3.title 詳細資料
          ul.table
            li.table_row
              .th 編／譯者
              .td adsdad
            li.table_row
              .th 語言
              .td 中文繁體
            li.table_row
              .th ISBN
              .td 9789869874175
            li.table_row
              .th 出版地
              .td 台灣
</template>

<script>
export default {

};
</script>
<style lang="sass">
  .produtDetail_banner-bg
    background: #8d70c7
</style>
