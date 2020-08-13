<template lang="pug">
.alert.fade(
  :class="{'show':alertData.state, 'alert-success':alertData.response, 'colseStyle':!alertData.state, 'alert-danger':!alertData.response}")
  strong {{alertData.message}}
  a.close.setClose(type='button', @click="closeHandler")
    span(aria-hidden='true') ×

</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      message: [
      ],
    };
  },
  methods: {
    closeHandler() {
      const vm = this;
      vm.resetAlert();
    },
    resetAlert() {
      this.ALERT_RESET();
    },
    ...mapMutations(['ALERT_RESET']),
  },
  watch: {
    alertStatus() {
      const vm = this;
      if (vm.alertStatus) {
        setTimeout(() => {
          vm.ALERT_RESET();
        }, 3000);
      }
    },
  },
  computed: {
    alertData() {
      return this.$store.state.alertMessage;
    },
    alertStatus() {
      return this.$store.state.alertMessage.state;
    },
  },
};
</script>

<style lang="sass">
  .alert
    position: fixed;
    right: 10px
    top: 10vh
    transition: all .5s
    .setClose
      margin-left: 1rem
    strong
      line-height: 2
  .colseStyle
    transition: all .5s
    right: 0
    transform: translateX(100%)
</style>
