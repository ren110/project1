import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/base",
    name: "base",
    component: HomeView, //children是容器内的东西
    children: [
      {
        path: "/",
        name: "CarouselView",
        component: () => import("../views/CarouselView.vue"),
      },
      {
        path: "/carousel",
        name: "carousel",
        component: () => import("../views/CarouselView.vue"),
      },
      {
        path: "/tableview",
        name: "tableview",
        component: () => import("../views/TableView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
