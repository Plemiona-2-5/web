import Vue from "vue";
import VueRouter from "vue-router";
import OverviewPage from "../views/village/OverviewPage";
import MapPage from "../views/map/MapPage";
import LoginPage from "../views/login/LoginPage";
import RegisterPage from "../views/Register/Register"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "OverviewPage",
        component: OverviewPage,
    },
    {
        path: "/map",
        name: "MapPage",
        component: MapPage,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage,
    },
];

const router = new VueRouter({
    routes,
});

export default router;