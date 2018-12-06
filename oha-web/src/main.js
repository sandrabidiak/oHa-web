import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import { i18n } from './localization/i18n.js';
import App from './App.vue';

import './assets/css/styling.css';
import './assets/css/structural.css';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  router,
  store,
  i18n,
}).$mount('#app');
