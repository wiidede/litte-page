import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', name: 'Home',  component: () => import('/@/views/Home/index.vue')},
  {path: '/page', name: 'Page',  component: () => import('/@/views/Home/index.vue')},
  {path: '/settings', name: 'Settings',  component: () => import('/@/views/Settings/index.vue')},
  {path: '/settings/about', name: 'SettingsAbout',  component: () => import('/@/views/Settings/About.vue')},
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
