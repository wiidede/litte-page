<script setup>
import {reactive, ref, watchEffect} from 'vue';

const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 0,
  },
  format: {
    type: Function,
    default: (time) => String(time),
  },
});

const emit = defineEmits(['complete']);

const visible = ref(false);
const marks = ref({});

const form = reactive({
  name: '',
  timeRange: [],
});
const formRef = ref(null);
const rules = {
  name: [{required: true, message: 'Please input Name', trigger: 'blur'}],
};

watchEffect(() => {
  form.timeRange = [props.min, props.max];
  marks.value = {
    [props.min]: props.format(props.min),
    [props.max]: props.format(props.max),
  };
});

const openDialog = () => {
  visible.value = true;
};

const dialogClosed = () => {
  form.name = '';
  form.timeRange = [0, 0];
};

const complete = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      emit('complete', form);
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
      label-position="right"
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
      <el-form-item label="Time Range">
        {{
          props.format(form.timeRange[0])
        }}-{{
          props.format(form.timeRange[1])
        }}
        <el-slider
          v-model="form.timeRange"
          range
          :step="10"
          :min="min"
          :max="max"
          :format-tooltip="props.format"
          :marks="form.marks"
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

<style scoped>
</style>
