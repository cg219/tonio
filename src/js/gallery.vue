<template>
  <div>
    <gallery-item
      v-for="item in items"
      :url="item.url"
    ></gallery-item>
  </div>
</template>

<script>
  const graphql = require('graphql-tag');
  let GalleryItem = require('./gallery-item.vue');

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