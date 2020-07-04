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
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false;
        }
      },
      isClick : {
        type: Boolean,
        default() {
          return false;
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
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: this.isClick
      });

      if (this.probeType === 2 || this.probeType === 3 ) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
          this.$emit('sticky', position)
        });
      }

      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        });
      }

    },
    methods: {
      scrollTo (x, y ,time=500) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp () {
        this.scroll.finishPullUp()
      },
      refresh () {
        this.scroll.refresh();
      }
    }

  }
</script>

<style scoped>
</style>