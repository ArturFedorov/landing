<template>
  <div id="app">
    <Loader />
    <Navigation v-if="showNavigation"/>
    <Header />
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from '@/components/root/Header.vue';
import Loader from './components/root/Loader.vue';
import Navigation from '@/components/root/Navigation/Navigation.vue';
import {SHOW_LOADER} from '@/store/ui';
import {navigationMixin} from '@/shared/mixins/navigation.mixin';
export default Vue.extend({
  name: 'App',
  mixins: [navigationMixin],
  components: {
    Header,
    Loader,
    Navigation
  },
  computed: {
    showLoader() {
      return this.$store.getters[SHOW_LOADER];
    }
  }
});
</script>
<style lang="scss">
</style>
