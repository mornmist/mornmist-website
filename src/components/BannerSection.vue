<template>
  <!-- Video -->
  <div class="overlay-home">
    <div class="container">
      <div class="row">
        <div id="banner" class="col-md-12">
          <h1>{{ $t("slogan.title") }}</h1>
          <p>{{ $t("slogan.subtitle") }}</p>
          <button class="next button-next" @click="moveSectionDown();">{{$t("button.findmore")}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BannerSection',
    props: {
      msg: String
    },
    methods: {
      moveSectionDown() {
        fullpage_api.moveSectionDown();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>