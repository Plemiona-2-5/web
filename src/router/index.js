import Vue from 'vue';
import VueRouter from 'vue-router';
import OverviewPage from '../views/village/OverviewPage';
import MapPage from '../views/map/MapPage';
import HomePage from '../views/home/HomePage';

Vue.use(VueRouter);

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
		path: '/home',
		name: 'HomePage',
		component: HomePage
	}
];

const router = new VueRouter({
	routes
});

export default router;
