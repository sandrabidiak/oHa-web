<template>
  <div>
    <section class="container-fluid">
      <section class="row location-detail-style">
        <div class="col-12 col-lg-7 justify-content-sm-center mt-2">
          <i class="fa fa-location-arrow mr-2"></i>  
          {{getLocationName()}}
          <router-link :to="{name: 'Locations'}">
            <button class="btn btn-sm change-location-btn ml-4">Change Location</button>
          </router-link>
        </div>
        <div class="col-sm-8 col-lg-5 justify-self-xs-center mt-2">
          <span class="mr-2">Search radius: {{sliderValue}} km</span>
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
