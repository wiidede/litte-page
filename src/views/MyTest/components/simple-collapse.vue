<script setup>
import {ref} from 'vue';
import {ArrowDown} from '@element-plus/icons';
import { ElCollapseTransition } from 'element-plus';

defineProps({
  title: {
    type: String,
    default: '',
  },
});
const isCollapse = ref(true);
const onCollapseToggle = () => isCollapse.value = !isCollapse.value;
</script>

<template>
  <div
    class="collapse-title"
    :class="{'is-collapse': isCollapse}"
    @click="onCollapseToggle"
  >
    <span>{{ title }}</span>
    <el-icon>
      <ArrowDown />
    </el-icon>
  </div>
  <el-collapse-transition>
    <div v-show="isCollapse">
      <slot />
    </div>
  </el-collapse-transition>
</template>

<style lang="scss" scoped>
.collapse-title {
  cursor: pointer;

  &.is-collapse {
    .el-icon {
      rotate: 180deg;
    }
  }

  .el-icon {
    transition: .3s;
  }
}


</style>
