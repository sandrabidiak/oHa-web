<template>
  <div>
    <section class="container-fluid">
      <section class="row">
        <section class="col-12">
          <div class="border-top divider my-4"></div>
        </section>
      </section>
      <section class="row justify-content-center">
        <section class="col text-left mb-3">
          <p>Suggestions:</p>
        </section>
        <section class="col-md-10">
          <button class="btn tag-btn-style"
            v-for="(s,index) in suggestions" :key ="index">
            {{s.sst}}
            <i class="arrow-up"></i>
          </button>
        </section>
      </section>
    </section>
    <!-- table>
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
    </table -->
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
