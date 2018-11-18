<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Type</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="(s,index) in suggestions" :key ="index">
        <td>{{index+1}}</td>
        <td>{{s.sst}}</td>
        <td>{{s.stt}}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SuggestionsComponent',
  computed: {
    suggestions() {
      return this.$store.state.suggestions;
    },
  },
  data() {
    return { };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
