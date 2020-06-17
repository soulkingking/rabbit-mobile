<template>
  <r-container>
    <r-header></r-header>
    <r-main>
      <van-tabs v-model="activeName" sticky v-if="active==1" animated line-width="30px">
        <van-tab title="标签 1" name="a">
          <div class="text-center">
            <van-button type="info" @click="toShoppingCart">购物车</van-button>
          </div>
        </van-tab>
        <van-tab title="标签 2" name="b">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh" style="margin-bottom:50px">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <van-cell v-for="item in list" :key="item" :title="item" class="text-center" />
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="标签 3" name="c"></van-tab>
      </van-tabs>
      <van-tabbar v-model="active">
        <van-tabbar-item badge="3">
          <span>自定义</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </r-main>
  </r-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 1,
      activeName: "a",
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      },
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    toShoppingCart() {
      this.$router.push({ path: "/shoppingCart" });
    }
  }
};
</script>

<style lang="less" scoped>
</style>
