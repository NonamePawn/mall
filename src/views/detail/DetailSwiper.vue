<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item v-for="item in topImg" class="swiper-item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"
  export default {
    name: "DetailSwiper",
    props: {
      topImg: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .swiper-item {
    height: 350px;
    overflow: hidden;
  }

  .swiper-item img {
    width: 100%;
    height: 100%;
  }
</style>