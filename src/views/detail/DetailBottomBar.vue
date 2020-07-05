<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="options">
        <div class="item"><img src="~assets/img/detail/home-active.png" alt=""><br><span>店铺</span></div>
        <div class="item"><img src="~assets/img/detail/guanzhu.png" alt=""><br><span>关注</span></div>
        <div class="item"><img src="~assets/img/detail/service.png" alt=""><br><span>客服</span></div>
      </div>
    </div>
    <div class="right">
      <div class="shop-car" @click="addCar">加入购物车</div>
      <div class="pay-now">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addCar() {
        this.$emit('addCar')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    height: 49px;
    background-color: white;
    display: flex;
  }
  .bottom-bar .left {
    width: 55%;
  }

  .bottom-bar .left .options{
    display: flex;
  }

  .bottom-bar .item {
    height: 49px;
    flex: 1;
    margin-left: 8px;
    color: gray;
  }
  .bottom-bar .item  img{
    width: 28px;
    height: 28px;
    margin-bottom: -3px;
  }

  .bottom-bar .right {
    height: 49px;
    display: flex;
    line-height: 49px;
  }
  .bottom-bar .right .shop-car {
    padding: 0 6px;
    background-color: yellow;
    flex: 1;
  }

  .bottom-bar .right .pay-now {
    padding: 0 6px;
    background-color: #ff5777;
    color: white;
  }
</style>