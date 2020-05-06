<template>
  <div
    ref="image" class="image"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import hoverEffect from 'hover-effect';
export default Vue.extend({
  name: 'ImageCover',
  mounted(): void {
    new hoverEffect({
      parent: this.$refs.image as Element,
      intensity: 0.2,
      image1: require('../../../assets/images/elena1.png'),
      image2: require('../../../assets/images/elena2.png'),
      displacementImage: require('../../../assets/images/heightMap.png'),
      imagesRatio: 1.1
    });
  }
});

</script>

