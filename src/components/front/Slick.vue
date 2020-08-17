<template lang="pug">
  .slick-container
    a.pre(href="#", @click.prevent="prev()")
      .slick-btn.arrow-pre()
    a.next(href="#", @click.prevent="next()")
      .slick-btn.arrow-next()
    slick.slick_body(ref='slick',:options='slickOptions',)
      .item
        img.img-set(src="https://images.unsplash.com/photo-1456953180671-730de08edaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80")
        .text
          h4.h4 咖啡廳裡の書屋，享受你的午後時光
      .item
        img.img-set(src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")
        .text
          h4.h4 文化大觀園，休閒心港灣。
      .item
        img.img-set(src="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80")
        .text
          h4.h4 雅緻的選擇，精彩的生活。
      .item
        img.img-set(src="https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")
        .text
          h4.h4 眾多種類，只有你想不到的，沒有你找不到的

</template>
<script>
// import $ from 'jquery';
import Slick from 'vue-slick';

export default {
  components: { Slick },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '15vw',
        focusOnSelect: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              centerPadding: '0',
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      // this.$nextTick(() => {
      //   this.$refs.slick.reSlick();
      // });
    },
    // handleAfterChange(event, slick, currentSlide) {
    //   console.log('handleAfterChange', event, slick, currentSlide);
    // },
    // handleBeforeChange(event, slick, currentSlide, nextSlide) {
    //   console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
    // },
    // handleBreakpoint(event, slick, breakpoint) {
    //   console.log('handleBreakpoint', event, slick, breakpoint);
    // },
    // handleDestroy(event, slick) {
    //   console.log('handleDestroy', event, slick);
    // },
    // handleEdge(event, slick, direction) {
    //   console.log('handleEdge', event, slick, direction);
    // },
    // handleInit(event, slick) {
    //   console.log('初始化', event, slick);
    // },
    // handleReInit(event, slick) {
    //   console.log('handleReInit', event, slick);
    // },
    // handleSetPosition(event, slick) {
    //   console.log('handleSetPosition', event, slick);
    //   $('.slick_arrow-pre').addClass('slick_arrow');
    // },
    // handleSwipe(event, slick, direction) {
    //   console.log('handleSwipe', event, slick, direction);
    // },
    // handleLazyLoaded(event, slick, image, imageSource) {
    //   console.log('handleLazyLoaded', event, slick, image, imageSource);
    // },
    // handleLazeLoadError(event, slick, image, imageSource) {
    //   console.log('handleLazeLoadError', event, slick, image, imageSource);
    // },
  },
};
</script>
<style lang="sass" scoped>
  @import '~slick-carousel/slick/slick.css';
  // @import '~slick-carousel/slick/slick-theme.css';
  .slick-container
    position: relative
    height: 460px
    @media only screen and (max-width: 767px)
      height: 350px
  .img-set
    transition: all .8s
    object-fit: cover;
    width: 100%
    height: 100%;
    &:hover
      transform: scale(1.1)
    &::after
      position: absolute
  .item
    overflow: hidden !important
    position: relative
    cursor: pointer
    height: 460px
    @media only screen and (max-width: 767px)
      height: 350px
    &::after
      position: absolute
      content: ''
      top: 0
      left: 0
      right: 0
      bottom: 0
      transition: all .5s
      background: rgba(0, 0, 0, 0.7)
      @media only screen and (max-width: 600px)
        background: rgba(0, 0, 0, 0)
  .text
    position: absolute
    top: 50%
    left: 50%
    padding: 2rem
    background: rgba(0, 0, 0, 0.5)
    border-radius: 4px
    transform: translate(-50%, -50%)
    color: #fff
    display: flex
    justify-content: center
    align-items: center
    @media only screen and (max-width: 767px)
      width: 60%
      padding: 1rem
      background: rgba(0, 0, 0, 0.7)
    .h4
      @media only screen and (max-width: 767px)
        font-size: 1rem
  .slick-current
    .item
      &::after
        background: transparent
  .slick-btn
    width: 56px
    height: 56px
    background: #fff
    border: 2px solid #00c4b8
    border-radius: 50%
    @media only screen and (max-width: 600px)
      display: none
    &::after
      content: ""
      position: absolute
      top: 50%
      margin-top: -8px;
      display: block
      border: 8px solid transparent
      border-left: 14px solid #00c4b8
      border-right: 0
      transition: all .3s
  .pre
    position: absolute
    top: calc( 50% - 28px)
    left: calc( 15vw - 28px)
    z-index: 1
    &:hover
      .arrow-pre
        &::after
          left: calc( 50% - 15px )
  .next
    position: absolute
    top: calc( 50% - 28px)
    right: calc( 15vw - 28px)
    z-index: 1
    &:hover
      .arrow-next
        &::after
          left: calc( 50% + 2px )
  .arrow-pre
    position: relative
    &::after
      left: calc( 50% - 9px)
      transform: rotate(180deg)
  .arrow-next
    position: relative
    &::after
      left: calc( 50% - 4px)
</style>
