<template>
  <div class='app'>
    <gallery></gallery>
  </div>
</template>

<script>
  const Gallery = require('./gallery.vue');
  let component = {
    components: {
      Gallery
    }
  }
  module.exports = component;
</script>

<style lang="scss">
  body, html {
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  .app {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: stretch;
    width: 100%;
    height: 100%;
    background: #232323;
  }
</style>