<template>
  <div class="heading">
    <h1 class="heading-text is-uppercase">
      <slot>
        elena krasnenko
      </slot>
    </h1>
    <h1
      class="heading-bg is-uppercase"
      v-if="showBg">
      elena krasnenko
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'Heading',
  props: {
    showBg: {
      type: Boolean,
      default: true
    }
  },
  mounted(): void {
    AnimationService.timeLine()
      .from('.heading-text', {
        duration: 1.4,
        x: 70,
        opacity: 0,
        stagger: 0.1,
        ease: AnimationService.easing.power1.easeOut
      })

  }
});
</script>

<style lang="scss" scoped>
  .heading {
    position: relative;
    width: 100%;
    transform-origin: 50% 50%;

    &.is-red {
      .heading-text {
        color: $red;
      }
    }

    &-text {
      position: relative;
      z-index: 1;
      color: $blue;
      transform-origin: top left;
    }

    &-bg {
      top: 0;
      position: absolute;
      color: $pink;
      white-space: nowrap;
    }
  }
</style>
