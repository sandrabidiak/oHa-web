<template>
  <div>
    <section class="container-fluid">
      <section class="row location-detail-style">
        <div class="col-auto mr-auto justify-content-sm-center my-2">
          <i class="fa fa-location-arrow mr-2"></i>
          <span class="location-overflow">{{getLocationName()}}</span>
          <router-link :to="{name: 'Locations'}">
            <button class="btn btn-sm change-location-btn ml-4">{{ $t('change_location') }}</button>
          </router-link>
        </div>
        <div class="col-auto offset-sm-3">
          <div class="btn-group btn-group-toggle my-2" data-toggle="buttons">
            <label class="btn btn-sm"
              v-bind:class="{ 'nav-language-btn-style-checked': $i18n.locale === 'en',
              'nav-language-btn-style': $i18n.locale !== 'en'}">
              <input @click="selectLanguage('en')"
                type="radio" name="language" id="english" autocomplete="off" checked>EN
            </label>
            <label class="btn btn-sm"
              v-bind:class="{ 'nav-language-btn-style-checked': $i18n.locale === 'de',
              'nav-language-btn-style': $i18n.locale !== 'de'}">
              <input @click="selectLanguage('de')"
                type="radio" name="language" id="german" autocomplete="off">DE
            </label>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SearchHeaderComponent',
  computed: {
    location() {
      return this.$store.state.selectedLocation;
    },
  },
  data() {
    return {};
  },
  methods: {
    getLocationName() {
      return this.location ? this.$t(this.location.name) : this.$t('no_location');
    },
    selectLanguage(language) {
      this.$i18n.locale = language;
      this.$store.commit('setSelectedLanguage', language);
      this.$store.dispatch('getSuggestions');
      this.$store.dispatch('getResults');
    },
  },
};
</script>
