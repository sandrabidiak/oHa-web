<template>
  <div>
    <div v-if="selectedResult">
      <router-link :to="{name: 'Search'}">
        <button type="button" class="btn back-btn-style">Back</button>
      </router-link>
      <div>{{selectedResult.ti}}</div>
    </div>
    <div v-if="!selectedResult">
      Oops! ERROR!
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  computed: {
    selectedResult() {
      const id = this.$route.params.id;
      return this.$store.state.results.fa.find(r => r.rid === id);
    },
  },
};
</script>