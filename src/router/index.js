import {createRouter, createWebHashHistory} from 'vue-router';
// import { ElLoading } from 'element-plus';

const routes = [
	{path: '/', name: 'Home', component: () => import('/@/views/Home/index.vue')},
	{path: '/settings', name: 'Settings', component: () => import('/@/views/Settings/index.vue')},
	{path: '/settings/about', name: 'SettingsAbout', component: () => import('/@/views/Settings/About.vue')},
	{path: '/invest-distribution', name: 'InvestDistribution', component: () => import('/@/views/Invest/Distribution.vue')},
	{path: '/my-day', name: 'MyDay', component: () => import('/@/views/MyDay/index.vue')},
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// let loadingInstance = null;

router.beforeEach((to, from, next) => {
  // loadingInstance = ElLoading.service({
  //   fullscreen: true,
  // });
  next();
});

router.afterEach(() => {
  // loadingInstance.close();
});

export default router;
