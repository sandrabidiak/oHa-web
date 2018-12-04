<template>
  <div class="full-page">
    <LocationDetailsComponent/>
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
import LocationDetailsComponent from './LocationDetailsComponent.vue';
import ResultComponent from './ResultComponent.vue';

export default {
  name: 'SearchPage',
  components: {
    SearchComponent,
    SuggestionsComponent,
    LocationDetailsComponent,
    ResultComponent,
  },
};
</script>
