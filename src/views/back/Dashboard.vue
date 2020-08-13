<template lang="pug">
  main.dashboard
    Alert
    Navbar
    router-view
</template>
<script>
import Navbar from '../../components/back/Navbar.vue';
import Alert from '../../components/common/Alert.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    Navbar,
    Alert,
  },
  created() {
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.$store.state.token}`;
  },
};
</script>
<style lang="sass">

</style>
