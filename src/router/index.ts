import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';
import {SET_SHOW_NAVIGATION} from '@/store/ui';

Vue.use(VueRouter);

export enum Routes {
  HOME = 'Home',
  ABOUT = 'About',
  DIPLOMAS = 'Diplomas'
}

const routes = [
  {
    path: '/',
    name: Routes.HOME,
    component: Home
  },
  {
    path: '/about',
    name: Routes.ABOUT,
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/diplomas',
    name: Routes.DIPLOMAS,
    component: () => import(/* webpackChunkName: 'about' */ '../views/Diplomas.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  store.commit(SET_SHOW_NAVIGATION, false);
  next();
});

export default router;
