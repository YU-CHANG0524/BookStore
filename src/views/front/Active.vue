<template lang="pug">
  main.active
    section.c-banner
      .c-banner_bg.active_banner-bg
      h3.c-banner_text 最新
        em 活動
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/about") 活動消息
        li.c-breadcrumb_item
          router-link(to="/about") 最新活動
    section.active_content
      ul.active_list
        li.item(v-for="item in active", :key="item.code")
          .item_img
            img( :src="item.image" )
          .item_body
            h3.item_title {{item.title}}
            p.code 折扣碼
              em {{item.code}}
            h6.time {{item.time}}

</template>

<script>
export default {
  data() {
    return {
      active: [
        {
          title: '股癌聽眾加碼折扣',
          time: '2020/08/03 12:00 ~ 2022/08/02 12:00',
          image: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/7QVPcFPZ9IaCOvMl3OxnobazZm8xKsiMafOwj1DlkeUnef1ZszOU0XFcEasLXIEDpQoimvphZ1tl7bhjcNn9XRHOGsoVo5OzjrG4g5nmbMR0xuDpxuTfNOlEgpTCjdz3.png',
          code: 'gooaye',
        },
        {
          title: '臺通聽眾加碼折扣',
          time: '2020/08/03 12:00 ~ 2022/10/01 12:00',
          image: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/OYyzKo6zt7gGuPM6968eG1RpZNQNWX8jslRkxJXP2UWOLMV77xXwsT5md2QuPJXtwom7EOJ2LEQ2EN7mhjhSMjCXxwFhyPuvhqTBkiiNAqpKcJsHuHKL7DvgWKVGiLbQ.png',
          code: 'wdlia',
        },
      ],
    };
  },
};
</script>
<style lang="sass">
  .active_banner-bg
    background: #f4b88d
</style>
