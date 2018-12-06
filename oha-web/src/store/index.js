
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import serviceConstants from '../constants/serviceConstants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    suggestions: [],
    results: {},
    selectedLocation: undefined,
    selectedLanguage: 'en',
    selectedSliderValue: '1',
    inputTags: [],
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
    setSelectedLanguage(state, language) {
      state.selectedLanguage = language;
    },
    setSliderValue(state, sliderValue) {
      state.selectedSliderValue = sliderValue;
    },
    setInputTags(state, tags) {
      state.inputTags = tags;
    },
  },
  actions: {
    getSuggestions(context) {
      const serviceUrl = serviceConstants.baseUrl + '/v1/request/suggestions';
      const headers = { Authorization: serviceConstants.authorizationHeader };
      const location = context.state.selectedLocation;
      const language = context.state.selectedLanguage;
      const sliderValue = context.state.selectedSliderValue;
      const searchTerms = context.state.inputTags.map(tag => tag.text);

      const searchObject = {
        ss: searchTerms,
        dkm: sliderValue,
        gla: location.gla,
        glo: location.glo,
        sr: 0,
        lo: language,
      };

      axios.post(serviceUrl, searchObject, { headers })
        .then(result => context.commit('setSuggestions', result.data))
        .catch(console.error);
    },
    getResults(context) {
      const serviceUrl = serviceConstants.baseUrl + '/v1/request/search';
      const headers = { Authorization: serviceConstants.authorizationHeader };
      const location = context.state.selectedLocation;
      const language = context.state.selectedLanguage;
      const sliderValue = context.state.selectedSliderValue;
      const searchTerms = context.state.inputTags.map(tag => tag.text);

      const searchObject = {
        ss: searchTerms,
        dkm: sliderValue,
        gla: location.gla,
        glo: location.glo,
        sr: 0,
        lo: language,
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
