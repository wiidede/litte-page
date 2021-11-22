<script setup>
import {ref, reactive, onActivated, onDeactivated, onBeforeUpdate, watchEffect, watch} from 'vue';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {Delete, Plus} from '@element-plus/icons';
import {userMyDayKey} from '/@/utils/constants';

dayjs.extend(duration);

const oneHour = 60;

let startTime = ref(8 * oneHour); // offset
let time = ref(0);
let endTime = ref(16 * oneHour);

const myDayConfigLocal = JSON.parse(localStorage.getItem(userMyDayKey));

const timePoints = reactive(myDayConfigLocal?.timePoints || [0, 30, oneHour, 2 * oneHour, 15 * oneHour, 16 * oneHour]);
const eventsName = reactive(myDayConfigLocal?.eventsName || [null, '起床', null, '学习', null, '洗漱']);

watchEffect(() => {
  const config = {
    timePoints,
    eventsName,
  };
  localStorage.setItem(userMyDayKey, JSON.stringify(config));
});

// get now time
let refreshTimeInterval = 0;
const getNowTime = () => {
  const now = new Date();
  time.value = (now.getHours() * oneHour + now.getMinutes() + now.getSeconds() / 60 - startTime.value) % (24 * oneHour);
};
onActivated(() => {
  getNowTime();
  refreshTimeInterval = setInterval(getNowTime, 1000);
});
onDeactivated(() => clearInterval(refreshTimeInterval));

/**
 * get today's time formatted
 * @param time
 * @returns {string}
 */
const getFormatTime = (time) => {
  return dayjs.duration(time + startTime.value, 'minutes').format('HH:mm');
};

// add period
const periodAddingForm = reactive([]);
const periodAddingFormRef = ref([]);
onBeforeUpdate(() => {
  periodAddingFormRef.value = [];
});
const periodAddingRules = {
  name: [{required: true, message: 'Please input Name', trigger: 'blur'}],
};

const initPeriodAddingForm = () => {
  periodAddingForm.length = timePoints.length;
  for (let formIndex = 0; formIndex < periodAddingForm.length; formIndex++) {
    if (!periodAddingForm[formIndex]) {
      periodAddingForm[formIndex] = {
        name: '',
        timeRange: [],
        visible: false,
        marks: {},
      };
    }
  }
};

initPeriodAddingForm();

const openPeriodAddingModal = (index, min, max) => {
  periodAddingForm[index].visible = true;
  periodAddingForm[index].timeRange = [min, max];
  periodAddingForm[index].marks = {
    [min]: getFormatTime(min),
    [max]: getFormatTime(max),
  };
};

watch([timePoints], initPeriodAddingForm);

const addPeriod = (index) => {
  const {name, timeRange} = periodAddingForm[index];
  const [start, end] = timeRange;
  const min = timePoints[index - 1];
  const max = timePoints[index];
  if (start === min && end !== max) {
    timePoints.splice(index, 0, end);
    eventsName.splice(index, 0, name);
  } else if (start !== min && end !== max) {
    timePoints.splice(index, 0, start, end);
    eventsName.splice(index, 0, null, name);
  } else if (start !== min && end === max) {
    timePoints.splice(index, 0, start);
    eventsName.splice(index, 1, null, name);
  } else {
    eventsName[index] = name;
  }
  periodAddingForm[index] = {
    name: '',
    timeRange: [],
    visible: false,
    marks: {},
  };
};

const deletePeriod = (index) => {
  eventsName[index] = null;
  for (let i = 1; i < timePoints.length; ++i) {
    if (eventsName[i - 1] === null && eventsName[i] === null) {
      timePoints.splice(i - 1, 1);
      eventsName.splice(i - 1, 1);
      --i;
    }
  }
};
</script>

<template>
  <div class="view-my-day">
    <el-scrollbar>
      <div class="card-block">
        <h1>{{ getFormatTime(time) }}</h1>
        <div class="period-block">
          {{ getFormatTime(0) }} 起床啦
        </div>
        <div
          v-for="(period, index) in timePoints"
          :key="`period${index}`"
          class="period-block"
          :class="{'period-plus': index > 0 && !eventsName[index]}"
        >
          <div
            v-if="index > 0 && eventsName[index]"
            :class="{now: timePoints[index - 1] <= time && time < period}"
          >
            {{ getFormatTime(timePoints[index - 1]) }}-{{ getFormatTime(period) }}
            {{ eventsName[index] }}
            <el-icon
              class="action-button"
              @click="deletePeriod(index)"
            >
              <delete />
            </el-icon>
          </div>
          <el-progress
            v-if="timePoints[index - 1] <= time && time < period"
            :text-inside="true"
            :stroke-width="24"
            :percentage="(time - timePoints[index - 1]) * 100 / (period - timePoints[index - 1])"
            :format="percentage => percentage.toFixed(3) + '%'"
          />
          <el-icon
            v-if="index > 0 && !eventsName[index]"
            class="add-button"
            @click="openPeriodAddingModal(index, timePoints[index - 1], period)"
          >
            <plus />
          </el-icon>
        </div>
        <div class="period-block">
          {{ getFormatTime(endTime) }} 睡觉啦
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.view-my-day {
  height: 100%;
  box-sizing: border-box;
  max-width: 720px;
  margin: 16px auto;
  font-size: 18px;
  user-select: none;
  -webkit-user-drag: none;

  .card-block {
    padding: 16px;
  }
}

.period-block {
  margin: 8px 0;

  &.period-plus {
    margin: 0;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
  }

  &:hover {
    .action-button {
      display: inline-block;
    }
  }
}

.now {
  font-size: 28px;
}

.el-icon.add-button {
  cursor: pointer;

  &:hover {
    color: var(--main);
  }
}

.el-icon.action-button {
  --font-size: .8em;
  cursor: pointer;
  display: none;
  margin: 0 4px;

  &:hover {
    color: var(--main);
  }
}

.el-progress {
  width: 80%;
}

:deep(.el-dialog) {
  max-width: 520px;
}

.el-slider {
  padding: 0 12px;
  word-break: initial;

  :deep(.el-slider__marks-text) {
    margin-top: 6px;
  }
}
</style>
