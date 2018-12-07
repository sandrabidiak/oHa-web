<template>
  <div class="full-page">
    <section class="container-fluid">
      <section class="row justify-content-md-center">
        <div class="col-9 col-md-6">
          <vue-tags-input class="input-custom tag-custom" v-model="tag" :tags="tags"
            @tags-changed="newTags => onTagsChange(newTags)"/>
        </div>
        <div class="col-3 col-md-2">
          <button class="btn search-btn-style" @click="search()">{{ $t('search') }}</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  name: 'SearchComponent',
  components: {
    VueTagsInput,
  },
  computed: {
    tags() {
      return this.$store.state.inputTags;
    },
  },
  props: {
    msg: String,
  },
  data() {
    return {
      searchInput: '',
      tag: '',
    };
  },
  methods: {
    search() {
      this.$store.dispatch('getSuggestions');
      this.$store.dispatch('getResults');
    },
    onTagsChange(tags) {
      this.$store.commit('setInputTags', tags);
    },
  },
};
</script>
