<template>
  <div id="app">
    <Loader />
    <Navigation v-if="showNavigation"/>
    <Header />
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from '@/components/root/Header.vue';
import Loader from './components/root/Loader/Loader.vue';
import Navigation from '@/components/root/Navigation/Navigation.vue';
import {SHOW_LOADER} from '@/store/ui';
import {navigationMixin} from '@/components/common/mixins/navigation.mixin';
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
  .app {
    &-content {
      @media ($mobile) {
        padding-top: 105px;
      }
    }
  }
</style>
