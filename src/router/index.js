import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
=======
import OverviewPage from "../views/village/OverviewPage";
import MapPage from "../views/map/MapPage";
>>>>>>> dev

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register/Register.vue')
  }
=======
    {
        path: '/',
        name: 'OverviewPage',
        component: OverviewPage
    },
    {
        path: '/map',
        name: 'MapPage',
        component: MapPage
    },
>>>>>>> dev
]

const router = new VueRouter({
    routes
})

export default router
