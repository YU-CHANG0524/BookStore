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
            input(type="radio",
                  :id="item.id",
                  :name="item.title",
                  :value="item.title",
                  v-model="selectCategory")
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
        li(v-for="item in filterData[pagination]", :key="item.id")
          .item
            a.item_body(href="#", @click.prevent="productDetails(item.id)")
              .item_img
                img( :src="item.imageUrl[0]")
              .item_title {{ item.title }}
              .item_text {{ item.content }}
              .price
                .discount(v-if="item.price !== item.origin_price")
                  | 優惠
                  em {{ Math.floor((item.price/item.origin_price)*100) }}
                  | 折,
                  em {{item.price}}
                  | 元
                .original(v-else)
                  | 售價
                  em {{item.price}}
                  | 元
            .item_footer
              a(href="#", @click.prevent="addshopCart(item.id)").cartAdd 加入購物車
      pagination.w-100.d-flex.justify-content-center.mt-5( :total="filterData.length",
            :current="pagination +1 ",
            @clickEvent="changePage")
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import pagination from '../../components/common/Pagination.vue';

export default {
  name: 'customerProduct',
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
      selectCategory: '全部',
      allProducts: [],
      filterData: [],
      pagination: 0,
    };
  },
  components: {
    pagination,
  },
  methods: {
    productDetails(id) {
      this.$router.push(`/productList/${id}`);
    },
    splitProducts(array) {
      let index = 0;
      const newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, index += 9));
      }
      return newArray;
    },
    filterProduct(key) {
      const vm = this;
      const newArray = [];
      // 判斷是否有傳入key值，有的話代表是點連結的，沒有的話則是勾選checkbox
      if (key) {
        if (key === '全部') {
          vm.allProducts.forEach((item) => {
            newArray.push(item);
          });
        } else {
          vm.allProducts.forEach((item) => {
            if (item.category === key) {
              newArray.push(item);
            }
          });
        }
      } else {
        vm.allProducts.forEach((item) => {
          if (vm.selectCategory.indexOf(item.category) !== -1) {
            newArray.push(item);
          }
        });
      }
      return newArray;
    },
    getFilterKey() {
      const vm = this;
      vm.selectCategory = sessionStorage.getItem('filterProdut');
    },
    addshopCart(id) {
      const purchase = {
        product: id,
        quantity: 1,
      };
      this.addCart(purchase);
    },
    changePage(page) {
      const vm = this;
      vm.pagination = page - 1;
    },
    ...mapActions('customer', ['getProducts', 'addCart']),
  },
  computed: {
    ...mapGetters('customer', ['productList']),
  },
  watch: {
    productList: {
      handler(val) {
        this.allProducts = val;
        this.filterData = this.splitProducts(this.filterProduct(this.selectCategory));
      },
    },
    selectCategory: {
      handler() {
        const vm = this;
        vm.pagination = 0;
        if (this.selectCategory === '全部') {
          this.filterData = this.splitProducts(this.filterProduct('全部'));
        } else {
          this.filterData = this.splitProducts(this.filterProduct());
        }
      },
      deep: true,
    },
  },
  // 監聽 selectCategory 並觸發篩選資料事件
  created() {
    this.getProducts();
    this.getFilterKey();
  },
};
</script>
<style lang="sass">
  .product_banner-bg
    background: #fec140
</style>
