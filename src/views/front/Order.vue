<template lang="pug">
  main.order
    section.c-banner
      .c-banner_bg.order_banner-bg
      h3.c-banner_text 顧客專區
    nav.c-breadcrumb
      ol.c-breadcrumb_wrap.g-container
        li.home
          router-link.material-icons(to="/") home
        li.c-breadcrumb_item
          router-link(to="/about") 顧客專區
        li.c-breadcrumb_item
          router-link(to="/about") 訂單查詢
    section.cart_content.g-container
      .title-block
        h2.title-block_title
          | 訂單查詢
        h3.title-block_subtitle ORDER TRACKING
      .order-table
        ul.thead
          li.th 訂購日期
          li.th 訂單編號
          li.th 訂單金額
          li.th 付款方式
          li.th 訂單狀態
          li.th 訂單細節
        ul.tbody
          li.tr(v-for="item in ordersList" :key="item.id")
            ul.tr-list
              li.td {{item.created.datetime}}
              li.td.ovh {{item.id}}
              li.td {{Math.floor(item.amount)}}
              li.td {{item.payment}}
              li.td
                p.text-danger(v-if="!item.paid") 未付款
                p.text-success(v-else) 已付款
              li.td
                a.btn.btn-primary(href="#", @click.prevent="orderDetail(item.id)")
                  span.icon-block(v-if="iconLoadingStatus")
                    i.fas.fa-spinner.fa-pulse
                  span(v-else) 詳情
        .order-total
          |共
          em {{ordersList.length}}
          |筆訂單
    #orderModal.orderModal.modal.fade(tabindex='-1',
                            role='dialog',
                            aria-labelledby='exampleModalLabel',
                            aria-hidden='true')
      .modal-dialog.modal-xl(role='document')
        .modal-content.ofs.border-0
          .modal-header.bg-dark.text-white
            h5#exampleModalLabel.modal-title
              span 訂單詳情
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body(v-if="orderDetailsTemplate.user")
            .row.px-5
              table.table.table-striped
                thead
                  tr
                    th(scope='col', width="20%") 名稱
                    th(scope='col', width="80%") 值
                tbody
                  tr
                    th(scope='row') 訂單編號
                    td {{orderDetailsTemplate.id }}
                  tr
                    th(scope='row') 訂單建立日期
                    td {{orderDetailsTemplate.created.datetime }}
                  tr
                    th(scope='row') 姓名
                    td {{orderDetailsTemplate.user.name }}
                  tr
                    th(scope='row') 訂購者E-MAIL
                    td {{orderDetailsTemplate.user.email }}
                  tr
                    th(scope='row') 電話
                    td {{orderDetailsTemplate.user.tel }}
                  tr
                    th(scope='row') 寄送地址
                    td {{orderDetailsTemplate.user.address }}
                  tr
                    th(scope='row') 付款方式
                    td {{orderDetailsTemplate.payment }}
                  tr
                    th(scope='row') 備註
                    td {{orderDetailsTemplate.message }}
                  tr
                    th(scope='row') 使用優惠券
                    td {{orderDetailsTemplate.coupon.title }}
                  tr
                    th(scope='row') 金額
                    td {{ Math.floor(orderDetailsTemplate.amount)|moneySign }}
                  tr
                    th(scope='row') 付款狀態
                    td
                      p.text-danger(v-if=" orderDetailsTemplate.paid === false") 未付款
                      p.text-success(v-else) 已付款
                  tr
                    th(scope='row') 購買產品
                    td
                      ul
                        li.d-flex.row.mb-2
                          h3.col-6 名稱
                          p.col-3 數量
                        li.d-flex.row.p-1(v-for="item in orderDetailsTemplate.products")
                          h3.col-6 {{item.product.title}}
                          p.col-3.text-primary {{item.quantity}}
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import $ from 'jquery';

export default {
  data() {
    return {
      orderDetailsTemplate: {},
    };
  },
  methods: {
    orderDetail(item) {
      this.ICON_STATUS(true);
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/ec/orders/${item}`;
      this.$http.get(api)
        .then((response) => {
          vm.orderDetailsTemplate = response.data.data;
          this.ICON_STATUS(false);
          $('#orderModal').modal('show');
          $('.modal-backdrop').css('position', 'initial');
        })
        .catch(() => {
        });
    },
    ...mapMutations(['ICON_STATUS']),
    ...mapActions('customer', ['getOrder']),
  },
  computed: {
    ...mapGetters(['iconLoadingStatus']),
    ...mapGetters('customer', ['ordersList']),
  },
  created() {
    this.getOrder();
  },
};
</script>
<style lang="sass" scoped>
  .order_banner-bg
    background: #eea18a
  .ovh
    overflow-x: hidden
</style>
