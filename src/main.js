import { createApp } from 'vue';
import App from './App.vue';
import router from '/@/router';
import store from '/@/store';
import 'element-plus/dist/index.css';
// import 'element-plus/theme-chalk/el-message-box.css';
// import 'element-plus/theme-chalk/el-message.css';
// import 'element-plus/theme-chalk/el-loading.css';
import '/@/style/index.scss';

const app = createApp(App);

app
	.use(router)
	.use(store)
	.mount('#app');
