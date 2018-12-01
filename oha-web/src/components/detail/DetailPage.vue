<template>
  <div>
    <div v-if="selectedResult">
      <section class="container-fluid h-100">
        <section class="row cancel-row">
          <section class="col">
            <router-link :to="{name: 'Search'}">
              <button type="button" class="btn back-btn-style">Back</button>
            </router-link>
          </section>    
        </section>
        <section class="row detail-row">
          <section class="col-md-5">
            <div>
              <h4 class="text-center">{{selectedResult.ti}}</h4>
              <p v-html="selectedResult.sd"></p>
            </div>
          </section>
          <section class="col-md-7">
            <div>
              {{"Image"}}
            </div>     
          </section>
          <section class="col-12">
            <div class="border-top divider my-4"></div>
          </section>
          <section class="col">
            <div v-html="selectedResult.ld"></div>
            <div>
              <a v-bind:href="selectedResult.ur" target="_blank">Home Page</a>
            </div>
            <div v-html="selectedResult.es"></div>
            <div class="footer footer-ref" v-html="selectedResult.cr"></div>
          </section>
        </section>
      </section>
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
      if(!this.$store.state.results.fa){
        return undefined;
      }
      return this.$store.state.results.fa.find(r => r.rid === id);
    },
  },
};
</script>