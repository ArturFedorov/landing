import Vue from 'vue';
import {LOCALE} from '@/store/ui';
export const localeMixin = Vue.extend({
  computed: {
    isRussianLocale(): boolean {
      return this.$store.getters[LOCALE] === 'ru';
    },
    locale(): string {
      return this.$store.getters[LOCALE];
    }
  }
});
