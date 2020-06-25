<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll ref="scroll"  @scroll="contentScroll" :probeType="3">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature-view></home-feature-view>
      <tab-controller :title="['流行', '热卖', '新款']" @tabClick="tabClick"></tab-controller>
      <goods-list :goods="goods[currentType].list" ></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import HomeSwiper from "./HomeSwiper";
  import HomeRecommend from "./HomeRecommend";
  import HomeFeatureView from "./HomeFeatureView";
  import TabController from "components/content/tabcontroller/TabController";
  import GoodsList from "components/content/goodslist/GoodsList";
  import BackTop from "components/content/backtop/BackTop";
  import {
    banner,
    recommend,
    getGoods
  } from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop' : { page: 0, list: [] },
          'new' : { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    components: {
      NavBar,
      Scroll,
      HomeSwiper,
      HomeRecommend,
      HomeFeatureView,
      TabController,
      GoodsList,
      BackTop
    },
    created() {
      this.banner();
      this.recommend();
      this.getGoods('pop');
      this.getGoods('sell');
      this.getGoods('new');

    },
    methods: {
      banner () {
        banner().then(
            res => {
              this.banners = res;
            },
            err => {
              console.log(err);
            },
        );
      },
      recommend () {
        recommend().then(
            res => {
              this.recommends = res;
            },
            err => {
              console.log(err);
            }
        )
      },
      getGoods (type) {
        this.goods[type].page += 1;
        getGoods(type, this.goods[type].page).then(
            res => {
              this.goods[type].list.push(...res);
            },
            err => {
              console.log(err);
            }
        )
      },
      tabClick (index) {
        switch (index) {
          case 0 :
            this.currentType = 'pop';
            break;
          case 1 :
            this.currentType = 'sell';
            break;
          case 2 :
            this.currentType = 'new'
        }
      },
      backClick () {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll (position) {
        this.isShowBackTop = (-position.y) > 1000;
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background-color: var(--color-init);
    color: #ffffff;
    height: 44px;
    z-index: 1;
  }
</style>