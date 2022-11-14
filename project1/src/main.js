import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $url from "@/fetch/index";
import $https from "@/fetch/axios";
import utils from "@/utils/tool";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import * as ElIconList from "@element-plus/icons";
const app = createApp(App);
console.log('ctrl+cmd+i -->函数注释快捷键')
// 配置图标
for (const name in ElIconList) {
  app.component(name, ElIconList[name]);
}
console.log($url, " $url;");
// 添加公共属性
app.config.globalProperties.$url = $url;
app.config.globalProperties.$https = $https;
app.config.globalProperties.utils = utils;

app.use(store).use(router).use(ElementPlus, { locale }).mount("#app");
