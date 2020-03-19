<template>
  <div id="app">
    <Header />
    <div class="main grid">
      <div class="main-left grid-left">

      </div>
      <div class="main-content grid-main">
        <router-view />
      </div>
      <div class="main-actions grid-right">

      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Header from './components/root/Header.vue';
  export default Vue.extend({
    name: 'App',
    components: {
      Header
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
