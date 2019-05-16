<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/common/_code";
.scopeComp {
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
  <div class="scopeComp">
    <div class="scopeComp__head">
      <zk-header :showBack="true" title="scopeComp"></zk-header>
    </div>
    <div class="scopeComp__body">
      <div class="scopeComp__body__title">
        <h2>测试使用局部注册的组件</h2>
      </div>
      <div class="scopeComp__body__content">
        <div class="scopeComp__body__step-bar">
          <!-- 使用局部注册的组件 -->
          <vis-steps :active="activeStep" :stepSpace="1070/(visSteps.length)" :visSteps="visSteps"></vis-steps>
        </div>
        <div class="code" :style="`height:${isExpand ? '906px' : '0'};`">
          <h4>html+js：</h4>
          <pre>
            <ol class="hibot"><li rel="0">&lt;style&nbsp;lang=<span class="string">"scss"</span>&gt;&nbsp;</li><li
  rel="0"
>.vis-steps&nbsp;{&nbsp;</li><li rel="1">&nbsp;&nbsp;<span class="keyword">width</span>:&nbsp;<span class="num">1040px</span>;&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;<span class="keyword">margin</span>:&nbsp;<span class="num">5px</span>&nbsp;<span class="val">auto</span>;&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;<span class="num">.</span>el-step__head<span class="num">.</span>is-success&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;<span class="num">.</span>is-text&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">background</span>:&nbsp;<span class="num">#7ac143</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">color</span>:&nbsp;<span class="num">#fff</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li rel="2">&nbsp;&nbsp;}&nbsp;</li><li rel="1">}&nbsp;</li><li rel="0">&lt;/style&gt;</li></ol><code
  class="lang-css"
  style="display: none;"
>&lt;style lang="scss"&gt;
.vis-steps {
  width: 1040px;
  margin: 5px auto;
  .el-step__head.is-success {
    .is-text {
      background: #7ac143;
      color: #fff;
    }
  }
}
&lt;/style&gt;</code>
<ol class="hibot"><li rel="0">&lt;template&gt;&nbsp;</li><li rel="0">&nbsp;&nbsp;<span class="keyword">&lt;div</span>&nbsp;<span class="attr">class</span>=<span class="string">"vis-steps"</span><span class="keyword">&gt;</span>&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-steps&nbsp;:active="active"&nbsp;:space="stepSpace"&nbsp;align-center&nbsp;finish-status="success"&gt;&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-step&nbsp;:title="step"&nbsp;v-for="(step,&nbsp;i)&nbsp;in&nbsp;visSteps"&nbsp;:key="i"&gt;&lt;/el-step&gt;&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-steps&gt;&nbsp;</li><li rel="1">&nbsp;&nbsp;<span class="keyword">&lt;/div&gt;</span>&nbsp;</li><li
  rel="0"
>&lt;/template&gt;</li></ol><code
  class="lang-html"
  style="display: none;"
>&lt;template&gt;
  &lt;div class="vis-steps"&gt;
    &lt;el-steps :active="active" :space="stepSpace" align-center finish-status="success"&gt;
      &lt;el-step :title="step" v-for="(step, i) in visSteps" :key="i"&gt;&lt;/el-step&gt;
    &lt;/el-steps&gt;
  &lt;/div&gt;
&lt;/template&gt;</code>
<ol class="hibot"><li rel="0">&lt;script&gt;&nbsp;</li><li rel="0"><span class="keyword">export</span>&nbsp;<span class="keyword">default</span>&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;name:&nbsp;<span class="string">"vis-steps"</span>,&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;props:&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;active:&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;<span class="keyword">Number</span>,&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">default</span>:&nbsp;<span class="num">1</span>&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;visSteps:&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;<span class="keyword">Array</span>,&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">default</span>:&nbsp;[<span class="string">"步骤&nbsp;1"</span>,&nbsp;<span class="string">"步骤&nbsp;2"</span>,&nbsp;<span class="string">"步骤&nbsp;3"</span>]&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;stepSpace:&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;<span class="keyword">Number</span>,&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">default</span>:&nbsp;<span class="num">200</span>&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li rel="2">&nbsp;&nbsp;},&nbsp;</li><li rel="1">&nbsp;</li><li rel="1">&nbsp;&nbsp;data()&nbsp;{&nbsp;</li><li rel="2">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;{};&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;}&nbsp;</li><li rel="1">};&nbsp;</li><li rel="0">&lt;<span class="reg">/script&gt;</span></li></ol>
<code class="lang-javascript" style="display: none;">&lt;script&gt;
export default {
  name: "vis-steps",
  props: {
    active: {
      type: Number,
      default: 1
    },
    visSteps: {
      type: Array,
      default: ["步骤 1", "步骤 2", "步骤 3"]
    },
    stepSpace: {
      type: Number,
      default: 200
    }
  },

  data() {
    return {};
  }
};
&lt;/script&gt;</code></pre>
          <p v-text="isExpand ? '隐藏代码' : '显示代码'" @click="handleCollapse('Three')"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入局部注册的组件
import VisSteps from "@/components/layout/Steps";
export default {
  name: "demo-scopeComp",
  data() {
    return {
      activeStep: 1,
      isExpand: true,
      visSteps: ["步骤一", "步骤二", "步骤三", "步骤四"]
    };
  },
  methods: {
    handleCollapse() {
      this["isExpand"] = !this["isExpand"];
    }
  },
  // 声明并定义局部注册的组件
  components: {
    [VisSteps.name]: VisSteps
  }
};
</script>
