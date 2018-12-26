<template>
  <div class="full-page">
    <section v-if="results.fa && results.fa.length" class="container-fluid h-100">
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
            <div @click="selectPagePosition(result.rid)" class="card card-style">
              <img v-if="result.im.length && result.im[0].im" v-bind:src="result.im[0].im"
                class="card-img-top" alt="CardImg">
              <img v-else src="../../assets/no-image-icon.png"
                class="card-img-top" alt="CardImg">
              <div class="card-block p-2">
                <p class="card-text">{{result.ti}}</p>
              </div>
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
    offset() {
      return this.$store.state.offset;
    },
    gettingAdditionalResults() {
      return this.$store.state.gettingAdditionalResults;
    },
    pagePosition() {
      return this.$store.state.pagePosition;
    },
  },
  data() {
    return { };
  },
  methods: {
    onScroll() {
      const scrollTop = window.scrollY
        || window.pageYOffset
        || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
      const bottomOfWindow = scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow 
          && this.offset < this.$store.state.results.trc
          && !this.gettingAdditionalResults) {
        this.$store.dispatch('getAdditionalResults');
      }
    },
    selectPagePosition(id) { 
      const currentPosition = window.scrollY;    
      this.$store.commit('setPagePosition', currentPosition);
      this.$router.push({ name: 'Detail', params: {id: id} });
    }
  },
  mounted() {
    document.addEventListener('scroll', this.onScroll, false);
    window.scrollTo(0, this.pagePosition);
  },
  destroyed() {
    document.removeEventListener('scroll', this.onScroll, false)
  }
};
</script>
