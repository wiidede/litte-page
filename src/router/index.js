import {createRouter, createWebHashHistory} from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const routes = [
  {path: '/', name: 'Home', component: () => import('/@/views/Home/index.vue')},
  {path: '/settings', name: 'Settings', component: () => import('/@/views/Settings/index.vue')},
  {path: '/settings/about', name: 'SettingsAbout', component: () => import('/@/views/Settings/About.vue')},
  {
    path: '/invest-distribution',
    name: 'InvestDistribution',
    component: () => import('/@/views/Invest/Distribution.vue'),
  },
  {path: '/my-day', name: 'MyDay', component: () => import('/@/views/MyDay/index.vue')},
  {path: '/my-resume', name: 'MyResume', component: () => import('/@/views/MyResume/index.vue')},
  {path: '/my-test', name: 'MyTest', component: () => import('/@/views/MyTest/index.vue')},
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('/@/components/NotFound.vue')},
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
