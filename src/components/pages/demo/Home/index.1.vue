<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./index.scss";
</style>
<template>
  <div class="test">
    <div class="test__head">
      <!-- 使用全局注册的组件 -->
      <zk-header :showBack="true" title="测试页面"></zk-header>
    </div>
    <div class="test__body">
      <h2>这是个测试页面</h2>
      <div class="test__body__container">
        <div class="cert-types">
          <div class="cert-types__title">
            <h3>功能测试</h3>
          </div>
          <div class="cert-types__content text-center">
            <h4>一、测试http数据交互功能(axios)异步库</h4>
          </div>
          <el-button type="primary" round @click="getCertTypes">获取证件类型</el-button>
          <el-button type="primary" round @click="getReasons">获取来访事由</el-button>
          <div class="code" :style="`height:${isExpandOne ? '428px' : '0'};`">
            <h4>html：</h4>
            <pre>
              <ol class="hibot"><li rel="0">&nbsp;&nbsp;&nbsp;&nbsp;async&nbsp;getCertTypes()&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//&nbsp;页面中使用http数据交互</span>&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;res&nbsp;=&nbsp;await&nbsp;<span class="keyword">this</span>.$http.getCertTypeData();&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;(!res)&nbsp;<span class="keyword">return</span>;&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;(res.ret&nbsp;===&nbsp;<span class="string">"ok"</span>)&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;certTypes&nbsp;=&nbsp;res.data;&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//&nbsp;保存证件类型到vuex中</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.setCertTypes(certTypes);&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</li><li rel="0">&nbsp;</li><li rel="0">&nbsp;&nbsp;&nbsp;&nbsp;async&nbsp;getReasons()&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;res&nbsp;=&nbsp;await&nbsp;<span class="keyword">this</span>.$http.getReason();&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;(!res)&nbsp;<span class="keyword">return</span>;&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;(res.ret&nbsp;===&nbsp;<span class="string">"ok"</span>)&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;reasons&nbsp;=&nbsp;res.data;&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//&nbsp;保存来访事由到vuex中</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.setReasons(reasons);&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li rel="1">&nbsp;&nbsp;&nbsp;&nbsp;},</li></ol><code
  class="lang-javascript"
  style="display: none;"
>  async getCertTypes() {
              // 页面中使用http数据交互
              const res = await this.$http.getCertTypeData();
              if (!res) return;
              if (res.ret === "ok") {
                const certTypes = res.data;
                // 保存证件类型到vuex中
                this.setCertTypes(certTypes);
              }
            }</code></pre>
            <p v-text="isExpandOne ? '隐藏代码' : '显示代码'" @click="handleCollapse('One')"></p>
          </div>
        </div>
        <div class="test-nav test-panel">
          <h4>二、测试路由跳转功能</h4>
          <div class="test-nav-list">
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
          <div class="code" :style="`height:${isExpandTwo ? '386px' : '0'};`">
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
            <ol class="hibot"><li rel="0">goTo(path)&nbsp;{&nbsp;</li><li rel="1">&nbsp;&nbsp;<span class="keyword">this</span>.$router.push(path);&nbsp;</li><li
  rel="1"
>}</li></ol><code
  class="lang-javascript"
  style="display: none;"
>goTo(path) {
  this.$router.push(path);
}</code></pre>
            <!-- <pre></pre> -->
            <p v-text="isExpandTwo ? '隐藏代码' : '显示代码'" @click="handleCollapse('Two')"></p>
          </div>
        </div>
        <div class="test-step test-panel">
          <h4>三、测试使用局部注册的组件</h4>
          <div class="test-step-bar">
            <!-- 使用局部注册的组件 -->
            <vis-steps
              :active="activeStep"
              :stepSpace="1070/(visSteps.length)"
              :visSteps="visSteps"
            ></vis-steps>
          </div>
          <div class="code" :style="`height:${isExpandThree ? '398px' : '0'};`">
            <h4>html+js：</h4>
            <pre><ol class="hibot"><li rel="0">&lt;vis-steps&nbsp;</li><li rel="0">&nbsp;&nbsp;:active="activeStep"&nbsp;</li><li
  rel="0"
>&nbsp;&nbsp;:stepSpace="1070/(visSteps.length)"&nbsp;</li><li
  rel="0"
>&nbsp;&nbsp;:visSteps="visSteps"&nbsp;</li><li rel="0">&gt;&lt;/vis-steps&gt;</li></ol><code
  class="lang-html"
  style="display: none;"
>&lt;vis-steps
  :active="activeStep"
  :stepSpace="1070/(visSteps.length)"
  :visSteps="visSteps"
&gt;&lt;/vis-steps&gt;</code><ol
  class="hibot"
><li rel="0"><span class="comment">//&nbsp;data&nbsp;声明数据并初始化</span>&nbsp;</li><li
  rel="0"
>data()&nbsp;{&nbsp;</li><li rel="1">&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;visSteps:&nbsp;[<span class="string">"步骤一"</span>,&nbsp;<span class="string">"步骤二"</span>,&nbsp;<span class="string">"步骤三"</span>,&nbsp;<span class="string">"步骤四"</span>]&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;};&nbsp;</li><li rel="1">},&nbsp;</li><li rel="0">&nbsp;</li><li rel="0"><span class="comment">//&nbsp;引入局部注册的组件</span>&nbsp;</li><li rel="0"><span class="keyword">import</span>&nbsp;VisSteps&nbsp;from&nbsp;<span class="string">"@/components/layout/Steps"</span>;&nbsp;</li><li
  rel="0"
><span class="comment">//&nbsp;声明并定义局部注册的组件</span>&nbsp;</li><li
  rel="0"
>components:&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;[VisSteps.name]:&nbsp;VisSteps&nbsp;</li><li rel="1">}</li></ol><code
  class="lang-javascript"
  style="display: none;"
>// 引入局部注册的组件
import VisSteps from "@/components/layout/Steps";
// 声明并定义局部注册的组件
components: {
    [VisSteps.name]: VisSteps
}</code></pre>
            <p v-text="isExpandThree ? '隐藏代码' : '显示代码'" @click="handleCollapse('Three')"></p>
            <!-- <h4>js:</h4>
            <pre><ol class="hibot"><li rel="0"><span class="comment">//&nbsp;引入局部注册的组件</span>&nbsp;</li><li rel="0"><span class="keyword">import</span>&nbsp;VisSteps&nbsp;from&nbsp;<span class="string">"@/components/layout/Steps"</span>;&nbsp;</li><li
  rel="0"
><span class="comment">//&nbsp;声明并定义局部注册的组件</span>&nbsp;</li><li
  rel="0"
>components:&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;[VisSteps.name]:&nbsp;VisSteps&nbsp;</li><li rel="1">}</li></ol><code
  class="lang-javascript"
  style="display: none;"
>// 引入局部注册的组件
import VisSteps from "@/components/layout/Steps";
// 声明并定义局部注册的组件
components: {
    [VisSteps.name]: VisSteps
            }</code></pre>-->
          </div>
        </div>
        <div class="test-component test-panel">
          <h4>四、测试使用全局注册的组件</h4>
          <div class="test-component-header">
            <zk-header :showBack="true" title="全局注册的组件"></zk-header>
          </div>
          <div class="code" :style="`height:${isExpandFour ? '262px' : '0'};`">
            <h4>html+js：</h4>
            <pre><ol class="hibot"><li
  rel="0"
>&lt;el-button&nbsp;type="primary"&nbsp;round&nbsp;@click="showLoading"&gt;开启全屏加载框&lt;/el-button&gt;</li></ol><code
  class="lang-html"
  style="display: none;"
>&lt;el-button type="primary" round @click="showLoading"&gt;开启全屏加载框&lt;/el-button&gt;</code>
              <ol class="hibot"><li rel="0"><span class="comment">//&nbsp;main.js</span>&nbsp;</li><li rel="0"><span class="comment">//&nbsp;引入全局组件</span>&nbsp;</li><li rel="0"><span class="keyword">import</span>&nbsp;ZKHeader&nbsp;from&nbsp;<span class="string">'@/components/layout/ZKHeader.vue'</span>&nbsp;</li><li
  rel="0"
><span class="comment">//&nbsp;注册全局组件</span>&nbsp;</li><li
  rel="0"
>Vue.component(ZKHeader.name,&nbsp;ZKHeader)</li></ol>
              <code class="lang-javascript" style="display: none;">// main.js
// 引入全局组件
import ZKHeader from '@/components/layout/ZKHeader.vue'
// 注册全局组件
Vue.component(ZKHeader.name, ZKHeader)</code>
             </pre>
             <p v-text="isExpandFour ? '隐藏代码' : '显示代码'" @click="handleCollapse('Four')"></p>
          </div>
        </div>
        <div class="test-message test-panel">
          <h4>五、测试使用全局定义的消息框功能</h4>
          <el-button type="primary" round @click="showLoading">开启全屏加载框</el-button>
          <div class="code" :style="`height:${isExpandFive ? '242px' : '0'};`">
            <h4>html+js：</h4>
            <pre><ol class="hibot"><li
  rel="0"
>&lt;el-button&nbsp;type="primary"&nbsp;round&nbsp;@click="showLoading"&gt;开启全屏加载框&lt;/el-button&gt;</li></ol><code
  class="lang-html"
  style="display: none;"
>&lt;el-button type="primary" round @click="showLoading"&gt;开启全屏加载框&lt;/el-button&gt;</code><ol
  class="hibot"
><li rel="0">showLoading()&nbsp;{&nbsp;</li><li rel="1">&nbsp;&nbsp;let&nbsp;loading&nbsp;=&nbsp;<span class="keyword">this</span>.$showLoading(<span class="keyword">this</span>.$t(<span class="string">"vis_message_loading"</span>));&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;setTimeout(()&nbsp;=&gt;&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;loading.close();&nbsp;</li><li rel="2">&nbsp;&nbsp;},&nbsp;<span class="num">3000</span>);&nbsp;</li><li rel="1">},</li></ol><code
  class="lang-javascript"
  style="display: none;"
>showLoading() {
  let loading = this.$showLoading(this.$t("vis_message_loading"));
  setTimeout(() =&gt; {
    loading.close();
  }, 3000);
},</code></pre>
            <p v-text="isExpandFive ? '隐藏代码' : '显示代码'" @click="handleCollapse('Five')"></p>
            <!-- <h4>js:</h4>
            <pre><ol class="hibot"><li rel="0">showLoading()&nbsp;{&nbsp;</li><li rel="1">&nbsp;&nbsp;let&nbsp;loading&nbsp;=&nbsp;<span class="keyword">this</span>.$showLoading(<span class="keyword">this</span>.$t(<span class="string">"vis_message_loading"</span>));&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;setTimeout(()&nbsp;=&gt;&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;loading.close();&nbsp;</li><li rel="2">&nbsp;&nbsp;},&nbsp;<span class="num">3000</span>);&nbsp;</li><li rel="1">},</li></ol><code
  class="lang-javascript"
  style="display: none;"
>showLoading() {
  let loading = this.$showLoading(this.$t("vis_message_loading"));
  setTimeout(() =&gt; {
    loading.close();
  }, 3000);
            },</code></pre>-->

            <p @click="goTo('/request')">request</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import security from "@/utils/security";
import { Local } from "@/utils/storage";
// 引入局部注册的组件
import VisSteps from "@/components/layout/Steps";
export default {
  name: "test",
  // data 声明数据并初始化
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      activeStep: 0,
      isExpandOne: true,
      isExpandTwo: true,
      isExpandThree: true,
      isExpandFour: true,
      isExpandFive: true,
      visSteps: ["步骤一", "步骤二", "步骤三", "步骤四"]
    };
  },
  methods: {
    ...mapActions(["setCertTypes", "setReasons"]),
    handleCollapse(type) {
      this[`isExpand${type}`] = !this[`isExpand${type}`];
    },
    async getCertTypes() {
      // 页面中使用http数据交互
      const res = await this.$http.getCertTypeData();
      if (!res) return;
      if (res.ret === "ok") {
        const certTypes = res.data;
        // 保存证件类型到vuex中
        this.setCertTypes(certTypes);
      } else {
        await this.login();
      }
    },
    async getReasons() {
      const res = await this.$http.getReason();
      if (!res) return;
      if (res.ret === "ok") {
        const reasons = res.data;
        // 保存来访事由到vuex中
        this.setReasons(reasons);
      } else {
        await this.login();
      }
    },
    async login() {
      let userForm = {};
      userForm["username"] = "admin";
      userForm["password"] = security.md5("admin");
      const res = await this.$http.login(userForm);
      if (res && res.ret === "ok") {
        const token = (res.data && res.data.token) || "";
        if (token) {
          Local.set("token", token);
        }
      } else {
        this.$openMessage({
          customClass: "error",
          msg: res.msg
        });
      }
    },
    showLoading() {
      let loading = this.$showLoading(this.$t("vis_message_loading"));
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
    goTo(path) {
      this.$router.push(path);
    }
  },
  beforeMount() {
    // (async() => {
    //   await this.login();
    // })();
  },
  computed: {
    ...mapGetters(["certTypes", "reasons"])
  },
  // 声明并定义局部注册的组件
  components: {
    [VisSteps.name]: VisSteps
  }
};
</script>



