<script setup>
import {reactive} from 'vue';
const oneMinute = 60;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;
const timePoints = reactive([30 * oneMinute, oneHour]);
const eventsName = reactive(['起床', null]);
</script>

<template>
  <div>
    <h1>{{ eventsName }}</h1>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}
</style>
