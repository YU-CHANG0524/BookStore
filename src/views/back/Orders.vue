<template lang="pug">
  main.adminOrder
    .container.mt-5.d-flex.flex-column.align-items-end
      h1.h1.mr-auto 訂單
      table.table.table-striped
        thead.thead-dark
          tr
            th.p-3(width="30px") #
            th.p-3.orderId 訂單編號
            th.p-3(width="100px") 價格
            th.p-3(width="120px") 付款方式
            th.p-3(width="100px") 付款狀態
            th.p-3(width="200px") 編輯
        tbody
          tr(v-for="(item, index) in ordersList")
            td.lh-25.p-3 {{ index + 1 }}
            td.lh-25.p-3 {{ item.id }}
            td.lh-25.p-3.text-danger {{ Math.floor(item.amount)|moneySign }}
            td.lh-25.p-3 {{ item.payment }}
            td.lh-25.d-flex.justify-content-center.align-items-center
              p.text-danger(v-if="!item.paid") 未付款
              p.text-success(v-else) 已付款
            td.lh-25.p-3
              a(href="#", @click.prevent="openModal('change', item)").py-2.btn.btn-info.mr-2 切換
              a(href="#", @click.prevent="openModal('detail', item.id)").py-2.btn.btn-warning.mr-2
                span.icon-block(v-if="iconLoadingStatus")
                  i.fas.fa-spinner.fa-pulse
                span(v-else) 詳情
      pagination( :total="paginationData.total_pages",
              :current="paginationData.current_page",
              @clickEvent="getOrderList")

    #orderModal.modal.fade(tabindex='-1',
                            role='dialog',
                            aria-labelledby='exampleModalLabel',
                            aria-hidden='true')
      .modal-dialog.modal-xl(role='document')
        .modal-content.border-0
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
    #changeModal.modal.fade(tabindex='-1', role='dialog',
                                aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content.border-0
          .modal-header.bg-danger.text-white
            h5#exampleModalLabel.modal-title
              span 切換付款狀態
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            | 是否將此筆訂單切換為
            strong.text-success(v-if="status.paid === false") 已付款
            strong.text-danger(v-else) 未付款
          .modal-footer
            button.btn.btn-outline-secondary(type='button', data-dismiss='modal')
              | 取消
            button.btn.btn-danger(type='button' @click="changePaid(status)")
              | 切換確認
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import $ from 'jquery';
import pagination from '../../components/common/Pagination.vue';

export default {
  data() {
    return {
      orderDetailsTemplate: {
      },
      status: {},
    };
  },
  components: {
    pagination,
  },
  methods: {
    openModal(action, item) {
      const vm = this;
      // console.log(item);
      switch (action) {
        case 'change':
          vm.status = item;
          $('#changeModal').modal('show');
          break;
        case 'detail':
          this.ICON_STATUS(true);
          this.getOrderDetails(item);
          break;
        default:
          break;
      }
    },
    getOrderList(page = 1) {
      this.getOrders(page);
    },
    getOrderDetails(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/orders/${id}`;
      this.$http.get(api)
        .then((response) => {
          vm.orderDetailsTemplate = response.data.data;
          this.ICON_STATUS(false);
          $('#orderModal').modal('show');
        })
        .catch(() => {
        });
    },
    changePaid(item) {
      const data = {
        id: item.id,
        status: item.paid,
      };
      this.updateOrders(data);
    },
    ...mapMutations(['ICON_STATUS']),
    ...mapActions('admin', ['getOrders', 'updateOrders']),
  },
  computed: {
    ...mapGetters(['iconLoadingStatus']),
    ...mapGetters('admin', ['ordersList', 'paginationData']),
  },
  created() {
    this.getOrders();
  },
};
</script>
<style lang="sass" scoped>
  .orderId
    width: 300px
</style>
