import Vue from 'vue';
import VueI18n from 'vue-i18n';

import localizationConstants from '../constants/localizationConstants';

Vue.use(VueI18n);

export const i18n = new VueI18n ({
  locale: 'en',
  fallbackLocale: 'en',
  messages: localizationConstants
});
