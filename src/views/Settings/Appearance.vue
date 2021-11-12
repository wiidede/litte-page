<script setup>
import {reactive, computed} from 'vue';
import {useStore} from 'vuex';

const themes = ['Light', 'Dark', 'Follow System'];

const store = useStore();

// color
const colorActive = computed(() => store.state.settings.color);
const colorList = reactive(['#FF9A76', '#FF9292', '#42B983', '#7579E7', '#19D3DA', '#056676', '#835858']);
const setColor = (color) => store.commit('settings/setColor', color);

// theme
const themeActive = computed({
	get: () => store.state.settings.theme,
	set: (theme) => store.commit('settings/setTheme', theme),
});
</script>

<template>
  <div class="setting-item optional-item">
    <span>Theme</span>
    <el-radio-group
      v-model="themeActive"
      size="mini"
    >
      <el-radio-button
        v-for="theme in themes"
        :key="`theme-${theme}`"
        :label="theme"
      />
    </el-radio-group>
  </div>
  <div class="setting-item optional-item">
    <span>Color</span>
    <div class="color-list">
      <el-color-picker
        :model-value="colorActive"
        popper-class="setting-color-picker-popper"
        :size="colorList.includes(colorActive) ? 'mini' : 'small'"
        @active-change="setColor($event)"
      />
      <div
        v-for="(color, index) in colorList"
        :key="`color-${String(index)}`"
        class="color"
        :class="{active: color === colorActive}"
        :style="{background: color}"
        @click="setColor(color)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  cursor: pointer;
  margin: 0 8px 8px 8px;
  transition: width ease .3s, height ease .3s;

  &.active {
    width: 32px;
    height: 32px;
  }
}

.color-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &:deep(.el-color-picker) {
    margin: 0 8px 8px 8px;
    transition: width ease .3s, height ease .3s;

    &.el-color-picker--mini {
      height: 24px;

      .el-color-picker__trigger {
        height: 24px;
        width: 24px;
      }
    }

    .el-color-picker__trigger {
      transition: width ease .3s, height ease .3s;
      padding: 0;
      border: 0;
    }

    .el-color-picker__color {
      border: 0;
    }

    .el-color-picker__color-inner {
      border-radius: 50%;
    }
  }
}
</style>

<style lang="scss">
.setting-color-picker-popper {
  .el-color-dropdown__btns {
    .el-color-dropdown__link-btn {
      display: none;
    }
  }
}
</style>
