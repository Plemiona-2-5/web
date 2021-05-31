import Vue from 'vue';
import VueRouter from 'vue-router';
import OverviewPage from '../views/village/OverviewPage';
import MapPage from '../views/map/MapPage';
import TribePage from '../views/tribe/TribePage';
import TribeBrowser from '../views/tribe/content/TribeBrowser';
import LoginPage from '../views/login/LoginPage';
import EmailVerification from '../views/emailVerification/EmailVerification';
import RegisterPage from '../views/Register/Register';
import HomePage from '../views/home/HomePage';
import BarracksPage from '../views/barracks/BarracksPage';
import TribeCreate from "../views/tribe/content/TribeCreate";
import AttackPage from '../views/attack/AttackPage';
import TribeViewer from "../views/tribe/content/TribeViewer";

Vue.use(VueRouter);

const routes = [
    {
        path: '/overview',
        name: 'OverviewPage',
        component: OverviewPage
    },
    {
        path: '/map',
        name: 'MapPage',
        component: MapPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
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
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
    {
        path: '/emailVerification/:code',
        name: 'EmailVerificationPage',
        component: EmailVerification
    },
    {
        path: '/barracks',
        name: 'BarracksPage',
        component: BarracksPage
    },
    {
        path: '/createTribe',
        name: 'TribeCreate',
        component: TribeCreate
    },
    {
        path: '/attack',
        name: 'AttackPage',
        component: AttackPage
    },
	{
		path: '/tribe-viewer',
		name: 'TribeViewer',
		component: TribeViewer
	},
];

const router = new VueRouter({
    routes
});

export default router;
