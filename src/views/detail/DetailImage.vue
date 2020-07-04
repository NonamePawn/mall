<template>
  <div class="detail-image">
    <div class="list" v-for="(item, index) in imgList">
      <img :src="item" alt="" @load="Load">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailImage",
    props: {
      imgList: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imageLength: 0
      }
    },
    methods: {
      Load() {
        if (++this.counter === this.imageLength) {
          this.$emit('imgLoad');
        }
      }
    },
    watch: {
      imgList() {
        this.imageLength = Object.keys(this.imgList).length;
      }
    }
  }
</script>

<style scoped>
  .detail-image img {
    width: 100%;
  }
</style>