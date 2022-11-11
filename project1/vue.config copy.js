const path = require("path");
const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

module.exports = {
  publicPath: "/company-ctrl",
  outputDir: "dist/company-ctrl",
  assetsDir: "static",
  productionSourceMap: false,
  runtimeCompiler: true,
  devServer: {
    proxy: {
      "/company-ctrl-server": {
        target: "http://172.20.4.12:8084/", //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          "^/company-ctrl-server": "",
        },
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@i": path.resolve(__dirname, "./src/assets"),
      },
    },
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
};
