import Vue from 'vue'
import VueRouter from 'vue-router'
import OverviewPage from "../views/village/OverviewPage";
import MapPage from "../views/map/MapPage";
import TribePage from "../views/tribe/TribePage";

Vue.use(VueRouter)

const routes = [
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
    {
        path: '/tribe',
        name: 'TribePage',
        component: TribePage
    },
]

const router = new VueRouter({
    routes
})

export default router
