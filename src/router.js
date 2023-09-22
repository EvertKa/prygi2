import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "homepage",
    component: () => import("../src/pages/avaleht.vue"),
  },

  {
    path: "/bio",
    name: "biolagunevad",
    component: () => import("../src/pages/bio.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});