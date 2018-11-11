<template>
  <div class="bg-success full-page-height">
    <SliderComponent/>
    <br>
    <SearchComponent msg="Welcome to oha-web app"/>
    <br>
    <SuggestionsComponent/>
    <br> 
    <ResultComponent/>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
import SuggestionsComponent from './SuggestionsComponent.vue';
import SliderComponent from './SliderComponent.vue';
import ResultComponent from './ResultComponent.vue';

export default {
  name: 'SearchPage',
  components: {
    SearchComponent,
    SuggestionsComponent,
    SliderComponent,
    ResultComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
