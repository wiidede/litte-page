import router from '/@/router';

// base Utils
export const isObject = (value) => {
	return Object.prototype.toString.call(value) === '[object Object]';
};

export const setCSSVariable = (key, value) => {
	document.documentElement.style.setProperty(key, value);
};


// navigation
export const navTo = (path) => {
	router.push(path).then(void 0);
};

export const goBack = () => {
	router.back();
};


// change theme
export const changeTheme = (theme) => {
	document.documentElement.setAttribute('data-theme', theme);
};
