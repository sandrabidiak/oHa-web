<template>
  <div class="full-page">
    <section class="container-fluid">
      <section class="row justify-content-sm-center">
        <div class="col-10 col-md-5 mb-3">
          <span class="mr-2">{{ $t('radius') }}: {{sliderValue}} km</span>
          <b-form-input @change="onSliderChange($event)" :value="sliderValue" type="range"
            min="1" max="25" step="1">
          </b-form-input>
        </div>
      </section>
      <section class="row justify-content-md-center">
        <div class="col-8 col-md-6">
          <vue-tags-input v-bind:placeholder="$t('search_terms')" class="input-custom tag-custom"
            v-model="tag" :tags="tags" @tags-changed="newTags => onTagsChange(newTags)"/>
        </div>
        <div class="col-2 col-md-2">
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
    sliderValue() {
      return this.$store.state.selectedSliderValue;
    },
  },
  data() {
    return {
      searchInput: '',
      tag: '',
    };
  },
  methods: {
    search() {
      if(this.tag !== ''){
        const newTags = this.$store.state.inputTags;
        const duplicate = newTags.find((tag) => tag.text === this.tag);
        if(!duplicate){
          newTags.push({ text: this.tag });
          this.$store.commit('setInputTags', newTags);
          this.tag = '';
        }
      }
      this.$store.dispatch('getSuggestions');
      this.$store.dispatch('getResults');
    },
    onTagsChange(tags) {
      const isTagDeleted = tags.length < this.$store.state.inputTags.length;
      this.$store.commit('setInputTags', tags);
      if (isTagDeleted) {
        this.$store.dispatch('getSuggestions');
        this.$store.dispatch('getResults');
      }
    },
    onSliderChange(value) {
      this.$store.commit('setSliderValue', value);
    },
  },
};
</script>
