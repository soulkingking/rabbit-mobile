<template>
  <van-nav-bar
    :title="title"
    :left-arrow="leftArrow"
    @click-left="back"
    fixed
    placeholder
    :z-index="2"
  />
</template>

<script>
export default {
  name: "RabbitHeader",
  data() {
    return {
      title: "",
      leftArrow: false
    };
  },

  watch: {
    $route(to, from) {
      this.title = to.meta.title;
      this.leftArrow = to.meta.leftArrow;
    }
  },
  methods: {
    back() {
      if (this.$route.meta.leftArrow) {
        this.$router.goBack();
      }
    }
  },
  created() {
    this.title = this.$route.meta.title;
    this.leftArrow = this.$route.meta.leftArrow;
  }
};
</script>

<style lang="less" scoped>
</style>