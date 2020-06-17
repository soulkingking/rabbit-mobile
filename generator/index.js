module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      axios: "^0.19.2",
      "core-js": "^3.6.5",
      "date-fns": "^2.14.0",
      swiper: "^5.4.2",
      vant: "^2.8.5",
      vue: "^2.6.11",
      "vue-awesome-swiper": "^4.1.1",
      "vue-router": "^3.2.0",
      vuex: "^3.4.0",
      "vuex-persistedstate": "^3.0.1",
    },
    devDependencies: {
      "@babel/polyfill": "^7.10.1",
      "@vue/cli-plugin-babel": "~4.4.0",
      "@vue/cli-plugin-eslint": "~4.4.0",
      "@vue/cli-plugin-router": "~4.4.0",
      "@vue/cli-plugin-vuex": "~4.4.0",
      "@vue/cli-service": "~4.4.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "babel-eslint": "^10.1.0",
      eslint: "^6.7.2",
      "eslint-plugin-prettier": "^3.1.3",
      "eslint-plugin-vue": "^6.2.2",
      less: "^3.0.4",
      "less-loader": "^5.0.0",
      prettier: "^1.19.1",
      "style-resources-loader": "^1.3.3",
      "vue-cli-plugin-style-resources-loader": "^0.1.4",
      "vue-template-compiler": "^2.6.11",
    },
  });

  if (options.router) {
    console.log("router");
  }
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render("../template");
};
