import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
	{path: '/', name: 'Home', component: () => import('/@/views/Home/index.vue')},
	{path: '/settings', name: 'Settings', component: () => import('/@/views/Settings/index.vue')},
	{path: '/settings/about', name: 'SettingsAbout', component: () => import('/@/views/Settings/About.vue')},
	{path: '/invest-distribution', name: 'InvestDistribution', component: () => import('/@/views/Invest/Distribution.vue')},
	{path: '/my-day', name: 'MyDay', component: () => import('/@/views/MyDay/index.vue')},
];

export default createRouter({
	routes,
	history: createWebHashHistory(),
});
