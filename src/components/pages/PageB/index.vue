<template>
  <div class="pageB">
    <div class="pageB__head">
      <zk-header :showBack="true" title="Page B"></zk-header>
    </div>
    <div class="pageB__body">
      <div class="pageB__body-title">
        <h2>获取vuex中的数据</h2>
      </div>
      <div class="pageB__body-content">
        <h3>来访事由：</h3>
        <div class="pageB__body__data">
           <p v-if="reasonsData && reasonsData.length">
            <pre>
              <code>
                {{
                  reasonsData
                }}
              </code>
            </pre>
          </p>
          <p v-else>
            没有数据
            <!-- {{ reasonsData && reasonsData.length ? `<pre>${reasonsData}</pre>` : '没有数据' }} -->
          </p>
        </div>
        <el-button type="primary" @click="getReasons">获取来访事由</el-button>
        <el-button type="primary" @click="clearReasons">清空来访事由</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "page-b",
  data() {
    return {
      reasonsData: []
    };
  },
  methods: {
    ...mapActions(['setReasons']),
    getReasons() {
      this.reasonsData = this.reasons || [];
    },
    clearReasons() {
      this.setReasons([]);
      this.certTypesData = this.certTypes;
    }
  },
  computed: {
    ...mapGetters(["reasons"])
  },
  beforeMount(){
    this.getReasons();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pageB {
  &__body__data {
    margin: 20px 0;
  }
}
</style>
