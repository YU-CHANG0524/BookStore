<template lang="pug">
  main.adminOrder
    .container.mt-5.d-flex.flex-column.align-items-end
      h1.h1.mr-auto 訂單
      table.table.table-striped
        thead.thead-dark
          tr
            th.p-3(width="300px") 名稱
            th.p-3(width="300px") 優惠碼
            th.p-3 有效期限
            th.p-3(width="120px") 是否啟用
            th.p-3(width="150px") 編輯
      //-   tbody
      //-     tr(v-for="(item, index) in couponsList")
      //-       td.lh-25.p-3 {{ item.title }}
      //-       td.lh-25.p-3 {{ item.code }}
      //-       td.lh-25.p-3 {{ item.deadline.timestamp|dataFormat }}
      //-       td.lh-25.d-flex.justify-content-center.align-items-center
      //-         .c-circle(:class="{active: item.enabled}")
      //-       td.lh-25.p-3
      //-         a(href="#", @click.prevent="openModal('edit', item)").py-2.btn.btn-info.mr-2 編輯
      //-         a(href="#", @click.prevent="openModal('delete', item)").py-2.btn.btn-danger 刪除
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('admin', ['getOrders']),
  },
  created() {
    this.getOrders();
  },
};
</script>
<style lang="sass">

</style>
