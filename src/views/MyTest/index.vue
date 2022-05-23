<script>
export default {
  name: 'MyTest',
};
</script>

<script setup>
import SimpleCollapse from '/@/views/MyTest/components/simple-collapse.vue';
</script>

<template>
  <simple-collapse title="detail">
    <div>detail content</div>
    <div>detail content</div>
    <div>detail content</div>
  </simple-collapse>
</template>

<style lang="scss" scoped>

</style>
