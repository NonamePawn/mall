<template>
  <div class="bottomBar">
    <div class="checkAll">
      <div class="checkImg" :class="{active: isCheckAll}" @click="checkClick"><img src="~assets/img/cart/check.png" alt=""></div>
      <div class="checkText">全选</div>
    </div>
    <div class="totalPrice">总计:￥{{totalPrice}}</div>
    <div class="calculate" @click="calculate">去计算({{checkLength}})</div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  export default {
    name: "CartBottomBar",
    methods: {
      checkClick() {
        if (this.isCheckAll) {
          this.carList.forEach(item => item.checked = false)
        }else {
          this.carList.forEach(item => item.checked = true)
        }
      },
      calculate() {
        if (!this.checkLength) {
          this.$toast.show('购物车为空', 2000)
        }
      }
    },
    computed: {
      ...mapGetters(['carList']),
      totalPrice() {
        return this.carList.filter( item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price.split('￥')[1] * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.carList.filter( item => {
          return item.checked
        }).length
      },
      isCheckAll() {
        if (this.carList.length === 0) return false;
        return !this.carList.find( item => {
          return !item.checked
        })
      },
    }
  }
</script>

<style scoped>
  .bottomBar {
    width: 100%;
    height: 34px;
    background: #eee;
    display: flex;
  }

  .checkAll {
    text-align: center;
    line-height: 34px;
    display: flex;
    justify-content: center;
    width: 20%;
  }

  .checkAll .checkImg {
    width: 23px;
    height: 23px;
    border: 1px solid gray;
    border-radius: 50%;
    align-self: center;
    margin-right: 8px;
  }

  .checkAll .checkImg img {
    width: 100%;
    height: 100%;
  }

  .totalPrice {
    line-height: 34px;
    text-align: center;
    flex: 1;
  }

  .calculate {
    line-height: 34px;
    text-align: center;
    width: 23%;
    background: var(--color-init);
    color: white;
  }

  .active {
    background-color: #ff5777;
    border: 2px solid #ff5777 !important;
  }
</style>