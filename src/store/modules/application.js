// initial state
const state = () => ({
	navigationShow: true,
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
	setNavigationShow(state, navigationShow) {
		state.navigationShow = navigationShow;
	},
	toggleNavigationShow(state) {
		state.navigationShow = !state.navigationShow;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
