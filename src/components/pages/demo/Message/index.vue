<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/common/_code";
.message {
  &__body {
    &__title {
      margin: 20px 0;
    }
    &__content {
      margin-bottom: 100px auto 0;
    }
    &-loading {
      margin-top: 40px;
    }
  }
}
</style>
<template>
  <div class="message">
    <div class="message__head">
      <zk-header :showBack="true" title="message"></zk-header>
    </div>
    <div class="message__body">
      <div class="message__body__title">
        <h2>测试使用全局定义的消息框功能</h2>
      </div>
      <div class="message__body__content">
        <div class="message__body-wrapper">
          <div class="message__body-message">
            <h4>一、消息提示框</h4>
            <el-button type="success" round @click="openMessage('success', 'success')">打开成功的消息提示框</el-button>
            <el-button type="danger" round @click="openMessage('error', 'error')">打开错误的消息提示框</el-button>
            <el-button type="primary" round @click="openMessage('info', 'info')">打开普通信息的消息提示框</el-button>
            <el-button type="warning" round @click="openMessage('warning', 'warning')">打开警告的消息提示框</el-button>
            <div class="code" :style="`height:${isExpandOne ? '482px' : '0'};`">
              <pre>
                  <ol class="hibot"><li
  rel="0"
>&lt;el-button&nbsp;type="success"&nbsp;round&nbsp;@click="openMessage('success',&nbsp;'success')"&gt;打开成功的消息提示框&lt;/el-button&gt;&nbsp;</li><li
  rel="0"
>&lt;el-button&nbsp;type="danger"&nbsp;round&nbsp;@click="openMessage('error',&nbsp;'error')"&gt;打开错误的消息提示框&lt;/el-button&gt;&nbsp;</li><li
  rel="0"
>&lt;el-button&nbsp;type="primary"&nbsp;round&nbsp;@click="openMessage('info',&nbsp;'info')"&gt;打开普通信息的消息提示框&lt;/el-button&gt;&nbsp;</li><li
  rel="0"
>&lt;el-button&nbsp;type="warning"&nbsp;round&nbsp;@click="openMessage('warning',&nbsp;'warning')"&gt;打开警告的消息提示框&lt;/el-button&gt;</li></ol>
                  <ol class="hibot"><li rel="0">openMessage(type,&nbsp;msg)&nbsp;{&nbsp;</li><li rel="1">&nbsp;&nbsp;<span class="keyword">this</span>.$openMessage({&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;type,&nbsp;</li><li rel="2">&nbsp;&nbsp;&nbsp;&nbsp;msg,&nbsp;</li><li rel="2">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//&nbsp;定制样式类名</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;customClass:&nbsp;`msg-${type}`,&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;duration:&nbsp;<span class="num">1000</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;});&nbsp;</li><li rel="1">},</li></ol>
              </pre>
              <p v-text="isExpandTwo ? '隐藏代码' : '显示代码'" @click="handleCollapse('One')"></p>
            </div>
          </div>
          <div class="message__body-loading">
            <h4>二、全屏加载框</h4>
            <el-button type="primary" round @click="showLoading">开启全屏加载框</el-button>
            <div class="code" :style="`height:${isExpandTwo ? '370px' : '0'};`">
              <h4>html+js：</h4>
              <pre>
            <h4>xxx.vue:</h4>
            <ol class="hibot"><li
  rel="0"
>&lt;el-button&nbsp;type="primary"&nbsp;round&nbsp;@click="showLoading"&gt;开启全屏加载框&lt;/el-button&gt;</li></ol>
            <ol class="hibot"><li rel="0">showLoading()&nbsp;{&nbsp;</li><li rel="1">&nbsp;&nbsp;let&nbsp;loading&nbsp;=&nbsp;<span class="keyword">this</span>.$showLoading(<span class="keyword">this</span>.$t(<span class="string">"vis_message_loading"</span>));&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;setTimeout(()&nbsp;=&gt;&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;loading.close();&nbsp;</li><li rel="2">&nbsp;&nbsp;},&nbsp;<span class="num">3000</span>);&nbsp;</li><li rel="1">}</li></ol>
          </pre>
              <p v-text="isExpandTwo ? '隐藏代码' : '显示代码'" @click="handleCollapse('Two')"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo-message",
  data() {
    return {
      isExpandOne: true,
      isExpandTwo: true
    };
  },
  methods: {
    handleCollapse(type) {
      this[`isExpand${type}`] = !this[`isExpand${type}`];
    },
    openMessage(type, msg) {
      this.$openMessage({
        type,
        msg,
        // 定制样式类名
        customClass: type,
        duration: 1000
      });
    },
    showLoading() {
      let loading = this.$showLoading(this.$t("vis_message_loading"));
      setTimeout(() => {
        loading.close();
      }, 3000);
    }
  }
};
</script>
