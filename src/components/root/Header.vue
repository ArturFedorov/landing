<template>
  <div class="header">
    <div class="header-logo">
      <SvgIcon
        name="logo"
        width="78"
        height="79"/>
    </div>
    <div class="header-content"></div>
    <div class="header-actions">
      <div class="header-actions-one"></div>
      <div class="header-actions-two"></div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'Header',
  });
</script>
<style lang="scss" scoped>
  .header {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1em;
    height: 140px;
    border-bottom: $border;

    &-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: 1 / 1;
      border-right: $border;
    }

    &-content {
      grid-column: 2 / 12;
      border-right: $border;
    }

    &-actions {
      grid-column: 12 / 13;
      display: flex;

      &-one {
        border-right: $border;
      }

      > div {
        flex: 1;
      }
    }
  }
</style>
