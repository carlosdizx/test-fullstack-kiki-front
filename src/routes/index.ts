import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

let routes: Array<RouteRecordRaw>;
routes = [
  {
    path: "/",
    component: import("../view/Home.vue"),
    name: "Home"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
