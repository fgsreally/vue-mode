import Vue from "vue";
import VueRouter from "vue-router";
import _import from './_import';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: _import('Home'),
  },
  {
    path: "/about",
    name: "About",
    component: _import('About'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
