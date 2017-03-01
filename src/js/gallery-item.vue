<template>
  <div class="gallery-item">
    <img class="gallery-item__image" :src="url" alt="">
  </div>
</template>

<script>
  module.exports = {
    props: {
      url: String
    }
  }
</script>

<style lang="scss">
  .gallery-item {
    flex: 0 1 50%;

    &__image {
      width: 100%;
    }
  }
</style>