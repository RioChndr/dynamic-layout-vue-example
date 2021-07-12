import VueRouter from "vue-router";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./pages/home.vue"),
      meta: {
        layout: () => import("./layout/fullpage")
      }
    },
    {
      path: "/about",
      component: () => import("./pages/about.vue"),
      meta: {
        layout: () => import("./layout/fullpage")
      }
    },
    {
      path: "/me",
      component: () => import("./pages/me.vue"),
      meta: {
        layout: () => import("./layout/special")
      }
    }
  ]
});
