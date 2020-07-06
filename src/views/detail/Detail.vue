<template>
  <div id="detail">
    <detail-nav class="detail-nav" @itemClick="itemClick" ref="nav"></detail-nav>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImg="topImg"></detail-swiper>
      <detail-base-info :baseInfo="baseInfo"></detail-base-info>
      <detail-image :imgList="imgList" @imgLoad="imgLoad"></detail-image>
      <detail-params :params="params" ref="params"></detail-params>
      <goods-list :goods="goods" ref="recommend"></goods-list>
      <detail-comments :comments="comments" ref="comments"></detail-comments>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCar="addCar"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNav from "./DetailNav";
  import DetailSwiper from "./DetailSwiper";
  import DetailBaseInfo from "./DetailBaseInfo";
  import DetailParams from "./DetailParams";
  import DetailImage from "./DetailImage";
  import GoodsList from "components/content/goodslist/GoodsList";
  import DetailComments from "./DetailComments";
  import DetailBottomBar from "./DetailBottomBar";

  import { Debounce }from "common/utils"
  import { MixinBackTop } from "common/mixin";
  import Scroll from "components/common/scroll/Scroll";
  import {getDetail, getSimilar, Details} from "network/detail";


  export default {
    name: "Detail",
    mixins: [MixinBackTop],
    components: {
      GoodsList,
      DetailComments,
      DetailNav,
      Scroll,
      DetailSwiper,
      DetailBaseInfo,
      DetailParams,
      DetailImage,
      DetailBottomBar
    },
    data() {
      return {
        id: null,
        topImg: {},
        baseInfo: {},
        params: {},
        imgList: {},
        comments: {},
        goods: [],
        ThemeY: [],
        getThemeY: null,
        currentIndex: 0
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.getThemeY = Debounce( () => {
        this.ThemeY = [];
        this.ThemeY.push(0);
        this.ThemeY.push(this.$refs.params.$el.offsetTop - 44);
        this.ThemeY.push(this.$refs.recommend.$el.offsetTop - 44);
        this.ThemeY.push(this.$refs.comments.$el.offsetTop - 44);
        this.ThemeY.push(Number.MAX_VALUE);
      }, 300);
      getDetail(this.id).then(
          res => {
            this.topImg = res[0].urls;
            this.baseInfo = new Details(res[0].baseInfo);
            this.params = res[0].params;
            this.imgList = res[0].imgList;
            this.comments = res[0].comments;
          },
          err => {
            console.log(err);
          });
      getSimilar().then(
          res => {
            this.goods = res;
          },
          err => {
            console.log(err);
          }
      );

    },
    methods: {
      imgLoad() {
        this.$refs.scroll.refresh();
        this.getThemeY();
      },
      itemClick(index) {
        this.$refs.scroll.scrollTo(0, -this.ThemeY[index], 300)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000;
        let length = this.ThemeY.length;
        for(let i = 0; i < this.ThemeY.length; i++ ) {
          if ( this.currentIndex !== i && (i < length - 1 && -position.y >= this.ThemeY[i] && -position.y < this.ThemeY[i+1])) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
      },
      addCar() {
        const product = {};
        product.image = this.topImg[0];
        product.price = this.baseInfo.price;
        product.title = this.baseInfo.title_text;
        product.desc = this.baseInfo.desc;
        product.id = this.id;
        this.$store.dispatch('addCar', product).then(
            res => {
              this.$toast.show(res, 2000)
            },

        )
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: white;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }
</style>