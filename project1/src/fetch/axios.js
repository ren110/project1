// import Vue from "vue";
import axios from "axios";
// import qs from 'qs';
import utils from "@/utils/tool";
// Vue.prototype.$axios = axios;
axios.defaults.timeout = 600000;

// 在超时前，所有请求都会等待 8 秒
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.get["Content-Type"] = "application/json;charset=UTF-8";
// 配置接口地址
axios.defaults.withCredentials = false;
axios.interceptors.request.use(
  (config) => {
    let urlPath = window.location.href;
    if (
      urlPath.includes("mobileVertify") ||
      urlPath.includes("mobileMngFeedback")
    ) {
      config.headers.token = utils.getUrlParam("accessToken");
      config.headers.appId = "mobile";
      config.headers.appPwd = "mobile";
    }
    return config;
  },
  (error) => {
    // 对请求错误做处理
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error, "error--");

    return Promise.reject(error.message);
  }
);

function fetchPost(url, param, that, loadingInstance, message) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, param)
      .then(
        (response) => {
          if (loadingInstance) {
            loadingInstance.close();
          }
          if (response.data.retCode === "00000") {
            if (message) {
              that.$message({
                message: "操作成功",
                type: "success",
                duration: 3000,
                offset: 200,
              });
            }
            resolve(Object.freeze(response.data.result));
          } else {
            that.$message.error(response.data.message);
            return false;
          }
        },
        (err) => {
          that.$message.error("服务端返回异常");
          reject(err);
        }
      )
      .catch((error) => {
        console.log("服务端catch异常");
        reject(error);
      });
  });
}
export default {
  fetchPost,
};
