<script setup>
import {computed, reactive, ref, watchEffect} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const isPhone = computed(() => store.state.application.isPhone);

const props = defineProps({
  format: {
    type: Function,
    default: (time) => String(time),
  },
});

const emit = defineEmits(['add', 'edit', 'start', 'end']);

const visible = ref(false);
const config = ref({
  type: 'add', // add edit start end
  name: '',
  min: 0,
  max: 10,
  time: 0,
  timeRange: [0 , 10],
});
const marks = ref({});

const checkTimeRange = (rule, value, callback) => {
  if (value[0] === value[1]) {
    return callback(new Error('Start time and end time cannot be the same'));
  } else {
    return callback();
  }
};

const form = reactive({
  name: '',
  time: 0,
  timeRange: [],
});
const formRef = ref(null);
const rules = {
  name: [{required: true, message: 'Please input Name', trigger: 'blur'}],
  timeRange: [{ validator: checkTimeRange, trigger: 'blur' }],
};

watchEffect(() => {
  marks.value = {
    [config.value.min]: props.format(config.value.min),
    [config.value.max]: props.format(config.value.max),
  };
});

const openDialog = (conf) => {
  config.value = conf;
  Object.assign(form, conf);
  visible.value = true;
};

const dialogClosed = () => {
  form.name = '';
  form.time = config.value.min;
  form.timeRange = [config.value.min, config.value.max];
};

const complete = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      emit(config.value.type, form);
      visible.value = false;
      dialogClosed();
    } else {
      return false;
    }
  });
};

defineExpose({
  openDialog,
});
</script>

<template>
  <el-dialog
    v-model="visible"
    title="Add My Day Item"
    @closed="dialogClosed"
  >
    <el-form
      ref="formRef"
      :label-position="isPhone ? 'top' : 'right'"
      label-width="100px"
      :model="form"
      :rules="rules"
    >
      <el-form-item
        label="Name"
        prop="name"
      >
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item
        label="Time Range"
        prop="timeRange"
      >
        {{
          props.format(form.timeRange[0])
        }}-{{
          props.format(form.timeRange[1])
        }}
        <el-slider
          v-model="form.timeRange"
          range
          :step="10"
          :min="config.min"
          :max="config.max"
          :format-tooltip="props.format"
          :marks="marks"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="complete">
          Add
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style lang="scss" scoped>

.el-slider {
  word-break: initial;
  transform: translateY(-12px);
  margin: 0 10px;

  :deep(.el-slider__marks-text) {
    margin-top: 6px;
    font-size: 12px;
  }
}
</style>
