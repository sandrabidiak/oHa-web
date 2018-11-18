<template>
  <section class="container-fluid">
    <section class="row">
      <div class="col-sm-3">
        {{getLocationName()}}
      </div>
      <div class="col-sm-6">
        <b-form-input @change="onSliderChange($event)" :value="sliderValue" type="range" min="1" max="25" step="1">
        </b-form-input>
        {{sliderValue}}
      </div>
      <div class="col-sm-3">
        <router-link :to="{name: 'Locations'}">
          <button class="btn btn-primary">Change Location</button>
        </router-link>
      </div>
    </section>
  </section>
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
