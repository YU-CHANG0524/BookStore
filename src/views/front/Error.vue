<template lang="pug">
  main.error
    section.error_content
      h1.error_title 404
      h2.error_subtitle.mb-5 找不到此頁面
      p.error_text 很抱歉，您訪問的頁面不存在。<br>建議您返回首頁進行瀏覽，謝謝！
      a.error_btn(href="#", @click.prevent="changeRouter('/')") 返回首頁
</template>
<script>

export default {
  data() {
    return {

    };
  },
};
</script>
<style lang="sass">

</style>
