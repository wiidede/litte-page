<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

// color
import {colorList} from '/@/utils/constants';

const setColor = (color) => store.commit('settings/setColor', color);
const colorActive = computed({
	get: () => store.state.settings.color,
	set: setColor,
});

// theme
const themeList = ['Light', 'Dark', 'Follow System'];
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
        v-for="theme in themeList"
        :key="`theme-${theme}`"
        :label="theme"
      />
    </el-radio-group>
  </div>
  <div class="setting-item optional-item">
    <span>Color</span>
    <div class="color-list">
      <div class="color-container">
        <el-color-picker
          v-model="colorActive"
          popper-class="setting-color-picker-popper"
          :size="colorList.includes(colorActive) ? 'mini' : 'small'"
        />
      </div>
      <div
        v-for="(color, index) in colorList"
        :key="`color-${String(index)}`"
        class="color-container"
      >
        <div

          class="color"
          :class="{active: color === colorActive}"
          :style="{background: color}"
          @click="setColor(color)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-container {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  cursor: pointer;
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
