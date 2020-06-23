<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./HomeSwiper";
  import HomeRecommend from "./HomeRecommend";
  import {banner} from "network/home";
  import {recommend} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommend: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    created() {
      banner().then(
          res => {
            this.banners = res;
          },
          err => {
            console.log(err);
          },
      );
      recommend().then(
          res => {
            this.recommend = res;
          },
          err => {
            console.log(err);
          }
      )
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-init);
    color: #ffffff;
  }
</style>