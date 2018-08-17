import Vue from 'vue';
import Router from 'vue-router';
import Clouds from './locations/Clouds.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'clouds',
      component: Clouds
    }
  ]
});
