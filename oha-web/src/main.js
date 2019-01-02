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

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../service-worker.js')
      .then(v => console.log('service worker registered!'))
      .catch(err => console.error('service worker registration error: ', err));
  }
});

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  router,
  store,
  i18n,
}).$mount('#app');
