<template lang="pug">
  main.cart
    section.c-banner
      .c-banner_bg.cart_banner-bg
      h3.c-banner_text 購物專區
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/cart") 購物專區
        li.c-breadcrumb_item
          router-link(to="/cart") 購物明細
    section.cart_content.g-container
      .title-block
        h2.title-block_title
          | 購物明細
        h3.title-block_subtitle PURCHASED ITEMS
      .step
        .step_item.active
          span.number 1
          span.text 購物明細
        .step_item
          span.number 2
          span.text 購買人與配送明細
        .step_item
          span.number 3
          span.text 訂單確認
        .step_item
          span.number 4
          span.text 完成購買
      .cart_list
        .cart_list_header
          .block(style="width:45%") 產品內容
          .block(style="width:15%") 價格
          .block(style="width:15%") 數量
          .block(style="width:15%") 小記
        .cart-space.text-center(v-if="shopList.length == 0")
          p 目前購物車是空的
        ul.cart_list_content
          li.cart_list_content_item(v-for ="item in shopList" :key ="item.product.id")
            .productName(style="width:45%")
              .img
                img( :src="item.product.imageUrl[0]", alt="")
              .title {{ item.product.title }}
            .price(style="width:15%") {{ item.product.price }}
            .count(style="width:15%")
                a.material-icons(href="#", @click.prevent="addSingleCartCount(item.product.id, 'remove', item.quantity)") remove
                p {{ item.quantity}}
                a.material-icons(href="#", @click.prevent="addSingleCartCount(item.product.id, 'add', item.quantity)") add
            .dollars(style="width:15%") {{ item.product.price * item.quantity  }}
            .deleteProduct(style="width:10%")
              a(href="#", @click.prevent="daleteSing(item.product.id)") 刪除
        .checkout-btn.d-flex.justify-content-end.mb-5
          a(href="#", @click.prevent="resetCart()", v-show="shopList.length !== 0") 清空購物車
      .details-wrap( v-show="shopList.length !== 0" )
        .purchaseInfo
          .section-title
            p 請選擇優惠及付款方式
          ul.way-list
            li
              .name
                .img
                  img(src="../../assets/images/front/icon/discount.png")
                span 優惠碼
              .input
                input(type="text" v-model="coupon")
              .verify
                a(href="#", @click.prevent="useCoupons") 套用
              p(v-if="couponInfo").ml-5.text-danger 優惠 {{ couponInfo.percent }} 折
            li
              .name
                .img
                  img(src="../../assets/images/front/icon/pay.png")
                span 付款方式
              .input
                select(v-model="userPay")
                  option( value="" disabled) ------- 請選擇 -------
                  option( :value="item" v-for="item in payment") {{item}}
        .orderInfo
          .section-title
            p 訂單明細
          .total-info
            .text
              p 購買總金額
              span.totalPrice {{Math.floor(total * ((couponInfo.percent * 0.01) || 1) )}}
                span.text-dark 元
                span.text-success.ml-3.fz-14(v-if="couponInfo") (已折扣)
            .checkout-btn
              a(href="#", @click.prevent="goNext()") 前往結帳

</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      coupon: '',
      total: 0,
      userPay: '',
      payment: [
        'ATM',
        'Credit',
        'ApplePay',
        'GooglePay',
      ],
    };
  },
  methods: {
    daleteSing(id) {
      this.deleteSingleCart(id);
    },
    addSingleCartCount(id, action, count) {
      const data = {
        product: id,
        quantity: Number(count),
      };
      if (action === 'add') {
        data.quantity += 1;
        if (data.quantity > 20) {
          this.CART_MSG_ADD({ icon: 'error', title: '不可大於20' });
          data.quantity = 20;
        } else {
          this.updateCart(data);
        }
      } else if (action === 'remove') {
        data.quantity -= 1;
        if (data.quantity < 1) {
          this.CART_MSG_ADD({ icon: 'error', title: '不可小於1' });
          data.quantity = 1;
        } else {
          this.updateCart(data);
        }
      }
    },
    useCoupons() {
      const vm = this;
      const data = {
        code: vm.coupon,
      };
      this.searchCoupons(data);
    },
    totalPrice(data) {
      const vm = this;
      data.forEach((item) => {
        vm.total += (item.product.price * item.quantity);
      });
    },
    discountStorageSession() {
      const vm = this;
      sessionStorage.setItem('discount', vm.couponInfo.percent);
    },
    goNext() {
      const vm = this;
      if (vm.userPay) {
        sessionStorage.setItem('payment', vm.userPay);
        sessionStorage.setItem('coupon', vm.couponInfo.code || 'default');
        this.discountStorageSession();
        this.$router.push('/cart2');
      } else {
        this.CART_MSG_ADD({ icon: 'error', title: '請選擇付款方式' });
      }
    },
    ...mapActions('customer', ['getCart', 'resetCart', 'deleteSingleCart', 'updateCart', 'searchCoupons']),
    ...mapMutations('customer', ['CART_MSG_ADD']),
  },
  computed: {
    ...mapGetters('customer', ['shopList', 'couponInfo']),
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
  },
};
</script>
<style lang="sass">
  .cart_banner-bg
    background: #7799ed
</style>
