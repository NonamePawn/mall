<template>
  <div class="cartList">
    <cart-list-item v-for="(item, index) in carList" :key="index" :product="item"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";

  import {mapGetters} from "vuex"
  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters(['carList'])
    }
  }
</script>

<style scoped>

</style>