<template>
  <div id="app">
<!--    <Loader />-->
    <Navigation />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Loader from './components/root/Loader.vue';
import Navigation from '@/components/root/Navigation/Navigation.vue';
export default Vue.extend({
  name: 'App',
  components: {
    // Loader,
    Navigation
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
