<script setup>
import GoBackBar from '/@/components/GoBackBar.vue';
import {computed} from 'vue';
import {useStore} from 'vuex';

const store = useStore();
const version = computed(() => store.state.version);
</script>

<template>
  <div id="view-about">
    <el-scrollbar ref="scrollViewRef">
      <go-back-bar
        ref="goBackBarRef"
        class="go-back-bar"
      />
      <div class="about-item">
        <div>
          Author: wiidede
        </div>
        <div>
          Version: {{ version }}
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
#view-about {
  height: 100%;
  font-family: baloo_2regular, sans-serif;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}

.go-back-bar {
  margin: 16px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.about-item {
  margin: 16px;
  background: var(--background);
  padding: 12px 0;
}
</style>
