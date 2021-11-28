import router from '/@/router';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

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


/**
 * get time between 0 - 24h
 * @param time
 */
export const formatTimeValue = (time) => {
  const Hour = 60;
  if (time < 0) {
    time = 24 * Hour + (time % (24 * Hour));
  }
  time = time % (24 * Hour);
  return time;
};

/**
 * get today's time formatted
 * @param time
 * @param startTime
 * @returns {string}
 */
export const formatTimeToday = (time, startTime) => {
  return dayjs.duration(time + startTime, 'minutes').format('HH:mm');
};

/**
 * getFormattedTime
 * @returns {string}
 */
export const getFormattedTime = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
};
