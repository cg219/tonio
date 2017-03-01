<template>
  <div class="gallery">
    <div class="gallery__upload">
      <div class="gallery__upload-input-button">
        <span>Upload</span>
        <input class="gallery__upload-input" type="file">
      </div>
      <!-- <input class="gallery__upload-title" type="text"> -->
    </div>
    
    <div class="gallery__items">
      <gallery-item
        v-for="item in items"
        :url="item.url"
      ></gallery-item>
    </div>
  </div>
</template>

<script>
  const graphql = require('graphql-tag');
  const GalleryItem = require('./gallery-item.vue');
  let component = {
    data: function() {
      return {
        items: ''
      }
    },
    components: {
      GalleryItem
    },
    apollo: {
      items: {
        query: graphql `{
          getAllImages {
            url
          }
        }`,
        forceFetch: true,
        update: function(data) {
          return data.getAllImages
        }
      }
    }
  }

  module.exports = component;
</script>

<style lang="scss">
  $green-m: #346d81;
  $white-d: #EFEFEF;

  .gallery {
    display: flex;
    flex: 0 1 50%;
    flex-flow: column nowrap;
    align-items: flex-start;
    align-content: flex-start;
    overflow: hidden;
    background: #000;

    &__upload {
      display: flex;
      flex: 0 1 auto;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: flex-end;
    }

    &__upload-input-button {
      overflow: hidden;
      position: relative;
      border-radius: 5px;
      background: $green-m;
      color: $white-d;
      margin-right: 10px;

      span {
        display: block;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        padding: 10px;
        font-size: 12px;
      }
    }

    &__upload-input {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0;
      padding: 0;
      cursor: pointer;
      opacity: 0;
    }

    &__upload-title {
      
    }

    &__items {
      display: flex;
      flex: 0 1 auto;
      flex-flow: row wrap;
    }
  }
</style>