<script setup>
import {navTo} from '/@/utils';
</script>

<template>
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
