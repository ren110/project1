const path = require("path");

module.exports = {
  transpileDependencies: true,
  // devServer: {
  //   hot: true,
  //   open: true,
  //   proxy: {
  //     "/company-ctrl-server": {
  //       target: "http://172.20.4.12:8084/", //代理地址，这里设置的地址会代替axios中设置的baseURL
  //       changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
  //       pathRewrite: {
  //         "^/company-ctrl-server": "",
  //       },
  //     },
  //   },
  // },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@i": path.resolve(__dirname, "./src/assets"),
      },
    },
  },
};
