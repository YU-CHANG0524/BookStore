<template lang="pug">
  .slick-container
    //- .slick_arrow-pre(ref='pre')
    //- .slick_arrow-next(ref='next')
    slick.slick_body(ref='slick',:options='slickOptions',)
      .item
        img.img-set(src="https://images.unsplash.com/photo-1456953180671-730de08edaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80")
      .item
        img.img-set(src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")
      .item
        img.img-set(src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")
      .item
        img.img-set(src="https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")

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
        nextArrow: '<div class="slick_arrow-pre"></div>',
        prevArrow: '<div class="slick_arrow-next"></div>',
        // nextArrow: $('.slick_arrow-next'),
        // prevArrow: $('.slick_arrow-pre'),
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
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
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

  .img-set
    transition: all .8s
    &:hover
      // transform: scale(1.1)
  .slick-slide
    overflow: hidden !important
  .slick_arrow
    width: 15vw
    height: 50px
    // border: 1px    solid #000
</style>
