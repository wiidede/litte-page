<script setup>
import {navTo} from '/@/utils';
const goToBlog = () => {
  window.location.href = 'https://wiidede.github.io/';
};
</script>

<template>
  <!-- goToBlog -->
  <div
    class="setting-item setting-go"
    @click="goToBlog"
  >
    <span>Go to my blog</span>
    <div class="setting-item-placeholder iconfont icon-arrow-right-s-line" />
  </div>

  <!-- About -->
  <div
    class="setting-item setting-go"
    @click="navTo('/settings/about')"
  >
    <span>About</span>
    <div class="setting-item-placeholder iconfont icon-arrow-right-s-line" />
  </div>
</template>

<style lang="scss" scoped>
</style>
