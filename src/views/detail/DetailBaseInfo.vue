<template>
  <div class="base-info">
      <div class="title">
        <img :src="baseInfo.title_img" alt="">
        <p>{{baseInfo.title_text}}</p>
      </div>
      <div class="desc">{{baseInfo.desc}}</div>
      <div class="price-commments">
        <div class="price">{{baseInfo.price}}</div>
        <div class="comments">累计评论<br>{{baseInfo.comments}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      baseInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin: 10px 0;
    padding: 3px;
    border-bottom: 1px solid #eeeeee;
  }

  .title {
    margin: 5px 0;
  }
  .title img {
    display: inline;
  }
  .title p{
    margin-left: 3px;
    display: inline;
    font-size: 18px;
  }

  .desc {
    margin-bottom: 5px;
    color: #e4393c;
    font-size: 12px;
  }

  .price-commments {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .price-commments .price{
    font-size: 22px;
    color: var(--color-high-text);
  }

  .price-commments .comments{
    font-size: 13px;
    color: gray;
  }
</style>