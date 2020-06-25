<template>
  <div class="tab-controller">
    <div class="tab-controller-item"  v-for="(item, index) in title" :key="index" @click="change(index)" :class="{active: currentIndex === index}">
      <div>{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabController",
    data () {
      return {
        currentIndex: 0
      }
    },
    props: {
      title: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      change (index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-controller {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 20px;
    color: #7b807f;
    position: sticky;
    top: 44px;
    line-height: 20px;
    background-color: white;
  }

  .tab-controller-item {
    margin: 10px 0px;
  }

  .active {
    color: var(--color-high-text);
    padding-bottom: 5px;
    border-bottom: 4px solid pink;
  }
</style>