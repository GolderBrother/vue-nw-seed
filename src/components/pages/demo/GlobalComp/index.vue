<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/common/_code";
.globalComp {
  &__body {
    &__title {
      margin: 20px 0;
    }
    &__content {
      margin-bottom: 100px auto 0;
    }
    .header-right {
      margin-right: 20px;
    }
  }
}
</style>
<template>
  <div class="globalComp">
    <div class="globalComp__head">
      <zk-header :showBack="true" title="globalComp"></zk-header>
    </div>
    <div class="globalComp__body">
      <div class="globalComp__body__title">
        <h2>测试使用全局注册的组件</h2>
      </div>
      <div class="globalComp__body__content">
        <div class="globalComp__body__header">
          <zk-header :showBack="true" title="全局注册的组件">
            <p slot="right" class="fr header-right">text</p>
          </zk-header>
        </div>
        <div class="code" :style="`height:${isExpand ? '1974px' : '0'};`">
          <h4>html+js：</h4>
          <pre><h4>ZKHeader.vue:</h4><ol class="hibot"><li rel="0">&lt;style&nbsp;lang=<span class="string">"scss"</span>&gt;&nbsp;</li><li
  rel="0"
>.zk&nbsp;{&nbsp;</li><li rel="1">&nbsp;&nbsp;&amp;-head&nbsp;{&nbsp;</li><li rel="2">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">width</span>:&nbsp;<span class="num">100</span>%;&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">height</span>:&nbsp;<span class="num">70px</span>;&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">background-color</span>:&nbsp;<span class="num">#656565</span>;&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;opacity:&nbsp;<span class="num">1</span>;&nbsp;</li><li
  rel="2"
>&nbsp;</li><li rel="2">&nbsp;&nbsp;&nbsp;&nbsp;<span class="num">.</span>zk-title&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">position</span>:&nbsp;<span class="val">relative</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">height</span>:&nbsp;<span class="num">100</span>%;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">line-height</span>:&nbsp;<span class="num">70px</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">text-align</span>:&nbsp;<span class="val">center</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">color</span>:&nbsp;<span class="num">#fff</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">font-size</span>:&nbsp;<span class="num">26px</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">clear</span>:&nbsp;<span class="val">both</span>;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-webkit-app-region:&nbsp;drag;&nbsp;</li><li
  rel="3"
>&nbsp;</li><li rel="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="num">.</span>back-box&nbsp;{&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">position</span>:&nbsp;<span class="val">absolute</span>;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">top</span>:&nbsp;<span class="num">50</span>%;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">width</span>:&nbsp;<span class="num">60px</span>;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">height</span>:&nbsp;<span class="num">100</span>%;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform:&nbsp;translateY(-<span class="num">50</span>%);&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">text-align</span>:&nbsp;<span class="val">center</span>;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">cursor</span>:&nbsp;<span class="val">pointer</span>;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-webkit-app-region:&nbsp;no-drag;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
  class="comment"
>//&nbsp;background:&nbsp;url("~@/assets/icons/return.png")&nbsp;no-repeat&nbsp;center&nbsp;center/14px&nbsp;auto;</span>&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&amp;<span class="num">.</span>active&nbsp;{&nbsp;</li><li
  rel="5"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">background-color</span>:&nbsp;<span class="num">#333333</span>;&nbsp;</li><li
  rel="5"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="num">.</span>icon-back&nbsp;{&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">width</span>:&nbsp;<span class="num">14px</span>;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-webkit-app-region:&nbsp;no-drag;&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li rel="2">&nbsp;&nbsp;}&nbsp;</li><li rel="1">}&nbsp;</li><li rel="0">&lt;/style&gt;</li></ol><code
  class="lang-css"
  style="display: none;"
>&lt;style lang="scss"&gt;
.zk {
  &amp;-head {
    width: 100%;
    height: 70px;
    background-color: #656565;
    opacity: 1;

    .zk-title {
      position: relative;
      height: 100%;
      line-height: 70px;
      text-align: center;
      color: #fff;
      font-size: 26px;
      clear: both;
      -webkit-app-region: drag;

      .back-box {
        position: absolute;
        top: 50%;
        width: 60px;
        height: 100%;
        transform: translateY(-50%);
        text-align: center;
        cursor: pointer;
        -webkit-app-region: no-drag;
        // background: url("~@/assets/icons/return.png") no-repeat center center/14px auto;
        &amp;.active {
          background-color: #333333;
        }
      }
      .icon-back {
        width: 14px;
        -webkit-app-region: no-drag;
      }
    }
  }
}
&lt;/style&gt;</code>
<ol class="hibot"><li rel="0">&lt;template&gt;&nbsp;</li><li rel="0">&nbsp;&nbsp;<span class="keyword">&lt;div</span>&nbsp;<span class="attr">class</span>=<span class="string">"zk-head"</span>&nbsp;:<span class="attr">class</span>=<span class="string">"className"</span><span class="keyword">&gt;</span>&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&lt;header&nbsp;class="zk-title"&gt;&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">&lt;div</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span class="attr">class</span>=<span class="string">"isActive&nbsp;?&nbsp;'back-box&nbsp;active'&nbsp;:&nbsp;'back-box'"</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-if=<span class="string">"showBack"</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ref=<span class="string">"backBox"</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@click=<span class="string">"goBack"</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">&gt;</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">&lt;img</span>&nbsp;<span class="attr">class</span>=<span class="string">"icon-back"</span>&nbsp;<span class="attr">src</span>=<span class="string">"~@/assets/icons/return.png"</span>&nbsp;<span class="attr">alt</span><span class="keyword">&gt;</span>&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">&lt;/div&gt;</span>&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">&lt;span</span><span class="keyword">&gt;</span>{{&nbsp;title&nbsp;}}<span class="keyword">&lt;/span&gt;</span>&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/header&gt;&nbsp;</li><li rel="1">&nbsp;&nbsp;<span class="keyword">&lt;/div&gt;</span>&nbsp;</li><li
  rel="0"
>&lt;/template&gt;</li></ol>
<code class="lang-html" style="display: none;">&lt;template&gt;
  &lt;div class="zk-head" :class="className"&gt;
    &lt;header class="zk-title"&gt;
      &lt;div
        :class="isActive ? 'back-box active' : 'back-box'"
        v-if="showBack"
        ref="backBox"
        @click="goBack"
      &gt;
        &lt;img class="icon-back" src="~@/assets/icons/return.png" alt&gt;
      &lt;/div&gt;
      &lt;span&gt;{{ title }}&lt;/span&gt;
    &lt;/header&gt;
  &lt;/div&gt;
&lt;/template&gt;</code>
<ol class="hibot"><li rel="0">&lt;script&gt;&nbsp;</li><li rel="0"><span class="keyword">export</span>&nbsp;<span class="keyword">default</span>&nbsp;{&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;name:&nbsp;<span class="string">"zk-header"</span>,&nbsp;</li><li
  rel="1"
>&nbsp;&nbsp;data()&nbsp;{&nbsp;</li><li rel="2">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isActive:&nbsp;<span class="keyword">false</span>&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;};&nbsp;</li><li rel="2">&nbsp;&nbsp;},&nbsp;</li><li rel="1">&nbsp;&nbsp;props:&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;className:&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;<span class="keyword">String</span>,&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">default</span>:&nbsp;<span class="string">""</span>&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;title:&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;<span class="keyword">String</span>,&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">default</span>:&nbsp;<span class="string">"title"</span>&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;},&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;showBack:&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:&nbsp;Boolean,&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">default</span>:&nbsp;<span class="keyword">false</span>&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li rel="2">&nbsp;&nbsp;},&nbsp;</li><li rel="1">&nbsp;&nbsp;methods:&nbsp;{&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;goBack()&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;historyLength&nbsp;=&nbsp;<span class="keyword">window</span>.history.length;&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;(historyLength&nbsp;&lt;&nbsp;<span class="num">1</span>)&nbsp;{&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.$router.push(<span class="string">"/"</span>);&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span class="keyword">else</span>&nbsp;{&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.$router.back(-<span class="num">1</span>);&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.$emit(<span class="string">"back"</span>,&nbsp;<span class="string">"goBack"</span>);&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li rel="2">&nbsp;&nbsp;},&nbsp;</li><li rel="1">&nbsp;&nbsp;mounted()&nbsp;{&nbsp;</li><li rel="2">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">const</span>&nbsp;$backBox&nbsp;=&nbsp;<span class="keyword">this</span>.$refs.backBox;&nbsp;</li><li
  rel="2"
>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;($backBox)&nbsp;{&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$backBox.addEventListener(<span class="string">"mousedown"</span>,&nbsp;e&nbsp;=&gt;&nbsp;{&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.$set(<span class="keyword">this</span>,&nbsp;<span class="string">"isActive"</span>,&nbsp;<span class="keyword">true</span>);&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$backBox.addEventListener(<span class="string">"mouseup"</span>,&nbsp;e&nbsp;=&gt;&nbsp;{&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.$set(<span class="keyword">this</span>,&nbsp;<span class="string">"isActive"</span>,&nbsp;<span class="keyword">false</span>);&nbsp;</li><li
  rel="4"
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});&nbsp;</li><li
  rel="3"
>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</li><li rel="2">&nbsp;&nbsp;}&nbsp;</li><li rel="1">};&nbsp;</li><li rel="0">&lt;<span class="reg">/script&gt;</span></li></ol>
<code class="lang-javascript" style="display: none;">&lt;script&gt;
export default {
  name: "zk-header",
  data() {
    return {
      isActive: false
    };
  },
  props: {
    className: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "title"
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack() {
      const historyLength = window.history.length;
      if (historyLength &lt; 1) {
        this.$router.push("/");
      } else {
        this.$router.back(-1);
      }
      this.$emit("back", "goBack");
    }
  },
  mounted() {
    const $backBox = this.$refs.backBox;
    if ($backBox) {
      $backBox.addEventListener("mousedown", e =&gt; {
        this.$set(this, "isActive", true);
      });
      $backBox.addEventListener("mouseup", e =&gt; {
        this.$set(this, "isActive", false);
      });
    }
  }
};
&lt;/script&gt;</code><h4>xxx.vue:</h4><ol class="hibot"><li rel="0">&lt;zk-header&nbsp;:showBack="true"&nbsp;title="全局注册的组件"&gt;&lt;/zk-header&gt;</li></ol><code
  class="lang-html"
  style="display: none;"
>&lt;zk-header :showBack="true" title="全局注册的组件"&gt;&lt;/zk-header&gt;</code></pre>

          <p v-text="isExpand ? '隐藏代码' : '显示代码'" @click="handleCollapse()"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo-globalComp",
  data() {
    return {
      isExpand: true,
      title: ""
    };
  },
  methods: {
    handleCollapse() {
      this["isExpand"] = !this["isExpand"];
    }
  }
};
</script>
