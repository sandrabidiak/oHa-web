<template>
  <div>
    <SearchComponent msg="Welcome to oha-web app"/>
    <br>
    <SuggestionsComponent/>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
import SuggestionsComponent from './SuggestionsComponent.vue';

export default {
  name: 'SearchPage',
  components: {
    SearchComponent,
    SuggestionsComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
