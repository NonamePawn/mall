<template>
  <div class="params">
    <table>
      <tr v-for="item in params">
        <td class="name">{{item.split('：')[0]}}</td>
        <td><span>{{item.split('：')[1]}}</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      params: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params table {
    width: 100%;
  }

  .params tr {
    height: 40px;
    font-size: 16px;
    color: gray;
  }

  .params td {
    line-height: 40px;
    border-bottom: 1px dashed #e4e4e4;
  }

  .params tr td span {
    color: var(--color-high-text);
  }

  .name {
    padding-left: 10px;
    width: 45%;
  }
</style>