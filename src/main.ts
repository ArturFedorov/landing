import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {i18n} from './i18n';

import '@/components/common/index';
import '@/styles/styles.scss';

import { firestorePlugin } from 'vuefire';
import {LOCALE} from '@/store/ui';
Vue.use(firestorePlugin);

Vue.config.productionTip = false;
i18n.locale = store.getters[LOCALE];

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
