<template>
  <div class="full-page">
    <div v-if="selectedResult">
      <section class="container-fluid h-100">
        <section class="row cancel-row">
          <section class="col">
            <router-link :to="{name: 'Search'}">
              <button type="button" class="btn back-btn-style">Back</button>
            </router-link>
          </section>
        </section>
        <section class="row mt-4 detail-row">
          <section class="col align-self-center">
            <section class="row justify-content-center align-items-center">
              <section class="col-md-4">
                <div class="text-left">
                  <h4>{{selectedResult.ti}}</h4>
                  <p v-html="selectedResult.sd"></p>
                  <button v-if="selectedResult.ur" class="btn home-page-btn">
                    <a class="invisible-link"
                      v-bind:href="selectedResult.ur" target="_blank">Home Page
                    </a>
                  </button>
                </div>
              </section>
              <section class="col-md-6">
                <div id="imageCarousel" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" alt="First slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" alt="Second slide">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#imageCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </section>
              <section class="col-md-10">
                <div class="border-top divider my-4"></div>
              </section>
              <section class="col-md-10">
                <div v-html="selectedResult.ld"></div>
                <div v-html="selectedResult.es"></div>
                <div class="footer footer-ref" v-html="selectedResult.cr"></div>
              </section>
            </section>
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
      if (!this.$store.state.results.fa) {
        return undefined;
      }
      return this.$store.state.results.fa.find(r => r.rid === id);
    },
  },
};
</script>
