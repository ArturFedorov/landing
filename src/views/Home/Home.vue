<i18n src="./Home.yml" />
<template>
  <div class="home">
    <Background
      class="home-background"
      :animationDelay="showLoader ? 0 : 8"/>
    <div class="home-content">
      <div class="home-content-section home-content-image">
        <div class="home-content-text">
          <Heading :showBg="false">
            {{ $t('title') }}
          </Heading>
          <h2 class="home-header-h2 is-uppercase is-blue">
            {{ $t('subtitle') }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
import {SHOW_LOADER} from '@/store/ui';
export default Vue.extend({
  name: 'Home',
  mounted(): void {
    AnimationService.timeLine({duration: 1.5})
      .from('.home-content-image', {
        delay: this.showLoader ? 0 : 6,
        opacity: 0
      }).from('.home-header-h2', {
        y: 10,
        opacity: 0,
        rotationX: -45
      })
  },
  computed: {
    showLoader(): boolean {
      return this.$store.getters[SHOW_LOADER];
    }
  }
});
</script>

<style lang="scss">
  .home {
    display: flex;
    width: 100%;

    &-background {
      position: fixed;
      bottom: -100px;
      z-index: -1;
    }

    &-header {
      transform-origin: top left;
    }

    &-content {
      display: flex;
      width: 100%;
      min-height: 100vh;

      &-section {
        width: 100%;
      }

      &-text {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 4em;
        transform-origin: bottom right;

        @media ($mobile) {
          justify-content: flex-start;
          padding-left: 2em;
          padding-top: 100px;
        }
      }

      &-image {
        background: bottom right url('../../assets/images/elena-color.png') no-repeat;
        background-size: contain;
        transform-origin: bottom right;

        @media ($mobile) {
          background-size: auto 60%;
        }
      }
    }
  }
</style>
