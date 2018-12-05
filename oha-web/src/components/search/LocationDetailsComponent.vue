<template>
<!---navbar class="navbar-style" type="dark">
  <div class="container-fluid">
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
</b-navbar-->

<div>
  <section class="container-fluid">
    <section class="row location-detail-style align-items-center">
      <div class="col-12 col-lg-7 justify-content-sm-center">
        <span class="navbar-text mr-2">Your location:</span>  
        {{getLocationName()}}
        <router-link :to="{name: 'Locations'}">
          <button class="btn change-location-btn ml-4">Change Location</button>
        </router-link>
      </div>
      <div class="col-sm-8 col-lg-5 justify-self-xs-center">
        <span class="navbar-text mr-2">Search radius: {{sliderValue}} km</span>
        <b-form-input @change="onSliderChange($event)" :value="sliderValue" type="range" min="1" max="25" step="1">
        </b-form-input>
      </div>
    </section>
  </section>
</div>
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
