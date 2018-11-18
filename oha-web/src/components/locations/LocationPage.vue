<template>
  <div class="bg-warning full-page-height">
    <router-link :to="{name: 'Search'}">
      <button v-if="location" type="button" class="btn btn-secondary">Cancel</button>
    </router-link>
    <section class="container-fluid" style="margin-top:70px">
      <section class="row justify-content-around" style="height:150px">
        <div class="col-sm-4">
          <router-link :to="{name: 'Search'}">
            <button class="btn px-4 py-4 btn-block" style="background-color:#ff8100" @click="selectLocation()">Current Location</button>
          </router-link>
        </div>
        <div class="col-sm-4">
          <router-link :to="{name: 'Search'}">
            <button class="btn px-4 py-4 btn-block" style="background-color:#ff8100" @click="selectLocation('poertschach')">Pörtschach am Wörthersee</button>
          </router-link>
        </div>
      </section>
      <section class="row justify-content-around" style="height:150px">
        <div class="col-sm-4">
          <router-link :to="{name: 'Search'}">
            <button class="btn px-4 py-4 btn-block" style="background-color:#ff8100" @click="selectLocation('hallstatt')">Hallstatt</button>
          </router-link>
        </div>
        <div class="col-sm-4">
          <router-link :to="{name: 'Search'}">
            <button class="btn px-4 py-4 btn-block" style="background-color:#ff8100" @click="selectLocation('stubaital')">Stubaital</button>
          </router-link>
        </div>
      </section>
      <section class="row justify-content-around" style="height:150px">
        <div class="col-sm-4">
          <router-link :to="{name: 'Search'}">
            <button class="btn px-4 py-4 btn-block" style="background-color:#ff8100" @click="selectLocation('salzburg')">Salzburg</button>
          </router-link>
        </div>
        <div class="col-sm-4">
          <router-link :to="{name: 'Search'}">
            <button class="btn px-4 py-4 btn-block" style="background-color:#ff8100" @click="selectLocation('vienna')">Vienna</button>
          </router-link>
        </div>
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
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
