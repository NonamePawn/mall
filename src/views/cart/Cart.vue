<template>
  <div class="cart">
    <nav-bar class="nav"><div slot="center">购物车({{carLength}})</div></nav-bar>
    <scroll class="content">
      <cart-list></cart-list>
    </scroll>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./CartList";

  import Scroll from "components/common/scroll/Scroll";
  import {mapGetters} from "vuex";
  export default {
    name: "Cart",
    components: {
      NavBar,
      Scroll,
      CartList,
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
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>