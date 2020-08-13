<template lang="pug">
  main.adminStorage
    .container.mt-5.d-flex.flex-column.align-items-end
      h1.h1.mr-auto 上傳的圖檔
    .container.d-flex.flex-column.align-items-center
      .row
        .col-3(v-for="item in storagesList")
          .card.mb-5
            img.card-img-top( :src='item.path')
            .card-body.d-flex
              a.ml-auto.btn.btn-danger(href='#', @click.prevent="openModal('delete', item)") 刪除
      pagination( :total="paginationData.total_pages",
                  :current="paginationData.current_page",
                  @clickEvent="getStorageList" )
    #delStorageModal.modal.fade(tabindex='-1', role='dialog',
                            aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content.border-0
          .modal-header.bg-danger.text-white
            h5#exampleModalLabel.modal-title
              span 刪除檔案
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            p.h2 是否刪除該檔案
            .card.mb-5
              img.card-img-top( :src='storageTemplate.path')
          .modal-footer
            button.btn.btn-outline-secondary(type='button', data-dismiss='modal')
              | 取消
            button.btn.btn-danger(type='button', @click="deleteData")
              | 確認刪除

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import $ from 'jquery';
import pagination from '../../components/common/Pagination.vue';

export default {
  components: {
    pagination,
  },
  name: 'storage',
  data() {
    return {
      storageTemplate: {},
    };
  },
  methods: {
    openModal(action, item) {
      const vm = this;
      if (action === 'delete') {
        vm.storageTemplate = JSON.parse(JSON.stringify(item));
        $('#delStorageModal').modal('show');
      }
    },
    getStorageList(page = 1) {
      this.getStorages(page);
    },
    deleteData() {
      const vm = this;
      this.deleteStorage(vm.storageTemplate.id);
    },
    ...mapActions('admin', ['getStorages', 'deleteStorage']),
  },
  computed: {
    ...mapGetters('admin', ['storagesList', 'paginationData']),
  },
  created() {
    this.getStorageList();
  },
};
</script>
<style lang="sass">

</style>
