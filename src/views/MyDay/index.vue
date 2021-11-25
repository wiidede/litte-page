<script>
export default {
  name: 'MyDay',
};
</script>

<script setup>
import {ref, reactive, onActivated, onDeactivated, watchEffect, computed} from 'vue';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {ElMessage} from 'element-plus';
import {Delete, Plus, Edit, Check} from '@element-plus/icons';
import {userMyDayKey} from '/@/utils/constants';
import AddPeriodDialog from './AddPeriod.vue';
import NavTopBar from '/@/components/NavTopBar.vue';

dayjs.extend(duration);

import {useStore} from 'vuex';

const store = useStore();

const isPhone = computed(() => store.state.application.isPhone);
const isEditAll = ref(false);

const oneHour = 60;
const time = ref(0);

const myDayConfigLocal = JSON.parse(localStorage.getItem(userMyDayKey));

const startTime = ref(myDayConfigLocal?.startTime || 8 * oneHour); // offset
const startLabel = ref(myDayConfigLocal?.startLabel || '起床啦');
const endTime = ref(myDayConfigLocal?.endTime || 16 * oneHour);
const endLabel = ref(myDayConfigLocal?.endLabel || '睡觉啦');
const timePoints = reactive(myDayConfigLocal?.timePoints || [0, 30, oneHour, 2 * oneHour, 15 * oneHour, 16 * oneHour]);
const eventsName = reactive(myDayConfigLocal?.eventsName || [null, '起床', null, '学习', null, '洗漱']);

watchEffect(() => {
  const config = {
    timePoints,
    eventsName,
    startTime: startTime.value,
    startLabel: startLabel.value,
    endTime: endTime.value,
    endLabel: endLabel.value,
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

/**
 * get time between 0 - 24h
 * @param time
 */
const formatTimeValue = (time) => {
  if (time < 0) {
    time = 24 * oneHour + (time % (24 * oneHour));
  }
  time = time % (24 * oneHour);
  return time;
};

/**
 * margeEventPoints
 */
const mergeNull = () => {
  if (timePoints[timePoints.length - 1] < endTime.value) {
    timePoints.push(endTime.value);
    eventsName.push(null);
  }
  for (let i = 1; i < timePoints.length; ++i) {
    if (eventsName[i - 1] === eventsName[i] && i > 1) {
      timePoints.splice(i - 1, 1);
      eventsName.splice(i - 1, 1);
      i = i - 2;
      continue;
    }
    if (timePoints[i - 1] >= timePoints[i]) {
      timePoints.splice(i - 1, 1);
      eventsName.splice(eventsName[i - 1] === null ? i - 1 : i, 1);
      i = i - 2;
      continue;
    }
    if (timePoints[i] > endTime.value) {
      timePoints.splice(i, 1);
      eventsName.splice(i, 1);
      --i;
    }
  }
};

// add period
const addPeriodDialogRef = ref(null);
const addPeriodDialogIndex = ref(0);

const openAddDialog = (index, min, max) => {
  addPeriodDialogIndex.value = index;
  const config = {
    type: 'add',
    min: min,
    max: max,
    timeRange: [min, max],
  };
  addPeriodDialogRef.value.openDialog(config);
};

const openEditDialog = (index) => {
  addPeriodDialogIndex.value = index;
  let min = eventsName[index - 1]  === null ? timePoints[index - 2] : timePoints[index - 1];
  let max = eventsName[index + 1] === null ? timePoints[index + 1] : timePoints[index];
  const timeRange = [timePoints[index - 1], timePoints[index]];
  const name = eventsName[index];
  const config = {
    type: 'edit',
    name,
    min,
    max,
    timeRange,
  };
  addPeriodDialogRef.value.openDialog(config);
};

const openEditStartDialog = () => {
  let min;
  if (timePoints.length > 2) {
    min = eventsName[timePoints.length - 1] === null ? formatTimeValue(timePoints[timePoints.length - 2] - endTime.value) : 0;
  } else {
    min = timePoints[1];
  }
  let max = formatTimeValue(eventsName[1] === null ? timePoints[1] : timePoints[0]);
  let time = 0;
  if (max <= min) {
    max += 24 * oneHour;
    time += 24 * oneHour;
  }
  if (formatTimeValue(max - min) === 0 && timePoints.length > 2) {
    ElMessage({
      showClose: true,
      dangerouslyUseHTMLString: true,
      message: 'It seems that you cannot change the wake up time yet!<br> Notice that the sleep time will change together! ',
      type: 'warning',
      duration: 5000,
    });
    return;
  }
  const config = {
    type: 'start',
    name: startLabel.value,
    min,
    max,
    time,
  };
  addPeriodDialogRef.value.openDialog(config);
};
const openEditEndDialog = () => {
  const min = eventsName[timePoints.length - 1] === null ?
    timePoints[timePoints.length - 2] :
    timePoints[timePoints.length - 1];
  const max = 24 * oneHour;
  const config = {
    type: 'end',
    name: endLabel.value,
    min,
    max,
    time: endTime.value,
  };
  addPeriodDialogRef.value.openDialog(config);
};

const addPeriod = (index, form) => {
  const {name, timeRange} = form;
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
};

const editPeriod = (index, form) => {
  const {name, timeRange, max} = form;
  const [start, end] = timeRange;
  timePoints.splice(index, 1, start, end, max);
  eventsName.splice(index, 1, null, name, null);
  mergeNull();
};

const editStart = (form) => {
  startLabel.value = form.name;
  startTime.value = formatTimeValue(form.time + startTime.value);
  timePoints.forEach((time, index) => {
    (timePoints[index] = formatTimeValue(time - form.time));
  });
  if (timePoints[0] !== 0) {
    timePoints.unshift(0);
    eventsName.unshift(null);
  }
  mergeNull();
  getNowTime();
};

const editEnd = (form) => {
  endLabel.value = form.name;
  endTime.value = form.time || 24 * oneHour;
  timePoints.push(endTime.value);
  eventsName.push(null);
  mergeNull();
};

const deletePeriod = (index) => {
  eventsName[index] = null;
  mergeNull();
};
</script>

<template>
  <div
    id="view-my-day"
    :class="{'is-phone': isPhone}"
  >
    <el-scrollbar>
      <nav-top-bar v-if="isPhone" />
      <div class="my-day-card card-block">
        <!-- top block -->
        <template v-if="isPhone">
          <div
            class="corner"
            @click="isEditAll = !isEditAll"
          />
          <div
            class="edit-all"
            @click="isEditAll = !isEditAll"
          >
            <el-icon>
              <check v-if="isEditAll" />
              <edit v-else />
            </el-icon>
          </div>
        </template>
        <h1>{{ getFormatTime(time) }}</h1>
        <h1 v-if="time > timePoints[timePoints.length - 1]">
          It's getting late, time for bed!
        </h1>
        <!-- my day period block start -->
        <div class="period-block">
          <div class="period-line">
            <div>{{ getFormatTime(0) }} {{ startLabel }}</div>
            <div
              class="action-button"
              :class="{'show-action-button': isPhone && isEditAll, 'is-pc': !isPhone}"
            >
              <el-icon @click="openEditStartDialog">
                <edit />
              </el-icon>
            </div>
          </div>
        </div>
        <!-- my day period block -->
        <div
          v-for="(period, index) in timePoints"
          :key="`period${index}`"
          class="period-block"
          :class="{'period-plus': index > 0 && !eventsName[index], 'display-none': index === 0}"
        >
          <div
            v-if="index > 0 && eventsName[index]"
            class="period-line"
            :class="{now: timePoints[index - 1] <= time && time < period}"
          >
            <div class="time-range">
              <span class="time-range-value">
                {{ getFormatTime(timePoints[index - 1]) }} - {{ getFormatTime(period) }}
              </span>
              <span class="time-range-label">
                {{ eventsName[index] }}
              </span>
            </div>
            <div
              class="action-button"
              :class="{'show-action-button': isPhone && isEditAll, 'is-pc': !isPhone}"
            >
              <el-icon @click="openEditDialog(index)">
                <edit />
              </el-icon>
              <el-icon @click="deletePeriod(index)">
                <delete />
              </el-icon>
            </div>
          </div>
          <el-progress
            v-if="eventsName[index] && timePoints[index - 1] <= time && time < period"
            :text-inside="true"
            :stroke-width="24"
            :percentage="(time - timePoints[index - 1]) * 100 / (period - timePoints[index - 1])"
            :format="percentage => percentage.toFixed(3) + '%'"
          />
          <el-icon
            v-if="index > 0 && !eventsName[index]"
            class="add-button"
            @click="openAddDialog(index, timePoints[index - 1], period)"
          >
            <plus />
          </el-icon>
        </div>
        <!-- my day period block end -->
        <div class="period-block">
          <div class="period-line">
            <div>{{ getFormatTime(endTime) }} {{ endLabel }}</div>
            <div
              class="action-button"
              :class="{'show-action-button': isPhone && isEditAll, 'is-pc': !isPhone}"
            >
              <el-icon @click="openEditEndDialog">
                <edit />
              </el-icon>
            </div>
          </div>
        </div>
        <h2 v-if="formatTimeValue(endTime) === 0">
          No sleep, dear?
        </h2>
      </div>
      <add-period-dialog
        ref="addPeriodDialogRef"
        :format="getFormatTime"
        @add="addPeriod(addPeriodDialogIndex, $event)"
        @edit="editPeriod(addPeriodDialogIndex, $event)"
        @start="editStart"
        @end="editEnd"
      />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
#view-my-day {
  height: 100%;
  box-sizing: border-box;
  max-width: 720px;
  margin: 0 auto;
  font-size: 18px;
  user-select: none;
  -webkit-user-drag: none;

  .comp-nav-top-bar {
    margin: 0 16px;
    display: flex;
    align-items: center;
    padding: 0 16px;
  }

  .my-day-card {
    margin: 16px;
    padding: 16px;
    position: relative;
    overflow: hidden;

    .corner {
      position: absolute;
      top: -30px;
      right: -30px;
      width: 0;
      height: 0;
      border: 30px solid transparent;
      border-right-color: var(--background-gray);
      transform: rotateZ(135deg);
      cursor: pointer;
    }

    .edit-all {
      position: absolute;
      right: 4px;
      top: 4px;
      cursor: pointer;

      .el-icon {
        --font-size: 16px;
      }
    }
  }

  &.is-phone {
    .card-block {
      margin-right: 2px;
      margin-left: 2px;
    }

    .period-line {
      justify-content: initial;
    }
  }
}


.period-block {
  padding: 4px 0;

  &.period-plus {
    margin: 0;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
  }

  &:hover {
    background: var(--hover);

    .action-button.is-pc {
      display: inline-flex;
    }
  }

  .period-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .time-range {
    display: flex;
    align-items: center;
  }

  .time-range-value {
    flex-shrink: 0;
    margin-right: 8px;
  }

  .time-range-label {
    word-wrap: anywhere;
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

.action-button {
  --font-size: .8em;
  cursor: pointer;
  display: none;

  .el-icon {
    margin: 0 4px;
    transition: color ease .3s;

    &:hover {
      color: var(--main);
    }
  }

  &.show-action-button {
    display: inline-flex;
    color: var(--font-color-regular);
  }
}

.el-progress {
  width: 80%;
}

:deep(.el-dialog) {
  max-width: 520px;
}
</style>
