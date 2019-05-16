<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/common/_code";
.router {
  &__body {
    &__title {
      margin: 20px 0;
    }
    &__content {
      margin-bottom: 100px auto 0;
      .el-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .el-card {
        cursor: pointer;
      }
    }
  }
}
</style>
<template>
  <div class="router">
    <div class="router__head">
      <zk-header :showBack="true" title="router"></zk-header>
    </div>
    <div class="router__body">
      <div class="router__body__title">
        <h2>测试路由跳转功能</h2>
      </div>
      <div class="router__body__content">
        <div class="router__body__content__list">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-card shadow="hover" @click.native="goTo('/pageA')">
                <span>前往 A 页面</span>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" @click.native="goTo('/pageB')">
                <span>前往 B 页面</span>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="code" :style="`height:${isExpand ? '786px' : '0'};`">
          <h4>html+js：</h4>
          <pre><ol class="hibot"><li rel="0">&lt;el-col&nbsp;:span="8"&gt;&nbsp;</li><li
  rel="0"
>&nbsp;&nbsp;&lt;el-card&nbsp;shadow="hover"&nbsp;@click.native="goTo('/pageA')"&gt;&nbsp;</li><li
  rel="0"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">&lt;span</span><span class="keyword">&gt;</span>前往&nbsp;A&nbsp;页面<span class="keyword">&lt;/span&gt;</span>&nbsp;</li><li
  rel="0"
>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-card&gt;&nbsp;</li><li
  rel="0"
>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-col&gt;&nbsp;</li><li
  rel="0"
>&lt;el-col&nbsp;:span="8"&gt;&nbsp;</li><li
  rel="0"
>&nbsp;&nbsp;&lt;el-card&nbsp;shadow="hover"&nbsp;@click.native="goTo('/pageB')"&gt;&nbsp;</li><li
  rel="0"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">&lt;span</span><span class="keyword">&gt;</span>前往&nbsp;B&nbsp;页面<span class="keyword">&lt;/span&gt;</span>&nbsp;</li><li
  rel="0"
>&nbsp;&nbsp;&lt;/el-card&gt;&nbsp;</li><li rel="0">&lt;/el-col&gt;</li></ol><code
  class="lang-html"
  style="display: none;"
>&lt;el-col :span="8"&gt;
  &lt;el-card shadow="hover" @click.native="goTo('/pageA')"&gt;
      &lt;span&gt;前往 A 页面&lt;/span&gt;
    &lt;/el-card&gt;
    &lt;/el-col&gt;
&lt;el-col :span="8"&gt;
  &lt;el-card shadow="hover" @click.native="goTo('/pageB')"&gt;
      &lt;span&gt;前往 B 页面&lt;/span&gt;
  &lt;/el-card&gt;
&lt;/el-col&gt;</code>
            <!-- <h4>js:</h4> -->
            <ol class="hibot"><li rel="0"><span class="comment">//1.&nbsp;router/index.js</span>&nbsp;</li><li rel="0"><span class="keyword">import</span>&nbsp;Vue&nbsp;from&nbsp;<span class="string">'vue'</span>&nbsp;</li><li
  rel="0"
><span class="keyword">import</span>&nbsp;Router&nbsp;from&nbsp;<span class="string">'vue-router'</span>&nbsp;</li><li
  rel="0"
><span class="keyword">import</span>&nbsp;PageA&nbsp;from&nbsp;<span class="string">'@/components/pages/PageA'</span>&nbsp;</li><li
  rel="0"
><span class="keyword">import</span>&nbsp;PageB&nbsp;from&nbsp;<span class="string">'@/components/pages/PageB'</span>&nbsp;</li><li
  rel="0"
>&nbsp;</li><li rel="0">Vue.use(Router)&nbsp;</li><li rel="0">&nbsp;</li><li rel="0"><span class="comment">//&nbsp;配置路由，路由地址映射到显示的组件&nbsp;path&nbsp;-&gt;&nbsp;component</span>&nbsp;</li><li
  rel="0"
><span class="keyword">export</span>&nbsp;<span class="keyword">default</span>&nbsp;<span class="keyword">new</span>&nbsp;Router({&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;routes:&nbsp;[&nbsp;</li><li rel="1">&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path:&nbsp;<span class="string">'/pageA'</span>,&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;<span class="string">'PageA'</span>,&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component:&nbsp;PageA&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</li><li rel="1">&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path:&nbsp;<span class="string">'/pageB'</span>,&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;<span class="string">'PageB'</span>,&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component:&nbsp;PageB&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li rel="1">&nbsp;&nbsp;]&nbsp;</li><li rel="1">})&nbsp;</li><li rel="0">&nbsp;</li><li rel="0"><span class="comment">//2.&nbsp;xxx.vue</span>&nbsp;</li><li
  rel="0"
>goTo(path)&nbsp;{&nbsp;</li><li rel="1">&nbsp;&nbsp;<span class="keyword">this</span>.$router.push(path);&nbsp;</li><li
  rel="1"
>}</li></ol><code
  class="lang-javascript"
  style="display: none;"
>goTo(path) {
  this.$router.push(path);
}</code></pre>
          <!-- <pre></pre> -->
          <p v-text="isExpand ? '隐藏代码' : '显示代码'" @click="handleCollapse()"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo-router",
  data() {
    return {
      isExpand: true
    };
  },
  methods: {
    handleCollapse() {
      this["isExpand"] = !this["isExpand"];
    },
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>
