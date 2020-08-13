<template lang="pug">
  .wrap(v-scrollbar style="height: 100vh")
    headerBlock
    router-view
    footerBlock
</template>
<script>
import headerBlock from '../../components/front/Header.vue';
import footerBlock from '../../components/front/Footer.vue';

export default {
  components: {
    headerBlock,
    footerBlock,
  },
};
</script>
<style lang="sass">

</style>
