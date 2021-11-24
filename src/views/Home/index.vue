<script>
export default {
  name: 'UserHome',
};
</script>

<script setup>
const context = 'wiidede website';
</script>

<template>
  <div id="view-home-page">
    <el-scrollbar>
      <h1>{{ context }}</h1>
    </el-scrollbar>
  </div>
</template>

<style scoped>
#view-home-page {
  height: 100%;
  box-sizing: border-box;
  text-align: center;
}
</style>
