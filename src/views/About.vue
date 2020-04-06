<template>
  <div class="about">
    <Background
      class="about-background"/>
    <div class="about-content">
      <div class="about-section">
        <Heading class="is-red">
          About
        </Heading>
      </div>
      <div class="about-section is-right">
        <div class="about-section-content">
          <p class="p-body is-blue">
            I am gestalt therapist licenced by Moscow Gestalt Institute
          </p>
          <p class="p-body is-blue">
            I am happy that well-being of your soul is as important as
            well-being of your tooth or any part of your body, because
            that is the reason why you are reading this page.
          </p>
          <p class="p-body is-blue">
            I have been helping people with life problems since 2006.
            I am  specializing in gestalt therapy. I will be able to tell you
            in details how it can help you during your first visit.
          </p>
          <p class="p-body is-blue">
            I am sure that anyone can turn life around for the better,
            make dreams come true, cope with depression. I will do
            possible and impossible in order to help you.
          </p>
          <p class="is-blue">
            <SvgIcon
              class="about-logo"
              width="40"
              height="40"
              name="ek" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {AnimationService} from '@/shared/services/animation.service';
export default Vue.extend({
  name: 'About',
  mounted(): void {
    AnimationService.timeLine()
      .from('.is-blue', {
        duration: 1.5,
        opacity: 0,
        y: 20,
        rotationZ: 2,
        stagger: 0.2,
        ease: AnimationService.easing.power1.easeOut
      })
  }
});
</script>

<style lang="scss" scoped>
  .about {
    padding: 0 4em;
    position: relative;

    &-background {
      position: fixed;
      transform: rotate(-90deg);
      right: -540px;
      z-index: -1;

      @media ($mobile) {
        right: -640px;
      }
    }

    &-content {
      display: flex;
      min-height: 100vh;

      @media ($mobile) {
        flex-direction: column;
        padding-top: 10em;
      }

    }

    &-logo {
      fill: $blue;
    }

    &-section {
      min-width: 50%;
      display: flex;
      align-items: center;
      box-sizing: border-box;

      &-content {
        max-width: 70%;
        margin-top: 8em;

        @media ($mobile) {
          max-width: 100%;
        }

        .p-body:not(:last-child) {
          margin-bottom: 2em;
        }
      }

      &.is-right {
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
      }
    }

    &-text {
      height: 60px;
      fill: $red;
      position: relative;
      z-index: 1;
    }
  }
</style>
