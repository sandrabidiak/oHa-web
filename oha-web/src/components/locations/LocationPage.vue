<template>
  <div class="full-page">
    <section class="container-fluid h-100">
      <section class="row">
        <div class="col-auto mr-auto">
          <router-link :to="{name: 'Search'}">
            <button v-if="location" type="button"
              class="btn cancel-btn-style" v-bind:disabled="isLoading">
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
              <button class="btn location-btn-style" id="currentLocationBtn"
                @click="selectCurrentLocation()" v-bind:disabled="isLoading">
                <i v-if="isLoading" class="fa fa-refresh fa-spin"></i>
                {{ $t('curr_location') }}
              </button>
              <b-popover :show.sync="isPopoverShown" triggers=""
                target="currentLocationBtn" placement="top">
                {{locationErrorMessage}}
              </b-popover>
            </div>
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('poertschach')" v-bind:disabled="isLoading">
                  Pörtschach am Wörthersee
                </button>
              </router-link>
            </div>
          </section>
          <section class="row justify-content-around align-items-center location-row-height">
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('hallstatt')" v-bind:disabled="isLoading">
                  Hallstatt
                </button>
              </router-link>
            </div>
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('stubaital')" v-bind:disabled="isLoading">
                  Stubaital
                </button>
              </router-link>
            </div>
          </section>
          <section class="row justify-content-around align-items-center location-row-height">
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('salzburg')" v-bind:disabled="isLoading">
                  Salzburg
                </button>
              </router-link>
            </div>
            <div class="col-md-4">
              <router-link class="invisible-link" :to="{name: 'Search'}">
                <button class="btn location-btn-style"
                  @click="selectLocation('vienna')" v-bind:disabled="isLoading">
                  {{ $t('vienna') }}
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
  data() {
    return {
      locationErrorMessage: '',
      isPopoverShown: false,
      isLoading: false,
    };
  },
  methods: {
    selectLocation(cityName) {
      this.$store.commit('setSelectedLocation', locationConstants[cityName]);
      this.$store.commit('setInputTags', []);
      this.$store.dispatch('getSuggestions');
      this.$store.dispatch('getResults');
    },

    selectCurrentLocation() {
      if (navigator.geolocation) {
        this.isLoading = true;
        navigator.geolocation.getCurrentPosition(this.getPosition, this.getError);
      } else {
        this.locationErrorMessage = this.$t('not_supported');
        setTimeout(() => this.isPopoverShown = !this.isPopoverShown, 0);
      }
    },

    getPosition(position) {
      this.$store.commit(
        'setSelectedLocation',
        {
          name: 'curr_location',
          gla: position.coords.latitude,
          glo: position.coords.longitude,
        },
      );
      this.$store.commit('setInputTags', []);
      this.$store.dispatch('getSuggestions');
      this.$store.dispatch('getResults');
      this.isLoading = false;
      this.$router.push({ name: 'Search' });
    },

    getError(error) {
      this.isLoading = false;
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.locationErrorMessage = this.$t('location_denied');
          break;
        case error.POSITION_UNAVAILABLE:
          this.locationErrorMessage = this.$t('location_unavailable');
          break;
        case error.TIMEOUT:
          this.locationErrorMessage = this.$t('location_timeout');
          break;
        default:
          this.locationErrorMessage = this.$t('unknown_error');
      }
      setTimeout(() => this.isPopoverShown = !this.isPopoverShown, 0);
    },

    selectLanguage(language) {
      this.$i18n.locale = language;
      this.$store.commit('setSelectedLanguage', language);
      this.$store.dispatch('getSuggestions');
      this.$store.dispatch('getResults');
    },
  },
  mounted() {
    this.$store.commit('setPagePosition', 0);
  },
};
</script>
