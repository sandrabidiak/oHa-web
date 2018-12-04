<template>
  <div class="full-page">
    <div v-if="selectedResult" class="h-100">
      <section class="container-fluid h-100">
        <section class="row">
          <section class="col">
            <router-link :to="{name: 'Search'}">
              <button type="button" class="btn back-btn-style">Back</button>
            </router-link>
          </section>
        </section>
        <section class="row my-3">
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
              <section class="col-md-6 mt-2">
                 <b-carousel id="imageCarousel" controls indicators :interval="0">
                    <b-carousel-slide v-for="(image,index) in selectedResult.im" :key ="index"
                      class="carousel-item">
                      <img slot="img" class="d-block img-fluid carousel-style"
                      v-bind:src="image.im">
                    </b-carousel-slide>
                 </b-carousel>
              </section>
              <section class="col-md-10">
                <div class="border-top divider my-4"></div>
              </section>
              <section class="col-md-10">
                <div v-html="selectedResult.ld"></div>
                <div v-html="selectedResult.es"></div>
              </section>
            </section>
          </section>
        </section>
        <!-- section class="row mt-2">
          <section class="col">
            <div class="footer" v-html="selectedResult.cr"></div>
          </section>
        </section -->
      </section>
      <footer class="footer">
        <div v-html="selectedResult.cr"></div>
      </footer>
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
