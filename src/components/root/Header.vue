<template>
  <div class="header grid">
    Elena
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Header'
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
