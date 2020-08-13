<template lang="pug">
  loadaing( :active.sync='isLoading')
    template(slot='default')
      .loader_wrap
        .load
          hr
          hr
          hr
          hr

</template>

<script>
import loadaing from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'loadingTemplate',
  components: { loadaing },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
