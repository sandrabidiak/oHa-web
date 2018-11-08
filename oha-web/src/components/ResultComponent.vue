<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
        </tr>
      </thead>
    <tbody>
      <tr v-for="(r,index) in results.fa" :key ="index">
        <td>{{index+1}}</td>
        <td>{{r.ti}}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ResultComponent',
  computed: {
    results() {
      return this.$store.state.results;
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
