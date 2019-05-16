<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/common/_code";
.request {
  &__body {
    &__title {
      margin: 20px 0;
    }
    &__content {
      margin-bottom: 100px;
    }
  }
}
</style>
<template>
  <div class="request">
    <div class="request__head">
      <zk-header :showBack="true" title="http request"></zk-header>
    </div>
    <div class="request__body">
      <div class="request__body__title">
        <h2>一、测试http数据交互功能(axios)异步库</h2>
      </div>
      <div class="request__body__content">
        <el-button type="primary" round @click="getCertTypes">获取证件类型</el-button>
        <el-button type="primary" round @click="getReasons">获取来访事由</el-button>
        <div class="code" :style="`height:${isExpand ? '1058px' : '0'};`">
          <h4>html+js：</h4>
          <pre>
            <ol class="hibot"><li
  rel="0"
>&lt;el-button&nbsp;type="primary"&nbsp;round&nbsp;@click="getCertTypes"&gt;获取证件类型&lt;/el-button&gt;&nbsp;</li><li
  rel="0"
>&lt;el-button&nbsp;type="primary"&nbsp;round&nbsp;@click="getReasons"&gt;获取来访事由&lt;/el-button&gt;</li></ol>
             <code
  class="lang-html"
  style="display: none;"
>&lt;el-button type="primary" round @click="getCertTypes"&gt;获取证件类型&lt;/el-button&gt;
&lt;el-button type="primary" round @click="getReasons"&gt;获取来访事由&lt;/el-button&gt;</code>
              <ol class="hibot"><li rel="0">&nbsp;</li><li rel="0"><span class="comment">//&nbsp;1.&nbsp;api</span>&nbsp;</li><li rel="0"><span class="keyword">import</span>&nbsp;axios&nbsp;from&nbsp;<span class="string">"@/axios/api"</span>;&nbsp;</li><li
  rel="0"
><span class="keyword">import</span>&nbsp;requestURL&nbsp;from&nbsp;<span class="string">"@/axios/requestURL"</span>;&nbsp;</li><li
  rel="0"
>&nbsp;</li><li rel="0"><span class="comment">/**&nbsp;</span>&nbsp;</li><li rel="1"><span class="comment">&nbsp;*&nbsp;获取证件类型所有数据信息</span>&nbsp;</li><li rel="1"><span class="comment">&nbsp;*/</span>&nbsp;</li><li rel="0"><span class="keyword">const</span>&nbsp;getCertTypeData&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;axios({&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;url:&nbsp;requestURL.visGetCertTypeDataURL,&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;method:&nbsp;<span class="string">'get'</span>,&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;})&nbsp;</li><li rel="1">}&nbsp;</li><li rel="0">&nbsp;</li><li rel="0"><span class="comment">/**&nbsp;</span>&nbsp;</li><li rel="1"><span class="comment">&nbsp;*&nbsp;获取来访事由信息</span>&nbsp;</li><li rel="1"><span class="comment">&nbsp;*/</span>&nbsp;</li><li rel="0"><span class="keyword">const</span>&nbsp;getReason&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;axios({&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url:&nbsp;`${requestURL.baseURL}<span
  class="reg"
>/visReason.do?getReasonTree`,</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method:&nbsp;<span class="string">'post'</span>,&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;})&nbsp;</li><li rel="1">}&nbsp;</li><li rel="0">&nbsp;</li><li rel="0"><span class="comment">//2.&nbsp;&nbsp;xxx.vue</span>&nbsp;</li><li rel="0"><span class="keyword">import</span>&nbsp;{&nbsp;mapGetters,&nbsp;mapActions&nbsp;}&nbsp;from&nbsp;<span class="string">"vuex"</span>;&nbsp;</li><li
  rel="0"
><span class="keyword">export</span>&nbsp;<span class="keyword">default</span>&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;methods:&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;...mapActions([<span class="string">"setCertTypes"</span>,&nbsp;<span class="string">"setReasons"</span>]),&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;async&nbsp;getCertTypes()&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//&nbsp;页面中使用http数据交互</span>&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;res&nbsp;=&nbsp;await&nbsp;<span class="keyword">this</span>.$http.getCertTypeData();&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;(!res)&nbsp;<span class="keyword">return</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;(res.ret&nbsp;===&nbsp;<span class="string">"ok"</span>)&nbsp;{&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;certTypes&nbsp;=&nbsp;res.data;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//&nbsp;保存证件类型到vuex中</span>&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.setCertTypes(certTypes);&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</li><li rel="2">&nbsp;</li><li rel="2">&nbsp;&nbsp;&nbsp;&nbsp;async&nbsp;getReasons()&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;res&nbsp;=&nbsp;await&nbsp;<span class="keyword">this</span>.$http.getReason();&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;(!res)&nbsp;<span class="keyword">return</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;(res.ret&nbsp;===&nbsp;<span class="string">"ok"</span>)&nbsp;{&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;reasons&nbsp;=&nbsp;res.data;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">//&nbsp;保存来访事由到vuex中</span>&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.setReasons(reasons);&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><li rel="1">}</li></ol><code
  class="lang-javascript"
  style="display: none;"
>import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["setCertTypes", "setReasons"]),
    async getCertTypes() {
      // 页面中使用http数据交互
      const res = await this.$http.getCertTypeData();
      if (!res) return;
      if (res.ret === "ok") {
        const certTypes = res.data;
        // 保存证件类型到vuex中
        this.setCertTypes(certTypes);
      }
    },

    async getReasons() {
      const res = await this.$http.getReason();
      if (!res) return;
      if (res.ret === "ok") {
        const reasons = res.data;
        // 保存来访事由到vuex中
        this.setReasons(reasons);
      }
    },
  }     
}</code></pre>
          <p v-text="isExpand ? '隐藏代码' : '显示代码'" @click="handleCollapse"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import security from "@/utils/security.js";
import { Local } from "@/utils/storage";
export default {
  name: "page-a",
  data() {
    return {
      certTypesData: [],
      isExpand: true
    };
  },
  methods: {
    ...mapActions(["setCertTypes", "setReasons"]),
    openMessage() {
      this.$openMessage({
        type: "success",
        msg: "操作成功",
        // 定制样式类名
        customClass: "success",
        duration: 1000
      });
    },
    handleCollapse() {
      this["isExpand"] = !this["isExpand"];
    },
    async getCertTypes() {
      // 页面中使用http数据交互
      const res = await this.$http.getCertTypeData();
      if (!res) return;
      if (res.ret === "ok") {
        const certTypes = res.data;
        // 保存证件类型到vuex中
        this.setCertTypes(certTypes);
        setTimeout(() => {
          this.openMessage();
        }, 500);
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
        setTimeout(() => {
          this.openMessage();
        }, 500);
      } else {
        await this.login();
      }
    },
    async login() {
      let userData = {};
      userData["username"] = "admin";
      userData["password"] = security.md5("admin");
      try {
        const res = await this.$http.login(userData);
        if (!res) return;
        if (res && res.ret === "ok") {
          const token = (res.data && res.data.token) || "";
          console.log(token);
          if (token) {
            Local.set("token", token);
          }
        } else {
          this.$openMessage({
            customClass: "error",
            msg: res.msg
          });
        }
      } catch (error) {
        console.log(error);
        // this.$fileLog.error(error);
        this.$openMessage({
          customClass: "error",
          msg: this.$t("vis_message_checkNetwork")
        });
      }
    }
  },
  computed: {
    ...mapGetters(["certTypes", "reasons"])
  },
  beforeMount() {
    (async () => {
      await this.login();
    })();
  }
};
</script>
