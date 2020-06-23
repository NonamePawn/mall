<template>
  <div id="swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div v-for="(item, index) in slideCount" class="indicator-item" :class="{active: index === currentIndex - 1}" :key="index"></div>
      </slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Swiper",
    props: {
      interval: {
        type: Number,
        default: 3000
      },
      duration: {
        type: Number,
        default: 300
      },
      moveRatio: {
        type: Number,
        default: 0.25
      },
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        slideCount: 0 , //元素个数
        totalWidth: 0 , //swiper的宽度
        swiperStyle: {}, //swiper的样式
        currentIndex: 1 , //当前的Index
        scrolling: false, //是否正在滚动
      }
    },
    mounted() {

      setTimeout(() => {
        // 1.操作DOM,在前后添加Slide
        this.handleDom();

        //2.开启定时器
        this.startTimer();
      }, 100)

    },
    methods: {
      handleDom () {
        //1.获取要操作的元素
        let swiperEl = document.querySelector('.swiper');
        let slidesEls = swiperEl.getElementsByClassName('slide');

        //2.保存个数
        this.slideCount = slidesEls.length;

        //3.如果大于1个,那么在前后分别添加slide
        if (this.slideCount > 1) {
          let cloneFirst = slidesEls[0].cloneNode(true);
          let colneLast = slidesEls[this.slideCount - 1].cloneNode(true);
          swiperEl.insertBefore(colneLast, slidesEls[0]);
          swiperEl.appendChild(cloneFirst);
          this.totalWidth = swiperEl.offsetWidth + 0.5;
          this.swiperStyle = swiperEl.style;
        }

        //4.让swiper元素,显示第一个(目前是显示前面添加的最后一个元素)
        this.setTransform(-this.totalWidth)
      },

      setTransform (position) {
        this.swiperStyle.transform = `translateX(${position}px)`;
        this.swiperStyle['-webkit-transform'] = `translateX(${position}px)`;
        this.swiperStyle['-ms-transform'] = `translateX(${position}px)`;
      },

      /*
      * 定时器操作
      * */
      startTimer () {
        this.timer = setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth)
        }, this.interval)
      },

      stopTimer () {
        window.clearInterval(this.timer);
      },

      scrollContent (currentPosition ){
        //1.设置正在滚动
        this.scrolling = true;

        //2.开始滚动动画
        this.swiperStyle.transition = this.duration + 'ms';
        this.setTransform(currentPosition);

        //3.判断滚动到的位置
        this.checkPosition();

        //4.滚动完成
        this.scrolling = false;
      },

      checkPosition () {
        window.setTimeout(() => {
          //1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1){
            this.currentIndex = 1 ;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }else if (this.currentIndex <= 0 ) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }

          //2.结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex - 1)
        }, this.duration)
      },
      touchStart (e) {
        //1.如果正在滚动,不可以拖动
        if (this.scrolling) return null;

        //2.停止定时器
        this.stopTimer();

        //3.保存开始滚动的位置
        this.startX = e.touches[0].pageX;

      },
      touchMove (e) {
        //1.计算出用户拖动的距离
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.startX;
        let currentPosition = -this.currentIndex * this.totalWidth;
        let moveDistance = this.distance + currentPosition;

        //2.设置当前的位置
        this.setTransform(moveDistance)
      },
      touchEnd (e) {
        //1.获取移动的距离
        let currentMove = Math.abs(this.distance);

        //2.判断最终的距离
        if (this.distance === 0) {
          return null;
        }else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
          //右边移动超过0.25
          this.currentIndex--;
        }else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
          //左边移动超过0.25
          this.currentIndex++;
        }

        //移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth)

        //移动后重新开始开启定义器
        this.startTimer()
      }
    }
  }
</script>

<style scoped>
  #swiper {
   overflow: hidden;
   position: relative;
 }

  .swiper {
    display: flex;
  }

  .indicator {
    position: absolute;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    bottom: 8px;
  }

  .indicator-item{
    background-color: white;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin: 0 5px;

  }

  .active {
    background-color: red;
  }
</style>