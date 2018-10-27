<template>
  <div id="app">
    <SearchPage msg="Welcome to oha-web app"/>
    <br>
    <SuggestionsComponent />
  </div>
</template>

<script>
import SearchPage from './components/SearchPage.vue';
import SuggestionsComponent from './components/SuggestionsComponent.vue';

export default {
  name: 'app',
  components: {
    SearchPage,
    SuggestionsComponent,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
