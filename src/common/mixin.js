import BackTop from "components/content/backtop/BackTop";
export const MixinBackTop = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
  }
};