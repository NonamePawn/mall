<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMulidata} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        result: null
      }
    },
    components: {
      NavBar
    },
    created() {
      getHomeMulidata().then(
          res => {
            this.result = res;
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