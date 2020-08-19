<template lang="pug">
  nav.center(aria-label='...' ,v-if="total !==1")
    ul.pagination
      li.page-item(:class="{'disabled': current === 1 }")
        a.page-link(href='#', @click.prevent="pageSwitch(current-1)") Previous
      li.page-item(v-for="item in total", :key="item", :class="{ 'active': item===current }")
        a.page-link(href='#', @click.prevent="pageSwitch(item)") {{item}}
      li.page-item(:class="{'disabled': current === total }")
        a.page-link(href='#', @click.prevent="pageSwitch(current+1)") Next
</template>
<script>
export default {
  name: 'Pagination',
  data() {
    return {
    };
  },
  props: {
    total: Number,
    current: Number,
  },
  methods: {
    pageSwitch(num) {
      this.$emit('clickEvent', Number(num));
    },
  },
};
</script>
<style lang="sass" scoped>
  .center
    margin: 0 auto
</style>
