<template>
  <div>
    <section class="container-fluid">
      <section class="row">
        <section class="col-12">
          <div class="border-top divider my-4"></div>
        </section>
      </section>
      <section class="row justify-content-center">
        <section class="col text-left mb-3">
          <p>Suggestions:</p>
        </section>
        <section class="col-md-10">
          <span v-for="(s,index) in suggestions" :key ="index">
            <button v-if="s.stt == 'TERM_RULE_SUGGESTION'" class="btn term-rule-suggestion">
              {{s.sst}}
              <i class="fa fa-angle-up"></i>
            </button>
            <button v-if="s.stt === 'TERM_SPECIALIZATION'" class="btn term-specialization">
              {{s.sst}}
              <i class="fa fa-angle-up"></i>
            </button>
            <button v-if="s.stt === 'TERM_GENERALIZATION'" class="btn term-generalization">
              {{s.sst}}
              <i class="fa fa-angle-up"></i>
            </button>
            <button v-if="s.stt === 'TERM_TOP_LEVEL'" class="btn term-top-level">
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
  },
};
</script>
