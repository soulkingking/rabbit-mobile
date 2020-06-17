<template>
  <r-container class="bg-gray-2">
    <r-header></r-header>
    <r-main class="padding-sm">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh" style="margin-bottom:80px">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <!-- <van-cell v-for="item in list" :key="item" :title="item" class="text-center" /> -->
          <div v-for="(item,index) in list" :key="item.id" class="bg-white radius-sm margin-b-sm">
            <van-cell center :border="false" class="radius-tlr-sm">
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <van-checkbox :value="isShopSelectedAll[index]" @click="toggleAll(item)">店铺名称</van-checkbox>
              </template>
            </van-cell>
            <van-swipe-cell v-for="product in item.products" :key="product.id">
              <template #left>
                <van-button square type="primary" text="选择" class="swipt-btn" />
              </template>
              <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="bg-white">
                <template #thumb>
                  <van-checkbox v-model="product.checked">
                    <van-image src="https://img.yzcdn.cn/vant/ipad.jpeg"></van-image>
                  </van-checkbox>
                </template>
                <template #tags>
                  <van-tag plain type="danger">标签</van-tag>
                  <van-tag plain type="danger" class="margin-l-xs">标签</van-tag>
                </template>
                <template #footer>
                  <van-button size="mini" round>按钮</van-button>
                  <van-button size="mini" round>按钮</van-button>
                </template>
              </van-card>
              <template #right>
                <van-button square type="danger" text="删除" class="swipt-btn" />
                <van-button square class="swipt-btn" type="primary" text="收藏" />
              </template>
            </van-swipe-cell>

            <van-cell value="内容" is-link center :border="false" class="radius-blr-sm">
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <van-tag type="danger" plain>标签</van-tag>
                <span class="custom-title margin-l-xs">单元格</span>
              </template>
            </van-cell>
          </div>
        </van-list>
      </van-pull-refresh>
      <van-submit-bar :price="3050" button-text="提交订单">
        <van-checkbox :value="isSelectedAll" @click="toggleAll(list)">全选</van-checkbox>
        <template #tip>
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </template>
      </van-submit-bar>
    </r-main>
  </r-container>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  computed: {
    isSelectedAll() {
      return this.isShopSelectedAll.every(item => item);
    },
    isShopSelectedAll() {
      let arr = [];
      this.list.forEach((item, index) => {
        arr[index] = item.products.every(product => product.checked);
      });
      return arr;
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push({
            title: "店铺名称",
            id: this.list.length + 1,
            products: [
              {
                id: `a${this.list.length + 1}`,
                checked: false
              },
              {
                id: `b${this.list.length + 1}`,
                checked: false
              }
            ]
          });
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
    toggleAll(all) {
      if (all instanceof Array) {
        let bool = !this.isSelectedAll;
        all.forEach(item =>
          item.products.forEach(product => (product.checked = bool))
        );
      } else {
        let index = this.list.indexOf(all);
        let bool = !this.isShopSelectedAll[index];
        for (let i = 0; i < all.products.length; i++) {
          all.products[i].checked = bool;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.van-card__thumb {
  width: 8.125rem;
}

.swipt-btn {
  height: 100%;
}
</style>