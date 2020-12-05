<template>
  <div
    v-if="url"
    class="preview cover"
    @click="$emit('hide-preview')">
    <img
      class="preview-image"
      :src="imgUrl" alt="diploma" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DiplomasPreview',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    imgUrl(): string {
      return require(`../../assets/images/diplomas/${this.url}`);
    }
  }
});
</script>

<style lang="scss" scoped>
  .preview {
    align-items: center;
    justify-content: center;

    &-image {
      width: 50%;

      @media ($mobile) {
        width: 90%;
      }
    }
  }
</style>
