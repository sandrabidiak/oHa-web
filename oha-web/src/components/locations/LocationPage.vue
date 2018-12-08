<template>
  <div class="full-page">
    <section class="container-fluid h-100">
      <section class="row">
        <div class="col-auto mr-auto">
          <router-link :to="{name: 'Search'}">
            <button v-if="location" type="button" class="btn cancel-btn-style">
                <i class="fa fa-times"></i>
            </button>
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
      <section class="row">
        <section class="col align-self-center">
          <h1 class="display-5 text-center">{{ $t('choose_location') }}</h1>
          <section class="row justify-content-around align-items-center location-row-height">
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation()">{{ $t('curr_location') }}
                </button>
              </router-link>
            </div>
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('poertschach')">Pörtschach am Wörthersee
                </button>
              </router-link>
            </div>
          </section>
          <section class="row justify-content-around align-items-center location-row-height">
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('hallstatt')">Hallstatt
                </button>
              </router-link>
            </div>
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('stubaital')">Stubaital
                </button>
              </router-link>
            </div>
          </section>
          <section class="row justify-content-around align-items-center location-row-height">
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('salzburg')">Salzburg
                </button>
              </router-link>
            </div>
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('vienna')">{{ $t('vienna') }}
                </button>
              </router-link>
            </div>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import locationConstants from '../../constants/locationConstants';

export default {
  name: 'LocationPage',
  computed: {
    location() {
      return this.$store.state.selectedLocation;
    },
  },
  methods: {
    selectLocation(cityName) {
      this.$store.commit('setSelectedLocation', locationConstants[cityName]);
      this.$store.commit('setInputTags', []);
      this.$store.dispatch('getSuggestions');
      this.$store.dispatch('getResults');
    },
    selectLanguage(language) {
      this.$i18n.locale = language;
      this.$store.commit('setSelectedLanguage', language);
    },
  },
};
</script>
