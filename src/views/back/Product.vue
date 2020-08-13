<template lang="pug">
  main.adminProducts
    .container.mt-5.d-flex.flex-column.align-items-end
      .d-flex.justify-content-between.w-100
        h1.h1 產品
        button(type="button", @click="openModal('add')").mb-3.btn.btn-primary 建立新產品
      table.table.table-striped
        thead.thead-dark
          tr
            th(scope='col' width="80px") 種類
            th(scope='col' width="90px") 子分類
            th(scope='col') 產品名稱
            th(scope='col' width="90px") 售價
            th(scope='col' width="90px") 庫存
            th(scope='col' width="120px") 是否啟用
            th(scope='col' width="150px") 編輯
        tbody
          tr(v-if="item.options" v-for="item in productsList" ,:key="item.id")
            th.lh-25.p-3 {{item.category}}
            td.lh-25.p-3 {{item.options.subcategories}}
            td.lh-25.p-3 {{item.title}}
            td.lh-25.p-3 {{item.price|moneySign}}
            td.lh-25.p-3 {{item.options.inventory}}
            td.lh-25.d-flex.justify-content-center.align-items-center
              .c-circle(:class="{active: item.enabled}")
            td.flex
              a(href="#", @click.prevent="openModal('edit', item)").btn.btn-info.mr-1
                span.icon-block(v-if="iconLoadingStatus")
                  i.fas.fa-spinner.fa-pulse
                span(v-else) 編輯
              a(href="#", @click.prevent="openModal('delete', item)").btn.btn-danger 刪除
      pagination( :total="paginationData.total_pages",
            :current="paginationData.current_page",
            @clickEvent="getProductList" )
      #productModal.modal.fade(tabindex='-1',
                              role='dialog',
                              aria-labelledby='exampleModalLabel',
                              aria-hidden='true')
        .modal-dialog.modal-xl(role='document')
          .modal-content.border-0
            .modal-header.bg-dark.text-white
              h5#exampleModalLabel.modal-title
                span 新增產品
              button.close(type='button', data-dismiss='modal', aria-label='Close')
                span(aria-hidden='true') ×
            .modal-body
              .row
                .col-sm-3
                  .form-group
                    label(for='imageUrl') 輸入圖片網址
                    input#imageUrl.form-control(v-if="productTemplate.imageUrl",
                                                v-model="productTemplate.imageUrl[0]",
                                                type='text',
                                                placeholder='請輸入圖片連結')
                  .form-group
                    .d-flex
                      label.mr-3(for='imageUrl') 或上傳圖片
                      span.icon-block(v-if="iconLoadingStatus")
                        i.fas.fa-spinner.fa-pulse
                    input#imgfile.form-control(ref="file",
                                              type="file",
                                              @change="uploadImg")
                  img.img-fluid(v-if="productTemplate.imageUrl",
                                :src="productTemplate.imageUrl[0]" ,alt='')
                .col-sm-9
                  .form-group
                    label(for='title') 標題
                    input#title.form-control(v-model="productTemplate.title",
                                            type='text',
                                            placeholder='請輸入標題')
                  .form-row
                    .form-group.col-md-3
                      label(for='category') 種類
                      select#category.form-control(name="" ,v-model="productTemplate.category")
                        option(value="" disabled) 請選擇
                        option( v-for="item in bookSort",
                                :value="item", :key="item.id" ) {{item}}
                    .form-group.col-md-3
                      label(for='language') 語言
                      select#language.form-control(name="",
                                                  v-if="productTemplate.options"
                                                  v-model="productTemplate.options.language")
                        option(value="" disabled) 請選擇
                        option( v-for="item in languageSort",
                                :value="item", :key="item.id" ) {{item}}
                    .form-group.col-md-3
                      label(for='origin_price') 原價
                      input#origin_price.form-control(v-model="productTemplate.origin_price",
                                                      type='number', placeholder='請輸入原價')
                    .form-group.col-md-3
                      label(for='price') 售價
                      input#price.form-control(v-model="productTemplate.price",
                                              type='number', placeholder='請輸入售價')
                  .form-row
                    .form-group.col-md-4
                      label(for='price') 單位
                      input#unit.form-control( v-model="productTemplate.unit",
                                              type='unit', placeholder='請輸入單位')
                    .form-group.col-md-4
                      label(for='price') 庫存
                      input#inventory.form-control( v-if="productTemplate.options",
                                                    v-model="productTemplate.options.inventory",
                                                    type='number', placeholder='請輸入數量')
                    .form-group.col-md-4.d-flex.flex-column
                      label(for='is_enabled') 是否啟用
                      .c-toggleButton
                        input#is_enabled.form-check-input( type='checkbox',
                                                          v-model="productTemplate.enabled",
                                                          :true-value="true", :false-value="false")
                        span.slider.round
                  hr
                  .form-row
                    .form-group.col-md-3
                      label(for='subcategories') 子分類
                      select#subcategories.form-control(name="",
                                                  v-if="productTemplate.options"
                                                  v-model="productTemplate.options.subcategories")
                        option(value="" disabled) 請選擇
                        option( v-for="item in contentSort",
                                :value="item", :key="item.id" ) {{item}}
                    .form-group.col-md-3
                      label(for='isbn') ISBN 碼
                      input#isbn.form-control(v-if="productTemplate.options",
                                              v-model="productTemplate.options.isbn",
                                              type='text', placeholder='請輸入ISBN 碼')
                    .form-group.col-md-3
                      label(for='author') 作者
                      input#author.form-control(v-if="productTemplate.options",
                                              v-model="productTemplate.options.author",
                                              type='text', placeholder='請輸入作者')
                    .form-group.col-md-3
                      label(for='author') 譯者
                      input#translator.form-control(v-if="productTemplate.options",
                                              v-model="productTemplate.options.translator",
                                              type='text', placeholder='請輸入譯者')
                  .form-row
                    .form-group.col-md-3
                      label(for='press') 出版地
                      input#local.form-control(v-if="productTemplate.options",
                                              v-model="productTemplate.options.publisher_place",
                                              type='text', placeholder='請輸入出版地')
                    .form-group.col-md-3
                      label(for='press') 出版社
                      input#press.form-control(v-if="productTemplate.options",
                                              v-model="productTemplate.options.press",
                                              type='text', placeholder='請輸入出版社')
                    .form-group.col-md-6
                      label(for='date') 出版日期
                      input#date.form-control(v-if="productTemplate.options",
                                              v-model="productTemplate.options.publication_date",
                                              type='date', placeholder='請輸入出版日期')
                  .form-group
                    label(for='description') 內容簡介
                    textarea#description.form-control(
                                                      v-model="productTemplate.description",
                                                      type='text',
                                                      placeholder='請輸入產品描述')
                  .form-group
                    label(for='content') 內容介紹
                    textarea#description.form-control(v-model="productTemplate.content",
                                                      type='text',
                                                      placeholder='請輸入說明內容')
            .modal-footer
              button.btn.btn-outline-secondary(type='button', data-dismiss='modal')
                | 取消
              button.btn.btn-primary(type='button' ,@click="updateDate")
                | 確認
      #delProductModal.modal.fade(tabindex='-1', role='dialog',
                                  aria-labelledby='exampleModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
          .modal-content.border-0
            .modal-header.bg-danger.text-white
              h5#exampleModalLabel.modal-title
                span 刪除產品
              button.close(type='button', data-dismiss='modal', aria-label='Close')
                span(aria-hidden='true') ×
            .modal-body
              | 是否刪除
              strong.text-danger {{productTemplate.title}}
              | 商品(刪除後將無法恢復)。
            .modal-footer
              button.btn.btn-outline-secondary(type='button', data-dismiss='modal')
                | 取消
              button.btn.btn-danger(type='button' @click="deleteData")
                | 確認刪除
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import $ from 'jquery';
import pagination from '../../components/common/Pagination.vue';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      productTemplate: {},
      pagination: {},
      bookSort: ['中文書', '英文書', '電子書', '雜誌'],
      languageSort: ['繁體中文', '英文', '日文'],
      contentSort: ['財經企管', '電腦資訊', '自然科普', '旅遊相關', '醫療保健', '文學相關'],
      dataformat: {
        id: '', // id
        title: '', // 標題
        category: '', // 種類
        content: '', // 內容介紹
        description: '', // 內容簡介
        imageUrl: ['img-link'], // 圖片
        enabled: true, // 是否啟用
        origin_price: 0, // 原價
        price: 0, // 售價
        unit: '本', // 單位
        options: {
          subcategories: '', // 子分類
          author: '', // 作者
          translator: '', // 譯者
          press: '', // 出版社
          publication_date: '', // 出版日期
          publisher_place: '', // 出版地
          language: '', // 語言
          isbn: '', // ISBN碼
          inventory: 0, // 庫存量
        },
      },
    };
  },
  methods: {
    openModal(action, item) {
      const vm = this;
      switch (action) {
        case 'add':
          $('#productModal').modal('show');
          vm.productTemplate = JSON.parse(JSON.stringify(vm.dataformat));
          break;
        case 'edit':
          // getProductDetails傳入的是 id
          this.ICON_STATUS(true);
          this.getProductDetails(item.id);
          // vm.productTemplate = JSON.parse(JSON.stringify(item));
          break;
        case 'delete':
          $('#delProductModal').modal('show');
          // vm.productTemplate = JSON.parse(JSON.stringify(item));
          break;
        default:
          break;
      }
    },
    getProductList(page = 1) {
      this.getProducts(page);
    },
    getProductDetails(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/ec/product/${id}`;
      this.$http.get(api)
        .then((response) => {
          vm.productTemplate = response.data.data;
          this.ICON_STATUS(false);
          $('#productModal').modal('show');
        })
        .catch(() => {
        });
    },
    updateDate() {
      const vm = this;
      this.updateProducts(vm.productTemplate);
    },
    deleteData() {
      const vm = this;
      this.deleteProducts(vm.productTemplate);
    },
    uploadImg() {
      const vm = this;
      // 取出檔案
      const file = vm.$refs.file.files[0];
      // 轉成fromData
      const formData = new FormData();
      formData.append('file', file);
      // 傳送
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/storage`;

      this.ICON_STATUS(true);

      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          vm.productTemplate.imageUrl = [`${response.data.data.path}`];
          this.ICON_STATUS(false);
        })
        .catch(() => {
        });
    },
    ...mapMutations(['ICON_STATUS']),
    ...mapActions('admin', ['getProducts', 'updateProducts', 'deleteProducts']),
  },
  computed: {
    ...mapGetters(['iconLoadingStatus']),
    ...mapGetters('admin', ['productsList', 'paginationData']),
  },
  created() {
    this.getProductList();
  },
};
</script>
<style lang="sass">
  .lh-25
    line-height: 2.5 !important;
  .icon-block
    display: block
    width: 32px
    height: 24px
</style>
