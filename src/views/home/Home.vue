<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-controller class="tab-controller" :title="['流行', '热卖', '新款']" @tabClick="tabClick" v-show="isSticky" ref="tabController1"></tab-controller>
    <scroll class="wrapper"
            ref="scroll"
            @scroll="contentScroll"
            @pullingUp="pullingUp"
            @sticky="sticky"
            :pullUpLoad="true"
            :probeType="3"
            :isClick="true">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature-view></home-feature-view>
      <tab-controller class="tab-controller" :title="['流行', '热卖', '新款']" @tabClick="tabClick" ref="tabController2"></tab-controller>
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
  import { Debounce } from "common/utils"
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
        isShowBackTop: false,
        isSticky: false,
        tabControllerOffsetTop: 0
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
    mounted() {
      const refresh = Debounce(this.$refs.scroll.refresh, 300);
      this.$bus.$on('imgLoad', () => {
        refresh()
      })
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
              this.$refs.scroll.finishPullUp()
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
        this.$refs.tabController1.currentIndex = index;
        this.$refs.tabController2.currentIndex = index
      },
      backClick () {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll (position) {
        this.isShowBackTop = (-position.y) > 1000;
      },
      pullingUp () {
        this.getGoods(this.currentType);
      },
      sticky (position) {
        this.isSticky = (-position.y) > this.tabControllerOffsetTop
      },
      swiperImgLoad () {
        this.tabControllerOffsetTop = this.$refs.tabController2.$el.offsetTop;
      }
    }
  }
</script>

<style scoped>

  .home-nav {
    background-color: var(--color-init);
    color: #ffffff;
    height: 44px;
    position: relative;
    z-index: 9;
  }

  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-controller {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 20px;
    color: #7b807f;
    line-height: 20px;
    background-color: white;
    position: relative;
    z-index: 9;
  }
</style>