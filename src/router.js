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

  {
    path: "/bioaia",
    name: "biolagunevadaia",
    component: () => import("../src/pages/bioaia.vue"),
  },

  {
    path: "/klaas",
    name: "klaas",
    component: () => import("../src/pages/klaas.vue"),
  },

  {
    path: "/milleks-sorteerida",
    name: "milleks",
    component: () => import("../src/pages/milleks-sorteerida.vue"),
  },

  {
    path: "/ohtlikud",
    name: "ohtlikud",
    component: () => import("../src/pages/ohtlikud.vue"),
  },

  {
    path: "/paber",
    name: "paber",
    component: () => import("../src/pages/paber.vue"),
  },

  {
    path: "/plast",
    name: "plast",
    component: () => import("../src/pages/plast.vue"),
  },

  {
    path: "/tekstiilkolbmatu",
    name: "tekstiilkolbmatu",
    component: () => import("../src/pages/tekstiilkolbmatu.vue"),
  },

  {
    path: "/tekstiil",
    name: "tekstiil",
    component: () => import("../src/pages/tesktiil.vue"),
  },

  {
    path: "/vana",
    name: "vana",
    component: () => import("../src/pages/vana.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});