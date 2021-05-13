import Vue from 'vue'
import VueRouter from 'vue-router'
import OverviewPage from "../views/village/OverviewPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'OverviewPage',
    component: OverviewPage
  },
]

const router = new VueRouter({
  routes
})

export default router
