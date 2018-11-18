import Vue from 'vue';
import Router from 'vue-router';

import LocationPage from '../components/locations/LocationPage.vue';
import SearchPage from '../components/search/SearchPage.vue';

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
  }, {
    path: '*',
    redirect: '/',
  }],
});
