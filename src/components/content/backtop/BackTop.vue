<template>
  <div class="back-top">
    <img src="~assets/img/home/back-top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    background-color: white;
    border-radius: 50%;
    bottom: 60px;
    right: 6px;
    width: 40px;
    height: 40px;
  }

  .back-top img {
    width: 20px;
    height: 20px;
    margin: 10px;
  }
</style>