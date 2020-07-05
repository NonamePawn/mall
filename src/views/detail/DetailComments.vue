<template>
  <div class="comments">
    <div class="comment" v-for="item in comments">
      <div class="user-info">
        <img :src="item.img_url" alt="">
        <div class="username">{{item.username}}</div>
      </div>
      <div class="content">
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailComments",
    props: {
      comments: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .comments {
    border-top: 2px dashed #e2e2e2;
  }

  .comments .user-info {
    display: flex;
    align-content: center;
    margin: 10px 5px;
  }

  .comments .user-info img {
    width: 30px;
    height: 30px;
    border-radius: 40%;
  }

  .comments .user-info .username {
    line-height: 30px;
    margin-left: 10px;
  }

  .comments .content {
    padding: 5px;
  }

  .comments .content p {
    font-size: 14px;
    line-height: 20px;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
</style>