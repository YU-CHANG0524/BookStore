<template lang="pug">
  main.about
    section.c-banner
      .c-banner_bg.about_banner-bg
      h3.c-banner_text 關於
        em 書屋
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/about") 關於我們
        li.c-breadcrumb_item
          router-link(to="/about") 關於書屋
    section.about_description
      .title-block
        h2.title-block_title
          |企業理念
        h3.title-block_subtitle Corporate philosophy
      img.description-img(src="../../assets/images/front/logo/logo.png")
      .description-text
        p
          | 書屋創立於1995年，發展迄今全台北中南共8家門市並積極發展網路事業通路，
          | 一路秉持創案人推廣文化、勉人學習的精神，本公司與社會並進成長， 穩紮穩打，
          | 提倡高貴不貴、平價價值的圖書通路，竭誠服務致力成為大家日常生活中不可或缺的碁石。
        p
          | 取名為書屋，發想於書中自有黃金屋這句諺語，書中通往了各種知識的鑰匙，豐富了人們的生活。
    section.about_history
      .title-block
        h2.title-block_title
          | 企業沿革
        h3.title-block_subtitle Corporate History
      .timeline
        .timeline_year.mt-6 1995年
        .timeline_item
          .timeline_time 三月
          .timeline_point
          .timeline_content
            h4 員林生活館
            p 前生為書店，94年改為生活館
        .timeline_item
          .timeline_time 九月
          .timeline_point
          .timeline_content
            h4 彰化店
            p 彰化永樂商圈
        .timeline_year.mt-6 1998年
        .timeline_item.timeline_itme-right
          .timeline_time 十月
          .timeline_point
          .timeline_content
            h4 高雄店
            p 設立南部第一家分店
        .timeline_year.mt-6 2000年
        .timeline_item
          .timeline_time 六月
          .timeline_point
          .timeline_content
            h4 中山店
            p 台北市第一家分店
        .timeline_item
          .timeline_time 六月
          .timeline_point
          .timeline_content
            h4 台北旗艦店
            p 台北火車站旁，占地900坪
        .timeline_year.mt-6 2005年
        .timeline_item.timeline_itme-right
          .timeline_time 八月
          .timeline_point
          .timeline_content
            h4 台中旗艦店
            p 以一中街商圈做為中部據點，占地900坪
        .timeline_year.mt-6 2009年
        .timeline_item
          .timeline_time 五月
          .timeline_point
          .timeline_content
            h4 士林店
        .timeline_year.mt-6 2015年
        .timeline_item.timeline_itme-right
          .timeline_time 十一月
          .timeline_point
          .timeline_content
            h4 桃園生活館
        .timeline_end

</template>

<script>
export default {

};
</script>
<style lang="sass">
  .about_banner-bg
    background-color: #71b6d9
</style>
