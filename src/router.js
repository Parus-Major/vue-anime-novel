import Vue from 'vue';
import Router from 'vue-router';
import City from './rooms/City.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'city',
      component: City
    }
  ]
});
