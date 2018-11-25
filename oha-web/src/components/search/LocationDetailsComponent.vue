<template>
<b-navbar type="light" variant="info">
  <div class="container">
    <div class="col-3">
      <span class="navbar-text mr-2">Your location:</span>  
      {{getLocationName()}}
    </div>
    <b-nav-form>
      <b-form-input class = "mr-2" @change="onSliderChange($event)" :value="sliderValue" type="range" min="1" max="25" step="1">
      </b-form-input>
      {{sliderValue}}
      <router-link :to="{name: 'Locations'}">
        <button class="btn ml-4">Change Location</button>
      </router-link>
    </b-nav-form>
  </div>
</b-navbar>
</template>

<script>
export default {
  name: 'LocationDetailsComponent',
  computed: {
    location() {
      return this.$store.state.selectedLocation;
    },
    sliderValue() {
      return this.$store.state.selectedSliderValue;
    },
  },
  data() {
    return {};
  },
  methods: {
    getLocationName() {
      return this.location ? this.location.name : 'No location selected!';
    },
    onSliderChange(value) {
      this.$store.commit('setSliderValue', value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
