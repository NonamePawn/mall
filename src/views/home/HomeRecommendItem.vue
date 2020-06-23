<template>
  <div class="recommend-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommedItem"
  }
</script>

<style scoped>

  img {
    margin: 5px 8px;
    width: 40px;
    height: 40px;
  }
  span {
    display: block;
    font-size: 12px;
  }
</style>