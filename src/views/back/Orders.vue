<template lang="pug">
  main.adminOrder
    .container.mt-5.d-flex.flex-column.align-items-end
      h1.h1.mr-auto 訂單
      table.table.table-striped
        thead.thead-dark
          tr
            th.p-3(width="50px") #
            th.p-3.orderId 訂單編號
            th.p-3(width="100px") 價格
            th.p-3(width="120px") 付款方式
            th.p-3(width="100px") 付款狀態
            th.p-3(width="100px") 編輯
        tbody
          tr(v-for="(item, index) in ordersList")
            td.lh-25.p-3 {{ index + 1 }}
            td.lh-25.p-3 {{ item.id }}
            td.lh-25.p-3.text-danger {{ Math.floor(item.amount)|moneySign }}
            td.lh-25.p-3 {{ item.payment }}
            td.lh-25.d-flex.justify-content-center.align-items-center
              .c-circle(:class="{active: item.paid}")
            td.lh-25.p-3
              a(href="#", @click.prevent="openModal('edit', item)").py-2.btn.btn-info.mr-2 編輯
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions('admin', ['getOrders']),
  },
  computed: {
    ...mapGetters('admin', ['ordersList']),
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
