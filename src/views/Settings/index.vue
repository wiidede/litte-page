<script setup>
import Appearance from './Appearance.vue';
import Application from './Application.vue';

const settings = [
	{name: 'Appearance', component: Appearance},
	{name: 'Application', component: Application},
];
</script>

<template>
  <div class="view-settings">
    <el-scrollbar>
      <h1>Settings</h1>
      <div
        v-for="setting in settings"
        :key="setting.name"
        class="setting-part card-block"
      >
        <h4>{{ setting.name }}</h4>
        <component :is="setting.component" />
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.view-settings {
  height: 100%;
  box-sizing: border-box;
  max-width: 720px;
  margin: 0 auto;
  font-size: 18px;
  user-select: none;
  -webkit-user-drag: none;

  h1 {
    font-size: 32px;
    margin: 20px 16px;
  }
}

.setting-part {
  display: flex;
  flex-direction: column;
  margin: 16px;

  h4 {
    font-size: 20px;
    margin: 12px 0;
    padding: 0 16px;
  }

  :deep(.setting-item) {
    padding: 0 16px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color ease .3s, color ease .3s;

    @media screen and (max-width: 768px) {
      &.optional-item {
        padding: 8px 16px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        gap: 8px;
      }
    }

    &:hover {
      background: var(--hover);
      .setting-item-placeholder {
        color: var(--main);
      }
    }

    &.setting-go {
      cursor: pointer;
    }

    .setting-item-placeholder {
      color: var(--font-color-regular);
      transition: color ease .3s;
    }
  }
}
</style>
