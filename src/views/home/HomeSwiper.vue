<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.url" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"
  export default {
    name: "HomeSwiper",
    data () {
      return {
        isImgLoad: false
      }
    },
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoad () {
        if (!this.isImgLoad) {
          this.$emit('swiperImgLoad');
          this.isImgLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .home-swiper {
    overflow: hidden;
  }
</style>