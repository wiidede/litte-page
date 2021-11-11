// reload settings, user preference
import {isObject} from '/@/utils';
import {userPreferenceKey} from '/@/utils/constants';

const settings = JSON.parse(localStorage.getItem(userPreferenceKey));

// initial state
const state = () => isObject(settings) ? settings : ({
	color: '#FF9A76',
	theme: 'Follow System',
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
	setColor(state, color) {
		state.color = color;
	},
	setTheme(state, theme) {
		state.theme = theme;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
