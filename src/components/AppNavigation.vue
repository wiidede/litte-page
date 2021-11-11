<script setup>
import {ref, reactive, watchEffect, computed} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {navTo} from '/@/utils';
import menu from '/@/config/Menu';

const store = useStore();

// collapse and show
let isCollapse = ref(false);
const navigationShow = computed(() => store.state.application.navigationShow);

const handleCollapse = () => {
	isCollapse.value = !isCollapse.value;
};

// nav status
const router = useRouter();
const navs = reactive(menu);
watchEffect(() => {
	navs.forEach(nav => {
		nav.active = nav.path === '/' ?
			router.currentRoute.value.path === nav.path :
			router.currentRoute.value.path.startsWith(nav.path);
	});
});
</script>

<template>
  <nav :class="{collapse: isCollapse, 'nav-hidden': !navigationShow}">
    <div
      v-for="(nav, index) in navs"
      :key="`nav${index}`"
      class="nav-item"
      :class="{active: nav.active}"
      @click="navTo(nav.path)"
    >
      <span
        class="iconfont"
        :class="nav.active ? nav.iconActive : nav.icon"
      />
      <span v-show="!isCollapse">{{ nav.name }}</span>
    </div>
    <div
      class="copyright-info"
    >
      {{ isCollapse ? '' : 'Copyright © 2021 - 2021 Wiidede' }}
    </div>
    <div
      class="collapse-button"
      @click="handleCollapse"
    >
      <span
        class="iconfont"
        :class="isCollapse ? 'icon-arrow-right-s-line' : 'icon-arrow-left-s-line'"
      />
      <span v-show="!isCollapse">collapse</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 120px;
  transition: width ease .3s;

  user-select: none;

  .nav-item {
    display: inline-flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    transition: background-color ease .3s, color ease .3s;
    padding: 8px 0;

    &:hover {
      background: var(--hover);
      color: var(--main);
    }

    .iconfont {
      font-size: 26px;
      margin: 0 8px;
    }

    &.active {
      color: var(--main);
    }
  }

  .copyright-info {
    margin: auto 0 8px 0;
    color: var(--font-color-light);
    font-size: 12px;
    text-align: center;
  }

  .collapse-button {
    margin: 8px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color ease .3s;

    &:hover {
      color: var(--main);
    }

    .iconfont {
      font-size: 20px;
      margin: 0 11px;
    }
  }

  &.collapse {
    width: 42px;
  }

  &.nav-hidden {
    width: 0;
  }
}
</style>
