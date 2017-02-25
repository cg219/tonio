<template>
  <div>
    <img :src="url" alt="">
  </div>
</template>

<script>
  module.exports = {
    props: {
      url: String
    }
  }
</script>

<style lang="scss" scoped>
  div {
    width: 20%;
  }

  img {
    width: 100%;
  }
</style>