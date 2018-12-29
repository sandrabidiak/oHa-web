<template>
  <div class="full-page">
    <section v-if="gettingResults" class="container-fluid h-100">
      <section class="row justify-content-center">
        <section>
          <section class="col-sm-2 align-self-center">
            <i class="fa fa-refresh fa-spin"></i>
          </section>
        </section>
      </section>
    </section>
    <section v-else-if="results.fa && results.fa.length" class="container-fluid h-100">
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
              <img v-if="result.im.length && result.im[0].im" v-bind:src="getProxyUrl(result.im[0].im)"
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
      <section class="row justify-content-center">
        <section v-if="gettingAdditionalResults">
          <section class="col-sm-2 align-self-center">
            <i class="fa fa-refresh fa-spin"></i>
          </section>
        </section>
      </section>
    </section>
    <section v-else>
      <section class="row">
        <section class="col">
          <div class="border-top divider my-4"></div>
        </section>
      </section>
      <section class="row justify-content-center">
        <section class="col-sm-3 align-self-center">
          <div class="alert alert-warning text-center" role="alert">
            <strong>{{ $t('no_results') }}</strong>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { getProxyUrl } from '../../shared/utilities';

export default {
  name: 'ResultComponent',
  computed: {
    results() {
      return this.$store.state.results;
    },
    offset() {
      return this.$store.state.offset;
    },
    gettingResults() {
      return this.$store.state.gettingResults;
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
    },
    getProxyUrl(url) {
      return getProxyUrl(url);
    },
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
