<template>
  <div class="bg-warning full-page-height">
    <router-link :to="{name: 'Search'}">
      <button type="button" class="btn btn-secondary">Cancel</button>
    </router-link>
    <section class="container-fluid" style="margin-top:70px">
      <section class="row justify-content-around" style="height:150px">
        <div class="col-sm-4">
          <button class="btn px-4 py-4" style="background-color:#ff8100">Current Location</button>
        </div>
        <div class="col-sm-4">
          <button class="btn px-4 py-4" style="background-color:#ff8100">Pörtschach am Wörthersee</button>
        </div>
      </section>
      <section class="row justify-content-around" style="height:150px">
        <div class="col-sm-4">
          <button class="btn px-4 py-4" style="background-color:#ff8100">Hallstatt</button>
        </div>
        <div class="col-sm-4">
          <button class="btn px-4 py-4" style="background-color:#ff8100">Stubaital</button>
        </div>
      </section>
      <section class="row justify-content-around" style="height:150px">
        <div class="col-sm-4">
          <button class="btn px-4 py-4" style="background-color:#ff8100">Salzburg</button>
        </div>
        <div class="col-sm-4">
          <button class="btn px-4 py-4" style="background-color:#ff8100">Vienna</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LocationPage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
