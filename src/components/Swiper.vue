<template>
  <swiper :options="swiperOption">
    <div class="swiper-slide" v-for="banner in banners">
      <img :src="banner">
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>


<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        banners: ['https://career-pic.oss-cn-beijing.aliyuncs.com/morn-mist/Website/banner.jpg'],
        swiperOption: {
          autoplay: true,
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-button-prev {
    background: url("../assets/images/news-l.png") no-repeat 50% 50%;
    background-size: 9px 18px;
  }

  .swiper-button-next {
    background: url("../assets/images/news-r.png") no-repeat 50% 50%;
    background-size: 9px 18px;
  }
  .swiper-pagination-bullet-active{
    color: #000;
  }
</style>