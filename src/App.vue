<script setup>
import AppNavigation from '/@/components/AppNavigation.vue';

import {computed, watchEffect} from 'vue';
import {useStore} from 'vuex';
import {changeTheme, setCSSVariable} from '/@/utils';
import {userPreferenceKey} from '/@/utils/constants';

const store = useStore();

// global init

// global color
const color = computed(() => store.state.settings.color);
watchEffect(() => {
	setCSSVariable('--main', color.value);
	setCSSVariable('--select', `${color.value}60`);
	setCSSVariable('--hover', `${color.value}20`);
});

// global theme
const theme = computed(() => store.state.settings.theme);
// listen media query : prefers-color-scheme
const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');
// system theme change handler
const handleColorSchemeChange = evt => {
	if (evt.matches) {
		changeTheme('dark');
	} else {
		changeTheme('light');
	}
};
watchEffect(() => {
	if (theme.value === 'Follow System') {
		handleColorSchemeChange(mediaQueryListDark);
		mediaQueryListDark.addEventListener('change', handleColorSchemeChange);
	} else if (theme.value) {
		changeTheme(theme.value.toLowerCase());
		mediaQueryListDark.removeEventListener('change', handleColorSchemeChange);
	}
});

// media query device width
const mediaQueryListPhone = window.matchMedia('(max-width: 768px)');
const handleScreenWidthChange = evt => {
	store.commit('application/setIsPhone', !!evt.matches);
};
handleScreenWidthChange(mediaQueryListPhone);
mediaQueryListPhone.addEventListener('change', handleScreenWidthChange);

// save settings, user preference
watchEffect(() => {
	const settings = {
		color: color.value,
		theme: theme.value,
	};
	localStorage.setItem(userPreferenceKey, JSON.stringify(settings));
});

</script>

<template>
  <app-navigation />
  <main>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style lang="scss">
html {
  overflow: hidden;
}

body {
  margin: 0;
  background: var(--background);
  transition: background-color ease .3s;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color);
}

#app {
  transition: color ease .3s;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  & > main {
    flex: 1;
    background: var(--background-gray);
    transition: background-color ease .3s;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
}
</style>
