// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import * as ElIconList from "@element-plus/icons";
const app = createApp(App);
for (const name in ElIconList) {
  app.component(name, ElIconList[name]);
}
app.use(store).use(router).use(ElementPlus, { locale }).mount("#app");
