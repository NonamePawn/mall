<template>
  <div id="detail">
    <detail-nav content="detail-nav"></detail-nav>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImg="topImg"></detail-swiper>
      <detail-base-info :baseInfo="baseInfo"></detail-base-info>
      <detail-image :imgList="imgList" @imgLoad="imgLoad"></detail-image>
      <detail-params :params="params"></detail-params>
    </scroll>
  </div>
</template>

<script>
  import DetailNav from "./DetailNav";
  import DetailSwiper from "./DetailSwiper";
  import DetailBaseInfo from "./DetailBaseInfo";
  import DetailParams from "./DetailParams";
  import DetailImage from "./DetailImage";

  import Scroll from "components/common/scroll/Scroll";
  import {getDetail, Details} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNav,
      Scroll,
      DetailSwiper,
      DetailBaseInfo,
      DetailParams,
      DetailImage
    },
    data() {
      return {
        id: null,
        topImg: {},
        baseInfo: {},
        params: {},
        imgList: {}
      }
    },
    created() {
      this.id = this.$route.params.id;
      getDetail(this.id).then(
          res => {
            this.topImg = res[0].urls;
            this.baseInfo = new Details(res[0].baseInfo);
            this.params = res[0].params;
            this.imgList = res[0].imgList
          },  err => {
            console.log(err);
          })
    },
    methods: {
      imgLoad() {
        this.$refs.scroll.refresh()
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
    height: calc(100% - 44px)
  }
</style>