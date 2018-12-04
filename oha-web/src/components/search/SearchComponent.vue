<template>
  <div>
    <section class ="container-fluid">
      <section class="row justify-content-md-center">
        <div class="col-9 col-md-7">
          <vue-tags-input v-model="tag" :tags="tags"
            @tags-changed="newTags => onTagsChange(newTags)"/>
        </div>
        <div class="col-3 col-md-2">
          <button class="btn search-btn-style" @click="search()">Search</button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
</style>
