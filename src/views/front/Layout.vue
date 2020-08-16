<template lang="pug">
  .wrap(v-scrollbar style="height: 100vh")
    headerBlock
    router-view
    footerBlock
</template>
<script>
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
  },
  methods: {
  },
  computed: {
    ...mapGetters('customer', ['alertInfo']),
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
