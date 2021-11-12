// initial state
const state = () => ({
	isPhone: false,
	navigationShow: true,
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
	setIsPhone(state, isPhone) {
		state.isPhone = isPhone;
	},
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
