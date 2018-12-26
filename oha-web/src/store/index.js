
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import serviceConstants from '../constants/serviceConstants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    suggestions: [],
    results: {},
    offset: 50,
    gettingAdditionalResults: false,
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
      if (results) {
        results.trc = results.trc > 300 ? 300 : results.trc;
      }
      state.results = results;
    },
    addResults(state, additionalResults) {
      if (additionalResults) {
        additionalResults.trc = additionalResults.trc > 300 ? 300 : additionalResults.trc;
      }
      state.results.trc = additionalResults.trc;
      state.results.fr += additionalResults.fr;
      state.results.fa = state.results.fa.concat(additionalResults.fa);
    },
    setOffset(state, offset) {
      state.offset = offset;
    },
    setGettingAdditionalResults(state, gettingAdditionalResults) {
      state.gettingAdditionalResults = gettingAdditionalResults;
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
    getSuggestions(context, retry = 0) {
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
        .catch((error) => {
          if (retry < 3) {
            setTimeout(() => context.dispatch('getSuggestions', retry + 1), 2000);
          } else {
            throw { err: error };
          }
        });
    },
    getResults(context, retry = 0) {
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
        .then((result) => {
          context.commit('setResults', result.data);
          context.commit('setOffset', 50);
        })
        .catch((error) => {
          if (retry < 3) {
            setTimeout(() => context.dispatch('getResults', retry + 1), 2000);
          } else {
            throw { err: error };
          }
        });
    },
    getAdditionalResults(context) {
      context.commit('setGettingAdditionalResults', true);

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
        sr: context.state.offset,
        lo: language,
      };

      axios.post(serviceUrl, searchObject, { headers })
        .then((result) => {
          context.commit('addResults', result.data);
          context.commit('setOffset', context.state.offset + 50);
          context.commit('setGettingAdditionalResults', false);
        })
        .catch((error) => {
          context.commit('setGettingAdditionalResults', false);
          throw { err: error };
        });
    },
  },
  /* getters: {
    firstTwoSuggestions(state) {
      return state.suggestions.filter((s, i) => i < 2);
    },
  }, */
});
