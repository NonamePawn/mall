<template>
  <div class="cart">
    <nav-bar class="nav"><div slot="center">购物车({{carLength}})</div></nav-bar>
    <scroll class="content" :isClick="true">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./CartList";
  import CartBottomBar from "./CartBottomBar";

  import Scroll from "components/common/scroll/Scroll";
  import {mapGetters} from "vuex";
  export default {
    name: "Cart",
    components: {
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['carLength'])
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .nav {
    color: white;
    font-size: 20px;
    background-color: var(--color-init);
  }

  .content{
    height: calc(100% - 44px - 49px - 34px);
    overflow: hidden;
  }
</style>