const path = require("path");

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  transpileDependencies: ["vant"],
  chainWebpack(config) {
    // 在chainWebpack中添加下面的代码
    config.entry("main").add("@babel/polyfill"); // main是入口js文件
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/index.less")],
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
  // devServer: {
  //   proxy: {  //配置跨域
  //     '/visual': {
  //       target: 'http://172.31.10.30:8082/visual',  //这里后台的地址模拟的;应该填写你们真实的后台接口
  //       changOrigin: true,  //允许跨域
  //       pathRewrite: {
  //         /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
  //           实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
  //          */
  //         '^/visual': '/'
  //       }
  //     },
  //   }
  // },
};
