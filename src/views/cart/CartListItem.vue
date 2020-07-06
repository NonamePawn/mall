<template>
  <div class="item">
    <div class="item-check">
      <div class="check" :class="{active: product.checked}" @click="itemClick">
        <img src="~assets/img/cart/check.png" alt="">
      </div>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-text">
      <p class="title">{{product.title}}</p>
      <p class="desc">{{product.desc}}</p>
      <div class="p-n">
       <div class="price">{{product.price}}</div>
       <div class="number">X{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      itemClick() {
        this.product.checked = !this.product.checked
      }
    }
  }
</script>

<style scoped>
  .item {
    width: 100%;
    height: 160px;
    display: flex;
    padding: 5px;
    border-bottom: 2px solid #d6d6d6;
  }

  .item-check {
    width: 10%;
    display: flex;
    text-align: center;
  }

  .item-check .check{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #a5a5a5;
    align-self: center;
  }

  .item-check .check img {
    width: 100%;
    height: 100%;
  }

  .item-img {
    width: 40%;
    border-radius: 5px;
  }

  .item-img img {
    width: 100%;
    height: 100%;
  }

  .item-text {
    width: 50%;
    position: relative;
  }

  .item-text .title {
    font-size: 20px;
  }

  .item-text .desc {
    color: #ff5777;
    font-size: 12px;
  }

  .item-text p {
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .item-text .p-n {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    font-size: 24px;
    justify-content: space-between;
  }

  .item-text .p-n .price{
    color: #e4393c;
  }

  .active {
    background-color: #ff5777;
    border: 2px solid #ff5777 !important;
  }
</style>