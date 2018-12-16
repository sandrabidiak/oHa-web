<template>
  <div id="app" class="full-page">
    <router-view/>
    <ErrorHandlerComponent/>
  </div>
</template>

<script>
import ErrorHandlerComponent from './components/errorMessage/ErrorHandlerComponent.vue';

export default {
  name: 'app',
  components: {
    ErrorHandlerComponent,
  }
};
</script>
