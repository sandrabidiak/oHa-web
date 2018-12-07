<template>
  <div class="full-page">
    <section class="container-fluid h-100">
      <section class="row">
        <section class="col">
          <div class="border-top divider my-4"></div>
        </section>
      </section>
      <section class="row">
        <section class="col text-left mb-3">
          <p>{{ $t('results') }}: {{results.fr}} {{ $t('of') }} {{results.trc}}</p>
        </section>
      </section>
      <section class="row">
         <section class="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex align-items-stretch"
          v-for="(result,index) in results.fa" :key ="index">
          <div class="card-deck">
            <div class="card card-style">
              <router-link :to="{ name: 'Detail', params: {id: result.rid} }">
                <img v-if="result.im.length && result.im[0].im" v-bind:src="result.im[0].im"
                  class="card-img-top" alt="CardImg">
                <img v-else src="../../assets/no-image-icon.png"
                  class="card-img-top" alt="CardImg">
                <div class="card-block p-2">
                  <p class="card-text">{{result.ti}}</p>
                </div>
              </router-link>
            </div>
          </div>
        </section>
      </section>
    </section>
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
