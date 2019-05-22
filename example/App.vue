<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="click">点我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'lalallalalv'
    }
  },
  methods: {
    click() {
      this.$alert(111)
    }
  }
}
</script>

<style lang="scss" scoped>
  h1{
    color: #f66;
  }
</style>

