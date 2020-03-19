<template>
  <div class="header grid">
    <div class="header-logo grid-left">
      <SvgIcon
        name="logo"
        width="78"
        height="79"/>
    </div>
    <div class="header-content grid-main"></div>
    <div class="header-actions grid-right">
      <div class="header-actions-one">
        <Ball />
      </div>
      <div class="header-actions-two"></div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Ball from './Ball.vue';
  export default Vue.extend({
    name: 'Header',
    components: {
      Ball
    }
  });
</script>
<style lang="scss" scoped>
  .header {
    height: 140px;
    border-bottom: $border;

    &-logo {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-actions {
      display: flex;

      &-one {
        border-right: $border;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      > div {
        width: 50%;
      }
    }
  }
</style>
