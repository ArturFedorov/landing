<template>
  <div class="header">
    <a
      class="header-link"
      href="#"
      @click.prevent="showNavigation ? toogleNavigation(false) : toogleNavigation(true)">
      <svg
        v-if="!showNavigation"
        width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="3.34448" y1="15.1592" x2="38.3445" y2="15.1592" stroke="black"/>
        <line x1="3.34448" y1="25.1592" x2="38.3445" y2="25.1592" stroke="black"/>
      </svg>
      <svg
        v-if="showNavigation"
        width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="7.27212" y1="32.6801" x2="32.0209" y2="7.93132" stroke="black"/>
        <line x1="7.97922" y1="7.93133" x2="32.728" y2="32.6801" stroke="black"/>
      </svg>
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
    }
  }
</style>
