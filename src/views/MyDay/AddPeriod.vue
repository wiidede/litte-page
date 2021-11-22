<script setup>
const props = defineProps({
  timePoints: {
    type: Array,
    default: () => [],
  },
  format: {
    type: Function,
    default: () => {},
  },
});

const emit = defineEmits(['complete']);

// add period
import {onBeforeUpdate, reactive, ref, watch} from 'vue';

const form = reactive([]);
const formRef = ref([]);
onBeforeUpdate(() => {
  formRef.value = [];
});
const periodAddingRules = {
  name: [{required: true, message: 'Please input Name', trigger: 'blur'}],
};

const initform = () => {
  form.length = props.timePoints.length;
  for (let formIndex = 0; formIndex < form.length; formIndex++) {
    if (!form[formIndex]) {
      form[formIndex] = {
        name: '',
        timeRange: [],
        visible: false,
        marks: {},
      };
    }
  }
};

initform();

const openPeriodAddingModal = (index, min, max) => {
  form[index].visible = true;
  form[index].timeRange = [min, max];
  form[index].marks = {
    [min]: props.format(min),
    [max]: props.format(max),
  };
};

watch([props.timePoints], initform);

const addPeriod = (index) => {
  console.log(formRef.value);
  formRef.value[index].validate((valid) => {
    if (valid) {
      emit('complete', index);
    } else {
      return false;
    }
  });
};
</script>

<template>
  <el-dialog
    v-model="form[index].visible"
    title="Add My Day Item"
  >
    <el-form
      :ref="el => { if (el) formRef[index] = el }"
      label-position="right"
      label-width="100px"
      :model="form[index]"
      :rules="periodAddingRules"
    >
      <el-form-item
        label="Name"
        prop="name"
      >
        <el-input v-model="form[index].name" />
      </el-form-item>
      <el-form-item label="Time Range">
        {{
          getFormatTime(form[index].timeRange[0])
        }}-{{
          getFormatTime(form[index].timeRange[1])
        }}
        <el-slider
          v-model="form[index].timeRange"
          range
          :step="10"
          :min="timePoints[index - 1]"
          :max="period"
          :format-tooltip="getFormatTime"
          :marks="form[index].marks"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="addPeriod(index)">
          Add
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style scoped>
div {
  text-align: center;
}
</style>
