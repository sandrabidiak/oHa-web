<template>
  <div>
    <section v-if="suggestions.length" class="container-fluid">
      <section class="row">
        <section class="col-12">
          <div class="border-top divider my-4"></div>
        </section>
      </section>
      <section class="row justify-content-center">
        <section class="col text-left mb-3">
          <p>{{ $t('suggestions') }}:</p>
        </section>
        <section class="col-md-10">
          <span v-for="(s,index) in suggestions" :key ="index">
            <button @click="onSuggestionClick($event, s.sst)" v-bind:class="{
              'term-rule-suggestion': s.stt === 'TERM_RULE_SUGGESTION',
              'term-specialization': s.stt === 'TERM_SPECIALIZATION',
              'term-generalization': s.stt === 'TERM_GENERALIZATION',
              'term-top-level': s.stt === 'TERM_TOP_LEVEL',
            }" class="btn">
              {{s.sst}}
              <i class="fa fa-angle-up"></i>
            </button>
          </span>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SuggestionsComponent',
  computed: {
    suggestions() {
      return this.$store.state.suggestions;
    },
  },
  data() {
    return { };
  },
  methods: {
    onSuggestionClick(event, suggestionTitle) {
      const newTags = this.$store.state.inputTags;
      const duplicate = newTags.find((tag) => tag.text === suggestionTitle);
      if (!duplicate) {
        newTags.push({ text: suggestionTitle });
        this.$store.commit('setInputTags', newTags);
        this.$store.dispatch('getSuggestions');
        this.$store.dispatch('getResults');
      }
    },
  },
};
</script>
