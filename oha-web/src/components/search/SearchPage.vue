<template>
  <div class="full-page">
    <SearchHeaderComponent/>
    <br>
    <SearchComponent/>
    <br>
    <SuggestionsComponent/>
    <br>
    <ResultComponent/>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
import SuggestionsComponent from './SuggestionsComponent.vue';
import SearchHeaderComponent from './SearchHeaderComponent.vue';
import ResultComponent from './ResultComponent.vue';

export default {
  name: 'SearchPage',
  components: {
    SearchComponent,
    SuggestionsComponent,
    SearchHeaderComponent,
    ResultComponent,
  },
};
</script>
