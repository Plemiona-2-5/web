import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from "../views/village/Overview";

Vue.use(VueRouter)

const routes = [
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
]

const router = new VueRouter({
  routes
})

export default router
