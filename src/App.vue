<template>
  <div id="app">
    <Loader />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Loader from './components/root/Loader.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Loader
  }
});
</script>
<style lang="scss">
  .main {
    &-content {
    }

    &-actions {
    }
  }
</style>
