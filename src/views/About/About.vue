<i18n src="./About.yml" />
<template>
  <div class="about">
    <Background
      class="about-background"/>
    <div class="about-content">
      <div class="about-section">
        <Heading class="is-red">
          {{ $t('title') }}
        </Heading>
      </div>
      <div class="about-section is-right">
        <div class="about-section-content">
          <p
            class="p-body is-blue"
            :class="{'is-thin': isRussianLocale}">
            {{ $t('text') }}
          </p>
          <p
            class="p-body is-blue"
            :class="{'is-thin': isRussianLocale}">
            {{ $t('text2') }}
          </p>
          <p
            class="p-body is-blue"
            :class="{'is-thin': isRussianLocale}">
            {{ $t('text3') }}
          </p>
          <p
            class="p-body is-blue"
            :class="{'is-thin': isRussianLocale}">
            {{ $t('text4') }}
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
import {localeMixin} from '@/components/common/mixins/locale.mixin';
export default Vue.extend({
  name: 'About',
  mixins: [localeMixin],
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
        right: -740px;
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
