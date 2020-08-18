<template lang="pug">
  //- .wrap(v-scrollbar style="height: 100vh")
  .wrap
    loading( :active.sync="iconLoadingStatus" loader="dots" )
    headerBlock
    router-view
    footerBlock
</template>
<script>
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

</style>
