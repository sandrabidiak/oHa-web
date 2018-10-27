
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    suggestions: [],
  },
  mutations: {
    setSuggestions(state, suggestions) {
      state.suggestions = suggestions;
    },
  },
  actions: {
    getSuggestions(context) {
      const baseUrl = 'https://dev.unibsc.myoha.at/rest';
      const accessToken = 'dW5pYnNjOjlrcmo2aDVRaFZnZWt2V0F1YQ==';
      const authorizationHeader = 'Basic ' + accessToken;
      const headers = { Authorization: authorizationHeader };

      const serviceUrl = baseUrl + '/v1/request/suggestions';

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
  },
  /* getters: {
    firstTwoSuggestions(state) {
      return state.suggestions.filter((s, i) => i < 2);
    },
  }, */
});
