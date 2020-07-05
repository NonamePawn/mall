<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/detail/back.png" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item ,index) in title" class="item" :class="{active: index === currentIndex}" @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNav",
    data() {
      return {
        title: ['商品', '参数', '推荐', '评价'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('itemClick', index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .detail-nav {
    height: 44px;
  }

  .center {
    display: flex;
  }

  .item {
    flex: 1;
    font-size: 16px;
  }

  .active {
    color: var(--color-high-text);
  }

  .left img {
    margin-top: 13px;
    width: 20px;
    height: 20px;
  }
</style>