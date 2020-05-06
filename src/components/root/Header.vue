<template>
  <div class="header">
    <a
      class="header-link"
      href="#"
      @click.prevent="showNavigation ? toogleNavigation(false) : toogleNavigation(true)">
      <SvgIcon
        v-if="!showNavigation"
        name="menu"
        width="41"
        height="41"/>
      <SvgIcon
        v-else
        name="close"
        width="41"
        height="41"/>
    </a>
    <div
      class="p-body-italic header-locale-wrapper">
      <a
        class="header-locale"
        :class="{'is-active': !isRussianLocale}"
        @click="switchLocale('en')">EN
      </a>
      <span> / </span>
      <a
        class="header-locale"
        :class="{'is-active': isRussianLocale}"
        @click="switchLocale('ru')">
        RU
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {navigationMixin} from '@/components/common/mixins/navigation.mixin';
import {SET_LOCALE} from '@/store/ui';
import {localeMixin} from '@/components/common/mixins/locale.mixin';
export default Vue.extend({
  name: 'Header',
  mixins: [navigationMixin, localeMixin],
  methods: {
    switchLocale(locale: string) {
      this.$store.commit(SET_LOCALE, locale);
    }
  }
});
</script>
<style lang="scss" scoped>
  .header {
    padding: 2em 4em;
    position: absolute;
    z-index: 5;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    @media ($tablet) {
      padding: 2em 4em;
    }

    @media ($mobile) {
      padding: 1em;
    }

    &-locale {
      cursor: pointer;
      font-weight: $font-thin;

      &.is-active {
        font-weight: $font-regular;
      }

      &-wrapper {
        margin-left: 6em;

        @media ($mobile) {
          margin-left: 2em;
        }
      }
    }

    &-link {
      display: flex;
      align-items: center;
      height: 100%;

      .svg-icon-menu {
        stroke: $black;
      }

      .svg-icon-close {
        stroke: $black;
      }
    }
  }
</style>
