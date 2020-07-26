import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Start/HomeView.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/Start/AboutView.vue")
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Start/Services.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Start/Contact.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard/index.vue")
  },
  {
    path: "/artist",
    name: "Artist",
    component: () => import("../views/Dashboard/Generator/FilterByArtist.vue")
  },
  {
    path: "/positions",
    name: "Positions",
    component: () => import("../views/Dashboard/Generator/FilterByPosition.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/Start/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
