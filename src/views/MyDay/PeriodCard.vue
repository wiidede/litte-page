<script setup>
import {Delete, Plus, Edit, Top, Bottom} from '@element-plus/icons';
import {computed} from 'vue';
import {formatTimeValue, formatTimeToday} from '/@/utils';

const props = defineProps({
  isPhone: {
    type: Boolean,
    default: false,
  },
  timeSystem: {
    type: Number,
    default: 0,
  },
  timePoints: {
    type: Array,
    default: () => [],
  },
  eventsName: {
    type: Array,
    default: () => [],
  },
  wakeAndSleep: {
    type: Object,
    default: () => ({
      startTime: 4 * 60,
      startLabel: '起床啦',
      endTime: 16 * 60,
      endLabel: '睡觉啦',
    }),
  },
  otherDay: {
    type: Boolean,
    default: false,
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['add', 'edit', 'delete', 'start', 'end']);

const time = computed(() => formatTimeValue(props.timeSystem - props.wakeAndSleep.startTime));
</script>

<template>
  <div
    class="my-day-card card-block"
    :class="{'other-day': otherDay, 'card-show': !isEditing}"
  >
    <div
      v-if="isEditing"
      class="action-bar"
    >
      <el-icon @click="emit('up-day')">
        <top />
      </el-icon>
      <el-icon @click="emit('delete-day')">
        <delete />
      </el-icon>
      <el-icon @click="emit('down-day')">
        <bottom />
      </el-icon>
    </div>
    <h1 v-if="time > timePoints[timePoints.length - 1]">
      It's getting late, time for bed!
    </h1>
    <!-- my day period block start -->
    <div class="period-block">
      <div class="period-line">
        <div>{{ formatTimeToday(0, wakeAndSleep.startTime) }} {{ wakeAndSleep.startLabel }}</div>
        <div
          class="action-button"
          :class="{'show-action-button': isPhone && isEditing, 'is-pc': !isPhone}"
        >
          <el-icon @click="emit('start')">
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
            {{
              formatTimeToday(timePoints[index - 1], wakeAndSleep.startTime)
            }} - {{ formatTimeToday(period, wakeAndSleep.startTime) }}
          </span>
          <span class="time-range-label">
            {{ eventsName[index] }}
          </span>
        </div>
        <div
          class="action-button"
          :class="{'show-action-button': isPhone && isEditing, 'is-pc': !isPhone}"
        >
          <el-icon @click="emit('edit', index)">
            <edit />
          </el-icon>
          <el-icon @click="emit('delete', index)">
            <delete />
          </el-icon>
        </div>
      </div>
      <el-progress
        v-if="!otherDay && eventsName[index] && timePoints[index - 1] <= time && time < period"
        :text-inside="true"
        :stroke-width="24"
        :percentage="(time - timePoints[index - 1]) * 100 / (period - timePoints[index - 1])"
        :format="percentage => percentage.toFixed(3) + '%'"
      />
      <el-icon
        v-if="index > 0 && !eventsName[index] && isEditing"
        class="add-button"
        @click="emit('add', index)"
      >
        <plus />
      </el-icon>
    </div>
    <!-- my day period block end -->
    <div class="period-block">
      <div class="period-line">
        <div>{{ formatTimeToday(wakeAndSleep.endTime, wakeAndSleep.startTime) }} {{ wakeAndSleep.endLabel }}</div>
        <div
          class="action-button"
          :class="{'show-action-button': isPhone && isEditing, 'is-pc': !isPhone}"
        >
          <el-icon @click="emit('end')">
            <edit />
          </el-icon>
        </div>
      </div>
    </div>
    <h2 v-if="formatTimeValue(wakeAndSleep.endTime) === 0">
      No sleep, dear?
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.my-day-card {
  margin: 16px;
  padding: 16px;
  position: relative;
  overflow: hidden;

  &.other-day {
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }

  &.card-show {
    pointer-events: none;
    user-select: none;
  }

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

.action-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .el-icon {
    cursor: pointer;
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
</style>
