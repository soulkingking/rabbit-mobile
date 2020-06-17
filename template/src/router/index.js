import Vue from "vue";
import VueRouter from "vue-router";
VueRouter.prototype.goBack = function() {
  this.isBack = true;
  this.back();
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "default",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/Home.vue"),
    meta: {
      title: "首页",
      leftArrow: false,
      auth: false,
    },
  },
  {
    path: "/shoppingCart",
    name: "ShoppingCart",
    component: () => import("@/views/shopping-cart/ShoppingCart.vue"),
    meta: {
      title: "购物车",
      leftArrow: true,
      auth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 路由权限
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((recode) => recode.meta.auth)) {
    // let token = store.state.setting.token;
    // let userId = store.state.setting.userId;
    // 判断是否已经登录
    if (token && userId) {
      // 判断是否已经获取到了用户信息
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    next();
  }
});

export default router;
