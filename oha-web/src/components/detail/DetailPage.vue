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
      const i = this.$route.params.index;
      if(isNaN(i) || i < 0 || i > (this.$store.state.results.fa.length - 1)) {
        return undefined;
      }
      return this.$store.state.results.fa[this.$route.params.index];
    },
  },
};
</script>