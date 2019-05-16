<template>
  <div class="pageA">
    <div class="pageA__head">
      <zk-header :showBack="true" title="Page A"></zk-header>
    </div>
    <div class="pageA__body">
      <div class="pageA__body-title">
        <h2>获取vuex中的数据</h2>
      </div>
      <div class="pageA__body-content">
        <h3>证件类型：</h3>
        <div
          class="pageA__body__data"
        >
          <p v-if="certTypesData && certTypesData.length">
            <pre>
              <code>
                {{
                  certTypesData
                }}
              </code>
            </pre>
          </p>
          <p v-else>
            没有数据
            <!-- {{ certTypesData && certTypesData.length ? `<pre>${certTypesData}</pre>` : '没有数据' }} -->
          </p>
        </div>
        <div class="pageA__body__btn">
          <el-button type="primary" @click="getCertTypes">获取证件类型</el-button>
          <el-button type="primary" @click="clearCertTypes">清空证件类型</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "page-a",
  data() {
    return {
      certTypesData: []
    };
  },
  methods: {
    ...mapActions(['setCertTypes']),
    getCertTypes() {
      this.certTypesData = this.certTypes || [];
    },
    clearCertTypes() {
      this.setCertTypes([]);
      this.certTypesData = this.certTypes;
    }
  },
  computed: {
    ...mapGetters(["certTypes"])
  },
  beforeMount(){
    this.getCertTypes();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pageA {
  &__body__data {
    margin: 20px 0;
  }
}
</style>
