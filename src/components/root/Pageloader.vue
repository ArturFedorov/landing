<template>
  <svg class="morph-svg"  viewBox="0 0 434 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="morph" d="M443.516 1153.58C443.516 1486.17 888.113 1280.92 507.543 1280.92C309.306 1280.92 443.594 1243.7 443.595 1032.83C443.595 291.839 466.255 122.978 439.768 -22.7012C439.768 -355.291 -267.857 -179.827 112.712 -179.827C493.282 -179.827 443.516 -585.23 443.516 1153.58Z" fill="#0455BF"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '../../shared/services/animation.service';
export default Vue.extend({
  name: 'PageLoader',
  props: {
    color: {
      type: String,
      default: 'is-red'
    },
    startAnimation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hide: false
    }
  },
  methods: {
    endAnimation() {
      this.$emit('end-animation');
    },
    animate() {
      const timeline = AnimationService.anime.timeline({
        easing: 'easeInOutQuint',
        duration: 1300,
        loop: false
      });

      timeline
        .add({
          targets: '.morph',
          d: [
            {
              value: 'M2665.84 446.529C2665.84 779.119 94.54 2860.3 -286.03 2860.3C-484.267 2860.3 104.03 1362.46 -22.0728 1195.97C-469.478 605.294 -2511.03 409.373 -2537.51 263.694C-2537.51 -68.8955 1152.41 -173.988 1532.98 -173.988C1913.55 -173.988 2665.84 113.94 2665.84 446.529Z'
            }],
          easing: 'easeInOutCubic'
        })
        .add({
          targets: '.morph',
          d: [
            {
              value: 'M443.516 1153.58C443.516 1486.17 888.113 1280.92 507.543 1280.92C309.306 1280.92 443.594 1243.7 443.595 1032.83C443.595 291.839 466.255 122.978 439.768 -22.7012C439.768 -355.291 -267.857 -179.827 112.712 -179.827C493.282 -179.827 443.516 -585.23 443.516 1153.58Z'
            }],
          easing: 'easeInCubic'
        });

      timeline.play();
    }
  },
  watch: {
    startAnimation(newValue: boolean) {
      if(newValue) {
        console.log(newValue);
        this.animate();
      }
    }
  }
});
</script>

<style lang="scss" scoped>
  .morph-svg {
    fill: $blue;
    bottom: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 4;

    &.is-top-z {
      z-index: 2;
    }

    &.initial {
      fill: $red;
    }

    &.is-red {
      fill: $red;
    }

    &.is-black {
      fill: $black;
    }

    &.is-blue {
      fill: $blue;
    }
  }
</style>
