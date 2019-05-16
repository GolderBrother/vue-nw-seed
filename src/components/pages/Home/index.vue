<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  &-body {
    padding-top: 30px;
    a {
      font-size: 16px;
    }
  }
}
</style>
<template>
  <div class="home">
    <div class="home-head">
      <!-- html模板中获取国际化内容: $t('vis_clientName') -->
      <zk-header :showBack="false" :title="$t('vis_clientName')"></zk-header>
    </div>
    <div class="home-body">
      <div class="home-body__container">
        <div class="home-body__container__title">
          <div class="logo text-center">
            <img src="static/logo.png" :alt="$t('vis_clientName')">
          </div>
          <h1 class="title">{{ msg }}</h1>
        </div>
        <div class="home-body__container__content">
          <h2>Essential Links</h2>
          <div class="links">
            <!-- <el-row :gutter="12">
              <el-col :span="8">
                <el-card shadow="hover" @click.native="routerTo('/hello')">
                  <span>Hello World</span>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card shadow="hover" @click.native="routerTo('/demo')">
                  <span>Demo</span>
                </el-card>
              </el-col>
            </el-row>-->

            <ul>
              <li>
                <a @click.prevent="routerTo('/hello')">Hello World</a>
              </li>
              <li>
                <a @click.prevent="routerTo('/demo')">Demo</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    routerTo(path) {
      // 路由调转方法
      this.$router.push(path);
    }
  }
};
</script>


