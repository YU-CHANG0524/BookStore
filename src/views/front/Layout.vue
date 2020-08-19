<template lang="pug">
  .wrap
    loading( :active.sync="iconLoadingStatus" loader="dots" )
    headerBlock
    router-view
    footerBlock

    a(href="#" , @click.prevent="scrollTop()").scrollTop
      i.fas.fa-arrow-up
</template>
<script>
import $ from 'jquery';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapGetters } from 'vuex';
import headerBlock from '../../components/front/Header.vue';
import footerBlock from '../../components/front/Footer.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    headerBlock,
    footerBlock,
    Loading,
  },
  methods: {
    scrollTop() {
      $('html,body').animate({ scrollTop: 0 }, 1000);
      return false;
    },
  },
  computed: {
    ...mapGetters('customer', ['alertInfo']),
    ...mapGetters(['iconLoadingStatus']),
  },
  watch: {
    alertInfo: {
      handler(val) {
        this.$swal(val);
      },
    },
  },
};
</script>
<style lang="sass">
  .scrollTop
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    bottom: 25px
    right: 25px
    width: 70px
    height: 70px
    background: #3cb696
    color: #fff
    font-size: 2rem
    z-index: 100
    border-radius: 50%
    transition: all .3s
    &:hover
      color: #fff
      transform: translateY(-10px)
</style>
