<template>
  <div class="navigation">
    <div class="navigation-item">
      <p class="p-body-italic">01</p>
      <router-link to="/">
        <SvgIcon
          class="navigation-item-text is-blue"
          name="elena-krasnenko"/>
      </router-link>
    </div>
    <div class="navigation-item">
      <p class="p-body-italic">02</p>
      <router-link to="/">
        <SvgIcon
          class="navigation-item-text is-red"
          name="about"/>
      </router-link>
    </div>
    <div class="navigation-item">
      <p class="p-body-italic">03</p>
      <router-link to="/">
        <SvgIcon
          class="navigation-item-text is-blue"
          name="diplomas"/>
      </router-link>
    </div>
    <div class="navigation-item">
      <p class="p-body-italic">04</p>
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
    AnimationService.tweenLite.from('.navigation-item-text', {
      duration: 2,
      opacity: 0,
      rotationX: 90,
      rotationZ: 3
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
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(12, minmax(160px, 1fr));
    grid-template-rows: repeat(6, minmax(50px, 1fr));
    box-sizing: border-box;

    &-item {
      display: flex;
      align-items: flex-end;

      &:nth-child(1) {
        grid-area: 2 / 2;
      }

      &:nth-child(2) {
        grid-area: 3 / 3;
      }

      &:nth-child(3) {
        grid-area: 4 / 2;
      }

      &:nth-child(4) {
        grid-area: 5 / 4;
      }

      &-text {
        /*height: 200px;*/
        transform-origin: bottom left;
        height: 60px;

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
    height: 62px;
  }
</style>
