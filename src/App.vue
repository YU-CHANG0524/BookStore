<template lang="pug">
  #app
    loadingTemplate
    router-view
</template>

<script>
import loadingTemplate from './components/common/Loading.vue';

export default {
  components: { loadingTemplate },
};
</script>
<style lang="sass">
  @import './assets/sass/all'
</style>
