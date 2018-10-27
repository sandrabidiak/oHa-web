<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="searchInput">
    <button @click="search()">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  props: {
    msg: String,
  },
  data() {
    return { searchInput: '' };
  },
  methods: {
    search() {
      //console.log('search() called!', this.searchInput);
      this.$store.dispatch('getSuggestions');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
}
</style>
