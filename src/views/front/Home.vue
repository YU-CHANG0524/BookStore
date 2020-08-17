<template lang="pug">
  main.home
    section.home-banner
      slick
    section.home-category
      .g-container
        .title-block
          h2.title-block_title
            |想找書，先來
            span.text-info 書屋
            |看看吧
          h3.title-block_subtitle Find a book to BookStore
      .g-container
        ul.category_warp
          li.item
            p.item_text 了解更多財經知識
            .item_img
              img(src="../../assets/images/front/home/financial.svg", alt="")
            .item_body
              h4.item_title 財經企管
              h4.item_subtitle Financial Enterprise Management
          li.item
            p.item_text 想學電腦相關技能嗎?
            .item_img
              img(src="../../assets/images/front/home/computer.svg", alt="")
            .item_body
              h4.item_title 電腦資訊
              h4.item_subtitle Computer Information
          li.item
            p.item_text 探索大自然的奧秘
            .item_img
              img(src="../../assets/images/front/home/natural.svg", alt="")
            .item_body
              h4.item_title 自然科普
              h4.item_subtitle Natural Science
          li.item
            p.item_text 生活煩悶嗎? 該出去走走放鬆了
            .item_img
              img(src="../../assets/images/front/home/travel.svg", alt="")
            .item_body
              h4.item_title 旅遊相關
              h4.item_subtitle Travel Related
          li.item
            p.item_text 讓你生活得更健康
            .item_img
              img(src="../../assets/images/front/home/medical.svg", alt="")
            .item_body
              h4.item_title 醫療保健
              h4.item_subtitle Medical Health
          li.item
            p.item_text 接受文學的薰陶
            .item_img
              img(src="../../assets/images/front/home/literature.svg", alt="")
            .item_body
              h4.item_title 文學相關
              h4.item_subtitle Literature Related
    section.home-vehicle
      .bg-box
        .bg-item(style="background-image: url('https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')"
                  :class="{'active': bgNumber == 'bg1'}" )
        .bg-item(style="background-image: url('https://images.unsplash.com/photo-1456953180671-730de08edaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')"
                  :class="{'active': bgNumber == 'bg2'}" )
        .bg-item(style="background-image: url('https://images.unsplash.com/photo-1516179257071-71a54dbb4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')"
                  :class="{'active': bgNumber == 'bg3'}" )

      .vehicle_wrap
        .item( @mouseover="tabBackground('bg1')")
          h4.item_subtitle 任何語言應有盡有
          h3.item_title 想要閱讀外文刊物嗎?
          a.item_button(href="#") more
        .item( @mouseover="tabBackground('bg2')")
          h4.item_subtitle 電子書好方便
          h3.item_title 有使用電子閱讀器的習慣嗎?
          a.item_button(href="#") more
        .item( @mouseover="tabBackground('bg3')")
          h4.item_subtitle 各種雜誌任你挑
          h3.item_title 喜歡看任何期刊雜誌嗎?
          a.item_button(href="#") more
    section.home-recommend
      .g-container
        .title-block
          h2.title-block_title
            |書屋
            span.text-info 老闆
            |推薦
          h3.title-block_subtitle Find a book to BookStore
      .g-container
        .rwd-recommend-nav
          select
            option(value="") 投資必備
            option(value="") 成為工程師
            option(value="") 學習第二外語
            option(value="") 了解世界情勢
            option(value="") 生活必備知識
        nav.recommend-nav
          ul.nav-list
            li.nav-list_item
              a.text-block(href="#", title="title")
                span.icon-box
                  i.material-icons attach_money
                span.text 投資必備
            li.nav-list_item
              a.text-block(href="#", title="title")
                span.icon-box
                  i.material-icons android
                span.text 成為工程師
            li.nav-list_item
              a.text-block(href="#", title="title")
                span.icon-box
                  i.material-icons g_translate
                span.text 學習第二外語
            li.nav-list_item
              a.text-block(href="#", title="title")
                span.icon-box
                  i.material-icons language
                span.text 了解世界情勢
            li.nav-list_item
              a.text-block(href="#", title="title")
                span.icon-box
                  i.material-icons emoji_objects
                span.text 生活必備知識
        .recommend-container
          ul.recommend-list
            li.item
              span.item_mark 1
              .item_img
                img(src="https://www.ivy.com.tw/ivy_mall_backend/upload/TCJK-P-S.png", alt="")
              .item_body
                h4.item_title 康健雜誌8月2020第261期
                p.item_text
                  |小病不治恐會致命！
                  |長期忽略症狀，胃食道逆流也會致癌
                  |胃食道逆流不算大病，早期發現甚至可以透過改變飲食及生活習慣來緩解症狀。
                  |但若長期忽略不理，也可能變成致命的食道癌！
                  |透過本期「健康小測驗：你是哪一型胃食道逆流？」，及早發現你的胃好不好。
                  |哪些NG食物不該吃、NG習慣不該做？專家公認的護胃食物有哪些？
                  |出現哪些症狀該就醫？如何在癌病變前提早發覺？
              .item_footer
                p.price
                  | 優惠
                  em 75
                  | 折，
                  em 1200
                  | 元

</template>

<script>
import slick from '../../components/front/Slick.vue';

export default {
  components: { slick },
  data() {
    return {
      bgNumber: 'bg1',
    };
  },
  methods: {
    tabBackground(num) {
      const vm = this;
      vm.bgNumber = num;
    },
  },
  mounted() {
  },
  created() {

  },
};
</script>
<style lang="sass">

</style>
