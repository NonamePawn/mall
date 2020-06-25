<template>
  <div class="recommend">
    <home-recommend-item v-for="(item, index) in recommends" :key="index">
      <div class="recommend-item">
          <a :href="item.link" slot="img">
            <img :src="item.url" alt="">
          </a>
          <span>{{item.title}}</span>
      </div>
    </home-recommend-item>
  </div>
</template>

<script>
  import HomeRecommendItem from "./HomeRecommendItem";
  export default {
    name: "HomeRecommend",
    props: {
     recommends: {
      type: Array,
      default() {
        return [];
      }
     }
    },
    components: {
      HomeRecommendItem
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 8px solid rgba(100, 100, 100, .1);
  }

  .recommend-item {
    width: 75px;
    height: 75px;
    text-align: center;
    vertical-align: center;
  }
</style>