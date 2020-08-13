<template lang="pug">
  main.product
    section.c-banner
      .c-banner_bg.product_banner-bg
      h3.c-banner_text 所有產品
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/productDetail") 產品列表
    section.product_content
      .sidebar
        .sidebar_box
          h5.title 書籍種類

          .checkbox-group(v-for="item in bookFrom" :key="item.id")
            input(type="checkbox",
                  :id="item.id",
                  :name="item.title",
                  :value="item.title")
            label( :for='item.id') {{item.title}}
        .sidebar_box
          h5.title 內容分類

          //- .checkbox-group(v-for="item in bookFrom" :key="item.id")
          //-   input(type="checkbox",
          //-         :id="item.id",
          //-         :name="item.title",
          //-         :value="item.title")
          //-   label( :for='item.id') {{item.title}}
      ul.product_list
        li
          .item
            a.item_body(href="#", @click.prevent)
              .item_img
                img(src="https://www.ivy.com.tw/ivy_mall_backend/upload/N50390-56849B.png", alt="")
              .item_title 123
              .item_text sadasdasdasdasdadsdasd
              .price
                .discount
                  | 優惠
                  em 66
                  | 折,
                  em 3800
                  | 元
                .original
                  | 售價
                  em 800
                  | 元
            .item_footer
              a(href="#", @click.prevent).cartAdd 加入購物車

</template>

<script>
export default {
  data() {
    return {
      bookFrom: [
        {
          title: '全部',
          id: 'all',
        },
        {
          title: '中文書',
          id: 'chinese',
        },
        {
          title: '英文書',
          id: 'english',
        },
        {
          title: '電子書',
          id: 'ebook',
        },
        {
          title: '雜誌',
          id: 'magazine',
        },
      ],
    };
  },
};
</script>
<style lang="sass">
  .product_banner-bg
    background: #fec140
</style>
