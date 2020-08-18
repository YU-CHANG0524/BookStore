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
            |為什麼選擇書屋
          h3.title-block_subtitle Why choose bookstore
      .g-container
        .recommend_wrap
          .item
            .item_title
              h4 書目種類超過
            .item_img
              i.fas.fa-book
            .item_text
              span 100w
              p 種以上
          .item
            .item_title
              h4 購書會員超過
            .item_img
              i.fas.fa-users
            .item_text
              span 300,000
              p 人以上
          .item
            .item_title
              h4 建立至今已超過
            .item_img
              i.fas.fa-hands-helping
            .item_text
              span 20
              p 年以上
    section.home-elseLink

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
