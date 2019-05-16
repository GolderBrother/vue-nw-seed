<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./index.scss";
</style>
<template>
  <div class="demo">
    <div class="demo__head">
      <!-- 使用全局注册的组件 -->
      <zk-header :showBack="true" title="测试页面"></zk-header>
    </div>
    <div class="demo__body">
      <el-container>
        <el-header>
          <h2 class="demo__body__title">这是个demo的测试页面</h2>
        </el-header>
        <el-main>
          <div class="demo__body__container">
            <div class="demo__body__list">
              <ul class="demo__body__list-items text-center">
                <li class="demo__body__list-item" @click="goTo('/request')">一、测试http数据交互功能(axios)异步库</li>
                <li class="demo__body__list-item" @click="goTo('/routerDemo')">二、测试路由跳转功能</li>
                <li class="demo__body__list-item" @click="goTo('/scopeComp')">三、测试使用局部注册的组件</li>
                <li class="demo__body__list-item" @click="goTo('/globalComp')">四、测试使用全局注册的组件</li>
                <li class="demo__body__list-item" @click="goTo('/message')">五、测试使用全局定义的消息框功能</li>
                <li class="demo__body__list-item" @click="goTo('/globalText')">六、测试获取国际化文本</li>
              </ul>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
// 引入局部注册的组件
import VisSteps from "@/components/layout/Steps";
export default {
  name: "demo",
  // data 声明数据并初始化
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  },
  // 声明并定义局部注册的组件
  components: {
    [VisSteps.name]: VisSteps
  }
};
</script>



