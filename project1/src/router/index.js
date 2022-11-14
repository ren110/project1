import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
const files = require.context('./modules', false, /\.js$/);
const modules = {};
files.keys().forEach((key) => { 
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});
let routes=[]
for (const key in modules) {
    routes.push(...modules[key])
} 

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;



