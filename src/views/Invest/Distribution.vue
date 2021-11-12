<script setup>
import {ref, reactive, watchEffect} from 'vue';
import {userInvestKey} from '/@/utils/constants';

const totalNum = ref(10000);
const industriesLocal = JSON.parse(localStorage.getItem(userInvestKey));
const industries = reactive(Array.isArray(industriesLocal) ? industriesLocal: [{key: '证券'}, {key: '中证500'}, {key: '新能源'}, {key: '半导体'}]);
const industryList = reactive(['中证500', '沪深300', '证券', '军工', '新能源', '半导体', '医疗', '白酒', '有色金属']);

watchEffect(() => {
	localStorage.setItem(userInvestKey, JSON.stringify(industries));
});
</script>

<template>
  <div class="view-invest-distribution">
    <el-scrollbar>
      <div class="card-block total-block">
        <div class="input-container">
          总金额：
          <el-input v-model.number="totalNum" />
          四个行业：
          <el-select
            v-for="(industry, index) in industries"
            :key="`industry-prime-${index}`"
            v-model="industry.key"
            filterable
            allow-create
            default-first-option
            :placeholder="`请选择行业${index + 1}`"
          >
            <el-option
              v-for="(option, optionIndex) in industryList"
              :key="`industry-option-${optionIndex}`"
              :label="option"
              :value="option"
            />
          </el-select>
        </div>
      </div>
      <div class="industry-container">
        <div
          v-for="(industry, industryIndex) in industries"
          :key="`industry-${industryIndex}`"
          class="card-block industry-block"
        >
          <div class="industry-label">
            {{ `${industry.key}` }}
          </div>
          <div class="industry-total">
            {{ `总金额: ${totalNum / 10 * (4 - industryIndex)}` }}
          </div>
          <div
            v-for="money in 4"
            :key="`money-${money}`"
          >
            {{ totalNum / 10 * (4 - industryIndex) / 10 * money }}
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.total-block {
  margin: 16px;
  padding: 16px 8px;

  .el-input, .el-select {
    width: initial;
    margin: 4px 8px 4px 0;
  }
}

.industry-block {
  padding: 8px;
}

.view-invest-distribution {
  height: 100%;
  box-sizing: border-box;
}

.industry-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px;
}

.industry-label {
  font-size: 20px;
}

.industry-total {
  font-size: 16px;
  margin-bottom: 8px;
}

</style>
