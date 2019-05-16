<style lang="scss" scoped>
@import "~@/styles/common/_code";
.globalText {
  &__body {
    &__title {
      margin: 20px 0;
    }
    &__content {
      margin-bottom: 100px auto 0;
      .mar-top15 {
        margin-top: 15px;
      }
    }
  }
}
</style>

<template>
  <div class="globalText">
    <div class="globalText__head">
      <!-- 使用全局注册的组件 -->
      <zk-header :showBack="true" title="获取国际化文本"></zk-header>
    </div>
    <div class="globalText__body">
      <div class="globalText__body-wrapper">
        <div class="globalText__body__title">
          <h2>测试获取国际化文本</h2>
        </div>
        <div class="globalText__body__content text-center">
          <h3>1.html中获取国际化文本</h3>
          <p>{{ $t('vis_clientName') }}</p>
          <h4>2.js中获取国际化文本</h4>
          <p @click="getGlobalText">点击国际化文本</p>
          <div class="code" :style="`height:${isExpand ? '398px' : '0'};`">
            <pre><h4 class="mar-top15">i18n:</h4><ol class="hibot"><li rel="0"><span class="comment">//&nbsp;中文语言包</span>&nbsp;</li><li rel="0"><span class="keyword">const</span>&nbsp;zh_CN&nbsp;=&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;vis_clientName:&nbsp;<span class="string">"{{&nbsp;$t('vis_clientName')&nbsp;}}"</span>,&nbsp;</li><li
  rel="1"
>}&nbsp;</li><li rel="0">&nbsp;</li><li rel="0"><span class="keyword">export</span>&nbsp;<span class="keyword">default</span>&nbsp;zh_CN</li></ol><h4>xxx.vue:</h4><ol class="hibot"><li rel="0"><span class="comment">&lt;!--&nbsp;html中获取国际化文本&nbsp;--&gt;</span>&nbsp;</li><li
  rel="0"
><span class="keyword">&lt;p</span><span class="keyword">&gt;</span>{{ $t(<span class="string">"vis_clientName"</span>) }}<span class="keyword">&lt;/p&gt;</span></li></ol>
<ol class="hibot"><li rel="0"><span class="comment">//&nbsp;js中获取国际化文本</span>&nbsp;</li><li rel="0"><span class="keyword">this</span>.$t(<span class="string">"vis_clientName"</span>)</li></ol></pre>

            <p v-text="isExpand ? '隐藏代码' : '显示代码'" @click="handleCollapse()"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "global-text",
  data() {
    return {
      isExpand: true
    };
  },
  methods: {
    handleCollapse() {
      this["isExpand"] = !this["isExpand"];
    },
    getGlobalText() {
      let globalText = this.$t("vis_clientName");
      this.$openMessage({
        type: "info",
        msg: globalText,
        // 定制样式类名
        customClass: "info",
        duration: 1000
      });
    }
  }
};
</script>

