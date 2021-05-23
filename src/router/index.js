import Vue from 'vue'
import VueRouter from 'vue-router'
import OverviewPage from "../views/village/OverviewPage";
import MapPage from "../views/map/MapPage";

Vue.use(VueRouter)

const routes = [{
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Register/Register.vue')
    },
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
]

const router = new VueRouter({
    routes
})

export default router