<template>
  <div class="navigation">
    <div class="navigation-item">
      <router-link to="/">
        <SvgIcon
          class="navigation-item-text is-blue"
          name="elena-krasnenko"/>
      </router-link>
    </div>
    <div class="navigation-item">
      <router-link to="/">
        <SvgIcon
          class="navigation-item-text is-red"
          name="about"/>
      </router-link>
    </div>
    <div class="navigation-item">
      <router-link to="/">
        <SvgIcon
          class="navigation-item-text is-blue"
          name="diplomas"/>
      </router-link>
    </div>
    <div class="navigation-item">
      <router-link to="/">
        <SvgIcon
          class="navigation-item-text is-red"
          name="contact"/>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {AnimationService} from '@/shared/services/animation.service';
  export default Vue.extend({
    mounted(): void {
      AnimationService.tweenLite.from('.is-blue', {
        duration: 2,
        opacity: 0,
        rotationX: -90,
        scaleX: 1.05
      })
    }
  });
</script>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    background-color: $pink;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    &-item {
      &-text {
        /*height: 200px;*/
        transform-origin: bottom right;

        &.is-blue {
          fill: $blue;
        }

        &.is-red {
          fill: $red;
        }
      }
    }
  }

  .svg-icon-elena-krasnenko {
    width: 800px;
  }
</style>
