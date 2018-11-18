
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import serviceConstants from '../constants/serviceConstants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    suggestions: [],
    results: [],
    selectedLocation: undefined,
  },
  mutations: {
    setSuggestions(state, suggestions) {
      state.suggestions = suggestions;
    },
    setResults(state, results) {
      state.results = results;
    },
    setSelectedLocation(state, location) {
      state.selectedLocation = location;
    },
  },
  actions: {
    getSuggestions(context) {
      const serviceUrl = serviceConstants.baseUrl + '/v1/request/suggestions';
      const headers = { Authorization: serviceConstants.authorizationHeader };

      const searchObject = {
        ss: ['mountain'],
        dkm: 1,
        gla: 47.800101,
        glo: 13.043421,
        sr: 0,
        lo: 'en',
      };

      axios.post(serviceUrl, searchObject, { headers })
        .then(result => context.commit('setSuggestions', result.data))
        .catch(console.error);
    },
    getResults(context) {
      const serviceUrl = serviceConstants.baseUrl + '/v1/request/search';
      const headers = { Authorization: serviceConstants.authorizationHeader };

      const searchObject = {
        ss: ['mountain'],
        dkm: 1,
        gla: 47.800101,
        glo: 13.043421,
        sr: 0,
        lo: 'en',
      };

      axios.post(serviceUrl, searchObject, { headers })
        .then(result => context.commit('setResults', result.data))
        .catch(console.error);
    },
  },
  /* getters: {
    firstTwoSuggestions(state) {
      return state.suggestions.filter((s, i) => i < 2);
    },
  }, */
});
