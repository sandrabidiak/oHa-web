<template>
  <div>
    SliderComponent placeholder
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
  name: 'SliderComponent',
  data() {
    return { sliderValue: '1' };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
