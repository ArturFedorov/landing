import Vue from 'vue';
import {SET_SHOW_NAVIGATION, SHOW_NAVIGATION} from '@/store/ui';
export const navigationMixin = Vue.extend({
  computed: {
    showNavigation(): boolean {
      return this.$store.getters[SHOW_NAVIGATION];
    }
  },
  methods: {
    toogleNavigation(show: boolean) {
      this.$store.commit(SET_SHOW_NAVIGATION, show);
    },
  }
});
