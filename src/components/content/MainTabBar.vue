<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-img-active" src="~assets/img/tabbar/home-active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/fenlei.png" alt="">
      <img slot="item-img-active" src="~assets/img/tabbar/fenlei-active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/icon-test.png" alt="">
      <img slot="item-img-active" src="~assets/img/tabbar/icon-test-active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="deeppink">
      <img slot="item-img" src="~assets/img/tabbar/nickname.png" alt="">
      <img slot="item-img-active" src="~assets/img/tabbar/nickname-active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>