<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "" //初始过渡动画方向
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      // 切换动画
      let isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退

      if (isBack) {
        this.transitionName = "van-slide-right";
      } else {
        this.transitionName = "van-slide-left";
      }

      this.$router.isBack = false;
    }
  },
  created() {
    this.$router.isBack = true;
  }
};
</script>

<style lang="less">
html,
body {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.Router {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000;
}
</style>
