<script setup>
import {goBack} from '/@/utils';
</script>

<template>
  <div id="not-found-view">
    <h1>404 Not Found!</h1>
    <strong
      class="go-back"
      @click="goBack"
    ><i class="iconfont icon-arrow-left-s-line" /> Go back</strong>
  </div>
</template>

<style lang="scss" scoped>
#not-found-view {
  text-align: center;
}

.go-back {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  i {
    font-size: 20px;
    margin-right: 4px;
  }

  &:hover {
    color: var(--main);
  }
}
</style>
