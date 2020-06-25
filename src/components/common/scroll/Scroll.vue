<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default () {
          return 0
        }
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType
      });
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
    },
    methods: {
      scrollTo (x, y ,time=500) {
        this.scroll.scrollTo(x, y, time)
      }
    }

  }
</script>

<style scoped>
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>