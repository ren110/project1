import axios from "axios";
// 下载excle 
/******* 
 * @description:  下载excel或者word
 * @param {*} url 接口请求地址
 * @param {*} name 下载文件名称
 * @param {*} obj 下载所需参数
 * @return {*}
 */
function downTableList(url, name, obj) {
  console.log(url, "===");
  //导出列表
  let params = {};
  for (const key in obj) {
    if (obj[key]) {
      params[key] = obj[key];
    }
  }
  var that = this;
  axios({
    url: url,
    responseType: "blob",
    params: params,
    method: "get",
  })
    .then((res) => {
      let reader = new FileReader();
      reader.readAsText(res.data);
      reader.onload = function (result) {
        console.log(result, "result");
        try {
          let resData = JSON.parse(result.target.result); // 解析对象成功，说明是json数据
          if (resData.retCode !== "00000") {
            that.$message({
              type: "error",
              message: resData.message,
            });
          }
        } catch (err) {
          let blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
          let objectUrl = window.URL.createObjectURL(blob);
          var alink = document.createElement("a");
          alink.href = objectUrl;
          let moment = require("moment");
          let today = moment().format("YYYY-MM-DD");
          alink.download = name + today + ".xlsx";
          alink.click();
        }
      };
    })
    .catch((err) => {
      console.log(err, "状态码不是200");
    });
}
/******* 
 * @description:  获取地址栏参数
 * @param {*} key
 * @return {*}
 */
function getUrlParam(key) {
  // console.log(window.location.search, ' window.location.search ');
  var after = window.location.search || window.location.hash;
  if (after.indexOf("?") === -1) return null; // 如果url中没有传参直接返回空
  // key存在先通过search取值如果取不到就通过hash来取
  after = after.split("?")[1];
  if (after) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = after.match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    } else {
      return null;
    }
  }
}

/******* 
 * @description: 埋点
 * @return {*}
 */
// 埋点
/* 记录页面访问日志PV */
function getTraceFeont() {
  var params = {
    systemId: "FA01.3710078", //子系统编号
    artifactId: "repair_front", //发布单元
    page: window.location.href, //页面路径
  };
  axios
    .post("/trace-server/api/v1/trace/front", params)
    .then((response) => {
      if (response.data.success) {
        console.log("upload visit log success");
      }
    })
    .catch((error) => {
      if (error.response) {
        console.log("upload visit log error");
      }
    });
}
/******* 
 * @description: 设置cookie
 * @param {*} name
 * @param {*} value
 * @param {*} day
 * @return {*}
 */
function setCookie(name, value, day) {
  document.cookie = name + "=" + null;
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = name + "=" + null + ";expires=-1";
  document.cookie = name + "=" + value + ";expires=" + date;
}
function getCookie(name) {
  let arr = document.cookie.split(";");
  for (var i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split("=");
    if (arr2[0].trim() === name) {
      return arr2[1];
    }
  }
}
function clearCookie(name) {
  this.setCookie(name, null, -1);
}
export default {
  getTraceFeont,
  downTableList,
  setCookie,
  getCookie,
  clearCookie,
  getUrlParam,
};
