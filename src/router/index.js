import Vue from "vue";
import VueRouter from "vue-router";
import OverviewPage from "../views/village/OverviewPage";
import MapPage from "../views/map/MapPage";
import TribePage from "../views/tribe/TribePage";
import TribeBrowser from "../views/tribe/content/TribeBrowser";
import LoginPage from "../views/login/LoginPage";
import RegisterPage from "../views/Register/Register"
import HomePage from '../views/home/HomePage';

Vue.use(VueRouter);

const routes = [
  {
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
    path: '/tribe',
    name: 'TribePage',
    component: TribePage
  },
  {
    path: '/tribe-browser',
    name: 'TribeBrowser',
    component: TribeBrowser
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
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