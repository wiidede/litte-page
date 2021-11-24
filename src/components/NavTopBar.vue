<script setup>
import {useStore} from 'vuex';
import {computed, onMounted, onUnmounted} from 'vue';

const store = useStore();

const navigationShow = computed(() => store.state.application.navigationShow);
const toggleNavigationShow = () => store.commit('application/toggleNavigationShow');

onMounted(() => {
  store.commit('application/setNavigationShow', false);
});

onUnmounted(() => {
  store.commit('application/setNavigationShow', true);
});
</script>

<template>
  <div class="comp-nav-top-bar card-block">
    <i
      class="iconfont"
      :class="navigationShow ? 'icon-checkbox-blank-circle-line' : 'icon-layout-left-2-line'"
      @click="toggleNavigationShow"
    />
  </div>
</template>

<style lang="scss" scoped>
.comp-nav-top-bar {
  text-align: initial;
  background: var(--background);
  box-sizing: border-box;
  height: 40px;

  & > div {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    padding-left: 12px;

    &:hover {
      color: var(--main);
    }
  }
}

span {
  padding-right: 12px;
}
</style>
