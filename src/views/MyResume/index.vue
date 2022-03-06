<script>
export default {
  name: 'MyResume',
};
</script>

<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore();

store.commit('application/setNavigationShow', false);

const isPhone = computed(() => store.state.application.isPhone);

store.commit('settings/setColor', '#056676');
const nextColor = () => store.commit('settings/nextColor');


// content
const skills = {
  proficient: ['Vue 2.0'],
  familiar: ['Vue 3.0', 'JS', 'CSS', 'Html', 'Element UI'],
  know: ['Webpack', 'Vite', 'TS', 'iconfont', 'Linux', 'Python', 'Tensor Flow', 'C ++', 'ROS'],
};

const awards = [
  ['2019年08月', 'IJCAI2019老年人机器人看护大赛（国际赛）', '三等奖', '澳门大学'],
  ['2019年06月', '2019中国服务机器人大赛', '二等奖', '中国自动化学会'],
  ['2019年03月', '蓝桥杯大赛', '三等奖', '中国软件行业协会'],
  ['2017年12月', 'CCF大数据与计算智能大赛青年志愿者服务证书', '', '中国共产主义青年团'],
];
</script>

<template>
  <div id="view-my-resume">
    <el-scrollbar view-class="view-my-resume-view">
      <div class="resume-outer">
        <div class="info">
          <div class="base-info">
            <h1 class="name">
              王子羽
            </h1>
            <div class="info-line">
              男 22岁（1999年07月） <br v-if="isPhone">苏州 1.5年
            </div>
            <div class="info-line">
              <span style="margin-right: 12px"><i class="iconfont icon-smartphone-line"/>17625809601</span>
              <a href="mailto:wiixdede@gmail.com"><i class="iconfont icon-mail-line"/>wiixdede@gmail.com</a>
            </div>
            <div class="info-line">
              <a
                href="https://wiidede.github.io"
                target="_blank"
                style="margin-right: 12px"
              ><i class="iconfont icon-blog-solid"/>wiidede.github.io</a>
              <a
                href="https://github.com/wiidede"
                target="_blank"
              ><i class="iconfont icon-github-line"/>wiidede</a>
            </div>
          </div>
          <div
            class="portrait"
            @click="nextColor"
          >
            <img
              src="../../assets/my-portrait.png"
              alt="portrait"
            >
          </div>
        </div>
        <h2 class="title">
          教育工作经历
        </h2>
        <div>2017年09月 - 2021年06月 常熟理工学院 计算机科学与工程学院 物联网工程 本科</div>
        <div>2020年07月 - 2021年06月 苏州科达科技股份有限公司 实习</div>
        <div>2021年06月 - 至今 苏州科达科技股份有限公司 Web前端开发工程师</div>
        <h2 class="title">
          项目经历
        </h2>
        <strong class="project-title">智能运维项目（苏州科达）</strong>
        <div>在实习的时候只是参与开发页面的任务。</div>
        <div>转正之后除了页面开发，开始涉及到框架的修改，比如动态权限变化、三方登录。同时也针对某些页面进行性能优化，UI细节优化，组件代码重构、尽量减少项目中es5的写法、拒绝
          <pre>Vue</pre>
          项目中使用
          <pre>JQuery</pre>
          。
        </div>
        <strong class="project-title">家庭服务机器人、水表识别（大学期间）</strong>
        <div>使用
          <pre>ROS</pre>
          系统操作机器人（
          <pre>C ++</pre>
          ），过程中涉及
          <pre>SLAM</pre>
          、建图、导航，使用深度学习进行物品识别、从而提供家庭服务，顺带使用深度学习做了水表识别项目。
        </div>
        <h2 class="title">
          专业技能
        </h2>
        <div class="skill-line">
          精通
          <pre
            v-for="(item, index) in skills.proficient"
            :key="`proficient-${index}`"
          >{{ item }}</pre>
        </div>
        <div class="skill-line">
          熟悉
          <pre
            v-for="(item, index) in skills.familiar"
            :key="`familiar-${index}`"
          >{{ item }}</pre>
        </div>
        <div class="skill-line">
          了解
          <pre
            v-for="(item, index) in skills.know"
            :key="`know-${index}`"
          >{{ item }}</pre>
        </div>
        <h2 class="title">
          获奖情况
        </h2>
        <div
          v-for="(award, index) in awards"
          :key="`award-${index}`"
          class="award-line"
        >
          <span class="time">{{ award[0] }}</span>
          <span class="label">{{ award[1] }}</span>
          <span class="level">{{ award[2] }}</span>
          <span class="host">{{ award[3] }}</span>
        </div>
        <h2 class="title">
          个人特质
        </h2>
        <div>励志写出逻辑完整、简洁的代码。</div>
        <div>励志写出性能良好、设计优美的前端页面。</div>
        <div>独立审美；热爱科技；用摄影记录生活；追求高效与简洁的生活方式。</div>
        <a
          class="online-site"
          href="https://wiidede.github.io/little-page/#/my-resume"
        >
          <i class="iconfont icon-checkbox-blank-circle-line"/>
          online
        </a>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
#view-my-resume {
  background: var(--background);
  height: 100%;
  box-sizing: border-box;

  :deep(.view-my-resume-view) {
    max-width: 720px;
    margin: 0 auto;
  }
}

a {
  color: var(--font-color);
}

pre {
  display: inline-block;
  margin: 0;
}

.resume-outer {
  margin: 12px 0;
  border: 1px solid var(--main-extra-light);
  padding: 12px 24px;
  position: relative;
}

.info {
  display: flex;
  align-items: center;
}

.base-info {
  flex: 1;
}

.portrait {
  background: var(--main);
  width: 96px;
  line-height: 0;

  img {
    width: 100%;
  }
}

.online-site {
  position: absolute;
  right: 24px;
  bottom: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

h1, .title {
  color: var(--main)
}

.title {
  border-bottom: 1px solid var(--main);
  margin: 18px 0 12px 0;
}

.info-line {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;

  i {
    font-size: 18px;
    margin-right: 4px;
  }
}

.project-title {
  font-size: 18px;
}

.skill-line pre + pre:before {
  content: '、';
}

.award-line {
  display: flex;

  .time {
    flex: 3;
  }

  .label {
    flex: 12;
  }

  .level {
    flex: 2;
  }

  .host {
    flex: 5;
  }
}
</style>
