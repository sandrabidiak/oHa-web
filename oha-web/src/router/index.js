import Vue from 'vue';
import Router from 'vue-router';

import LocationPage from '../components/LocationPage.vue';
import SearchPage from '../components/SearchPage.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: LocationPage,
  }, {
    path: '/locations',
    name: 'Locations',
    component: LocationPage,
  }, {
    path: '/search',
    name: 'Search',
    component: SearchPage,
  }],
});
