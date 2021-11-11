import { createStore } from 'vuex';
import settings from './modules/settings';
import application from './modules/application';

const store = createStore({
	state: {
		version: '0.0.1',
	},
	modules: {
		settings,
		application,
	},
});

export default store;
