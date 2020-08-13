<template lang="pug">
  main.login.container-fluid.vh-100.h-100.d-flex.justify-content-center.align-items-center
    .login_bg.w-100.h-100
    .login_form.w-100.d-flex.flex-column.justify-content-center.align-items-center
      h1.mb-4.text-center.text-light 後台系統
      form.d-flex.flex-column.justify-content-center.align-items-center(
              @submit.prevent="signin")
        input.login_input.d-block.mb-3.py-3.px-4.rounded.text-center.text-light(
              type="email",
              placeholder="電子郵件",
              required,
              v-model="user.email",)
        input.login_input.d-block.mb-3.py-3.px-4.rounded.text-center.text-light(
              type="password",
              placeholder="密碼",
              required,
              autocomplete="on",
              v-model="user.password")
        button.py-3.px-4.rounded.mb-3(type="submit") 登入
        button.py-3.px-4.rounded.bg-light.text-center
          a(href="#", @click.prevent="changeRouter('/')") 回到首頁

</template>
<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const vm = this;
      this.$store.dispatch('login', vm.user);
    },
    changeRouter(path) {
      this.LOADING(true);
      this.$router.push(path);
      setTimeout(() => {
        this.LOADING(false);
      }, 1500);
    },
    ...mapMutations(['LOADING']),
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
<style lang="sass" scoped>
  .login
    position: relative
    padding: 0
    &_bg
      background-image: url("../../assets/images/back/login_bg.jpg")
      background-size: cover
      filter: blur(1px)
    &_form
      max-width: 37.5rem
      background: rgba(0, 0, 0, 0.7)
      height: 20rem
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
    &_input
      border: 1px solid #fff
      background: transparent
      &::placeholder
        color: #fff
      &:hover
        background: rgba(255, 255, 255,.4)
      &:focus
        background: #fff
        width: 18.75rem
        color: #000 !important
    input,button
      width: 15.625rem
      font-size: 1.125rem
      transition: all .25s
    button
      background-color: #fff
      border: 0
      cursor: pointer
      margin: 0 auto
      &:hover
        background-color: #f79636
</style>
