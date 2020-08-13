<template lang="pug">
  main.adminCoupon
    .container.mt-5.d-flex.flex-column.align-items-end
      .d-flex.justify-content-between.w-100
        h1.h1 優惠券
        button(type="button", @click="openModal('add')").mb-3.btn.btn-primary 建立優惠券
      table.table.table-striped.mb-6
        thead.thead-dark
          tr
            th.p-3(width="300px") 名稱
            th.p-3(width="300px") 優惠碼
            th.p-3 有效期限
            th.p-3(width="120px") 是否啟用
            th.p-3(width="150px") 編輯
        tbody
          tr(v-for="(item, index) in couponsList", :key="item.id")
            td.lh-25.p-3 {{ item.title }}
            td.lh-25.p-3 {{ item.code }}
            td.lh-25.p-3 {{ item.deadline.timestamp|dataFormat }}
            td.lh-25.d-flex.justify-content-center.align-items-center
              .c-circle(:class="{active: item.enabled}")
            td.lh-25.p-3
              a(href="#", @click.prevent="openModal('edit', item)").py-2.btn.btn-info.mr-2 編輯
              a(href="#", @click.prevent="openModal('delete', item)").py-2.btn.btn-danger 刪除
      pagination( :total="paginationData.total_pages",
                  :current="paginationData.current_page",
                  @clickEvent="getCouponList" )
    #couponModal.modal.fade(tabindex='-1',
                        role='dialog',
                        aria-labelledby='exampleModalLabel',
                        aria-hidden='true')
      .modal-dialog.modal-lg(role='document')
        .modal-content.border-0
          .modal-header.bg-dark.text-white
            h5#exampleModalLabel.modal-title
              span 新增優惠券
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            .row
              .col-sm-12
                .form-group
                  label(for='title') 標題
                  input#title.form-control(type='text',
                                          placeholder='請輸入標題',
                                          v-model="couponTemplate.title")
                .form-row
                  .form-group.col-md-4
                    label(for='category') 優惠碼
                    input#category.form-control(type='text',
                                                placeholder='請輸入優惠碼',
                                                v-model="couponTemplate.code" )
                  .form-group.col-md-4
                    label(for='price') 優惠折數 (單位%)
                    input#unit.form-control(type='number',
                                            placeholder='請輸入折扣',
                                            v-model="couponTemplate.percent")
                  .form-group.col-md-4
                    label(for='origin_price') 截止日期
                    input#origin_price.form-control(type='text',
                                                    placeholder='yyyy-mm-dd hh:mm:ss',
                                                    v-model="couponTemplate.deadline.datetime")
                .form-group.d-flex.flex-column.col-md-3
                  label(for='is_enabled') 是否啟用
                  .c-toggleButton
                    input#is_enabled.form-check-input( type='checkbox',
                                                      v-model="couponTemplate.enabled",
                                                      :true-value="true", :false-value="false")
                    span.slider.round
          .modal-footer
            button.btn.btn-outline-secondary.py-2(type='button', data-dismiss='modal') 取消
            button.btn.btn-primary.py-2(type='button', @click="updateDate") 確認
    #coupondeleteModal.modal.fade(tabindex='-1',
                          role='dialog',
                          aria-labelledby='exampleModalLabel',
                          aria-hidden='true')
      .modal-dialog
        .modal-content
          .modal-header.bg-danger.text-white
            h5#exampleModalLabel.modal-title
              span 刪除優惠券
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            | 是否刪除
            strong.mx-2.text-danger {{ couponTemplate.title }}
            | 優惠券(刪除後將無法恢復)。
          .modal-footer
            button.btn.btn-outline-secondary.py-2(type='button', data-dismiss='modal') 取消
            button.btn.btn-danger.py-2(type='button', @click="deleteData") 確認刪除
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import $ from 'jquery';
import pagination from '../../components/common/Pagination.vue';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      couponTemplate: {
        deadline: {
          datetime: '',
        },
      },
      pagination: {},
      couponDataFormat: {
        deadline: {
          datetime: '',
        },
        enabled: false,
      },
    };
  },
  methods: {
    openModal(action, item) {
      const vm = this;
      switch (action) {
        case 'add':
          $('#couponModal').modal('show');
          vm.couponTemplate = JSON.parse(JSON.stringify(vm.couponDataFormat));
          break;
        case 'edit':
          $('#couponModal').modal('show');
          vm.couponTemplate = JSON.parse(JSON.stringify(item));
          break;
        case 'delete':
          $('#coupondeleteModal').modal('show');
          vm.couponTemplate = JSON.parse(JSON.stringify(item));
          break;
        default:
          break;
      }
    },
    getCouponList(page = 1) {
      this.getCoupon(page);
    },
    updateDate() {
      const vm = this;
      this.updateCoupon(vm.couponTemplate);
    },
    deleteData() {
      const vm = this;
      this.deleteCoupon(vm.couponTemplate);
    },
    ...mapActions('admin', ['getCoupon', 'updateCoupon', 'deleteCoupon']),
  },
  computed: {
    ...mapGetters('admin', ['couponsList', 'paginationData']),
  },
  created() {
    this.getCouponList();
  },
};
</script>
<style lang="sass">
  .lh-25
    line-height: 2.5 !important;
</style>
