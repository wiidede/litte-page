<script setup>
import {ref} from 'vue';

const totalNum = ref(10000);
</script>

<template>
  <div>
    <el-input v-model.number="totalNum" />
    <div
      v-for="industry in 4"
      :key="`industry-${industry}`"
      class="industry"
    >
      {{ `行业${industry}` }}
      <div
        v-for="money in 4"
        :key="`money-${money}`"
      >
        {{ totalNum / 10 * industry / 10 * money }}
      </div>
      {{ `totalNum: ${totalNum / 10 * industry}` }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.industry {
  display: inline-block;
  margin: 16px;
}
</style>
