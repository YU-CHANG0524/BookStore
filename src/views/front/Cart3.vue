<template lang="pug">
  main.cart.cart3
    section.c-banner
      .c-banner_bg.cart_banner-bg
      h3.c-banner_text 購物專區
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/cart3") 購物專區
        li.c-breadcrumb_item
          router-link(to="/cart3") 訂單確認
    section.cart_content.g-container
      .title-block
        h2.title-block_title
          | 訂單確認
        h3.title-block_subtitle ORDER CONFIRMED
      .step
        .step_item.finished
          span.number 1
          span.text 購物明細
        .step_item.finished
          span.number 2
          span.text 購買人與配送明細
        .step_item.active
          span.number 3
          span.text 訂單確認
        .step_item
          span.number 4
          span.text 完成購買
      .cart_list.mb-5
        .cart_list_header
          .block(style="width:45%") 產品內容
          .block(style="width:20%") 價格
          .block(style="width:20%") 數量
          .block(style="width:15%") 小記
        ul.cart_list_content
          li.cart_list_content_item(v-for="item in shopList")
            .productName(style="width:45%")
              .img
                img(:src="item.product.imageUrl[0]", alt="")
              .title {{ item.product.title}}
            .price(style="width:20%") {{ item.product.price }}
            .count(style="width:20%")
              p.border-0 {{item.quantity}}
            .dollars(style="width:15%") {{item.product.price * item.quantity}}
        .cart_list_body
          .d-flex.justify-content-between.mb-6
            .name
              p 購買小計
            .totalDollars.text-center(style="width:15%")
              em {{ total }}
              | 元
          .d-flex.justify-content-between
            .name
              p 優惠碼折抵
            .totalDollars.text-center(style="width:15%")
              em.text-success {{ Math.floor(total * (discount*0.01)) - total || 0 }}
              | 元
        .cart_list_footer
          .d-flex.justify-content-between
            .name
              p 購買總金額
            .totalDollars.text-center(style="width:15%")
              em {{Math.floor(total * ( 0.01 * discount || 1))}}
              |元
      .finallyCheck
        .section-title
          p 付款方式與訂單資訊
        ul.way-list
          li
            .name
              p 付款方式
            .msg
              p {{orderIfon.payment}}
          li
            .name
              p 購買人姓名
            .msg
              p {{orderIfon.name}}
          li
            .name
              p 購買人E-MAIL
            .msg
              p {{orderIfon.email}}
          li
            .name
              p 購買人電話
            .msg
              p {{orderIfon.tel}}
          li
            .name
              p 購買人地址
            .msg
              p {{orderIfon.address}}
          li
            .name
              p 備註
            .msg
              p {{orderIfon.message}}
      .btn-group
        .checkout-btn.mr-5.return
          a(href="#", @click.prevent="changeRouter('/cart2')") 上一步
        .checkout-btn.next
          a(href="#", @click.prevent="sendOrder()") 確認購買
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      orderIfon: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        coupon: '',
        message: '',
      },
      total: 0,
      discount: 0,
    };
  },
  methods: {
    getSessionLocal() {
      const vm = this;
      vm.orderIfon.name = sessionStorage.getItem('name');
      vm.orderIfon.email = sessionStorage.getItem('email');
      vm.orderIfon.tel = sessionStorage.getItem('tel');
      vm.orderIfon.address = sessionStorage.getItem('address');
      vm.orderIfon.payment = sessionStorage.getItem('payment');
      vm.orderIfon.coupon = sessionStorage.getItem('coupon');
      vm.orderIfon.message = sessionStorage.getItem('message');
      // 折扣
      vm.discount = sessionStorage.getItem('discount');
    },
    totalPrice(data) {
      const vm = this;
      data.forEach((item) => {
        vm.total += (item.product.price * item.quantity);
      });
    },
    sendOrder() {
      const vm = this;
      this.addOrder(vm.orderIfon);
    },
    ...mapActions('customer', ['getCart', 'addOrder']),
  },
  computed: {
    ...mapGetters('customer', ['shopList']),
  },
  watch: {
    shopList: {
      handler(val) {
        this.total = 0;
        this.totalPrice(val);
      },
      deep: true,
    },
  },
  created() {
    this.getCart();
    this.getSessionLocal();
  },
};
</script>
<style lang="sass" scoped>
.cart_list_header
  margin-bottom: 0
.cart_list_content
  padding-top: 2.5rem
  background: #fcfcfc
  li
    border: 0
    margin-bottom: 0
.cart_list_footer
  font-size: 22px
  font-weight: 800
  border-top: 1px solid #000
  padding: 2.5rem 0 2.5rem 55px
  background: #fcfcfc
  .totalDollars
    font-weight: normal
    em
      font-style: initial
      color: #f00
      font-weight: 900
      margin-right: 0.25rem
.cart_list_body
  font-size: 20px
  font-weight: 800
  border-top: 1px solid #000
  padding: 2.5rem 0 2.5rem 55px
  background: #fcfcfc
  .totalDollars
    font-weight: normal
    em
      font-style: initial
      color: #f00
      margin-right: 0.25rem
.cart_banner-bg
  background: #7799ed
.cart
  .way-list
    display: flex
    flex-wrap: wrap
    li
      border: 0
      width: 50%
      &:nth-child(3)
        background: #fcfcfc
      &:nth-child(4)
        background: #fcfcfc
    .name
      max-width: 150px
      margin-right: 3rem
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
