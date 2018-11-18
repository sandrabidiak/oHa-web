<template>
  <div>
    {{getLocationName()}}
    <input type="range" min="1" max="25" step="1" v-model="sliderValue">
    {{sliderValue}}
    <br>
    <router-link :to="{name: 'Locations'}">
      <button class="btn btn-primary">Change Location</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LocationDetailsComponent',
  computed: {
    location() {
      return this.$store.state.selectedLocation;
    },
  },
  data() {
    return { sliderValue: '1' };
  },
  methods: {
    getLocationName() {
      return this.location ? this.location.name : 'No location selected!';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
