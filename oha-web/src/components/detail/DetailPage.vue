<template>
  <div class="full-page">
    <div v-if="selectedResult" class="h-100">
      <section class="container-fluid h-100">
        <section class="row">
          <div class="col-auto mr-auto">
            <router-link :to="{name: 'Search'}">
              <button type="button" class="btn back-btn-style">{{ $t('back') }}</button>
            </router-link>
          </div>
          <div class="col-auto">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn"
                v-bind:class="{ 'language-btn-style-checked': $i18n.locale === 'en',
                'language-btn-style': $i18n.locale !== 'en'}">
                <input @click="selectLanguage('en')"
                  type="radio" name="language" id="english" autocomplete="off" checked>EN
              </label>
              <label class="btn"
                v-bind:class="{ 'language-btn-style-checked': $i18n.locale === 'de',
                'language-btn-style': $i18n.locale !== 'de'}">
                <input @click="selectLanguage('de')"
                  type="radio" name="language" id="german" autocomplete="off">DE
              </label>
            </div>
          </div>  
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
                      v-bind:href="selectedResult.ur" target="_blank">{{ $t('home_page') }}
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
                    <b-carousel-slide v-if="!(selectedResult.im && selectedResult.im.length)"
                      class="carousel-item">
                      <img slot="img" class="d-block img-fluid carousel-style"
                        src="../../assets/no-image-icon.png">
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
  methods: {
    selectLanguage(language) {
      this.$i18n.locale = language;
      this.$store.commit('setSelectedLanguage', language);
    },
  },
};
</script>
