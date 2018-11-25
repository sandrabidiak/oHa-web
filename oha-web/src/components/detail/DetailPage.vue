<template>
  <div>
  <router-link :to="{name: 'Search'}">
    <button type="button" class="btn btn-primary">Back</button>
  </router-link>
  <div>{{selectedResult.ti}}</div>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  computed: {
    selectedResult() {
      return this.$store.state.results.fa[1];
    },
  },
};
</script>