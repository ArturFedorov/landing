<template>
  <div class="header">
    <a
      class="header-link"
      href="#"
      @click.prevent="showNavigation ? toogleNavigation(false) : toogleNavigation(true)">
      <SvgIcon
        name="menu"
        width="41"
        height="41"/>
    </a>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {navigationMixin} from '@/shared/mixins/navigation.mixin';
export default Vue.extend({
  name: 'Header',
  mixins: [navigationMixin],
});
</script>
<style lang="scss" scoped>
  .header {
    padding: 2em 4em;
    position: absolute;
    z-index: 5;
    box-sizing: border-box;

    &-link {
      display: flex;
      align-items: center;
      height: 100%;

      .svg-icon-menu {
        stroke: $black;
      }
    }
  }
</style>
