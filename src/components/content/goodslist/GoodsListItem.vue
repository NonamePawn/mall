<template>
  <div class="goods-list-item">
    <img v-lazy="item.url" alt="" @load="imgLoad" @click="itemClick">
    <p class="title">{{item.title}}</p>
    <span class="price">{{item.price}}</span>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      imgLoad () {
        this.$bus.$emit('imgLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.item.id)
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
    width: 48%;
    border-radius: 10px;
    font-size: 12px;
    text-align: center;
  }

  .goods-list-item p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goods-list-item img {
    width: 100%;
  }
  .price {
    color: var(--color-high-text);
  }
</style>