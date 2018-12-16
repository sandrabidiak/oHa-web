<template>
  <div id="app" class="full-page">
    <ErrorHandlerComponent/>
    <router-view/>
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
