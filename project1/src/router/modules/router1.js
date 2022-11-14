export default [
    {
      path: "/base",
      name: "base",
      component: () => import("@/views/CarouselView.vue"), //children是容器内的东西
      children: [
        {
          path: "/",
          name: "CarouselView",
          component: () => import("@/views/CarouselView.vue"),
        },
        {
          path: "/carousel",
          name: "carousel",
          component: () => import("@/views/CarouselView.vue"),
        },
        {
          path: "/tableview",
          name: "tableview",
          component: () => import("@/views/TableView.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/AboutView.vue"),
        },
      ],
    },
  ];