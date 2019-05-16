<style lang="scss">
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
</style>

<template>
  <div class="vis-steps">
    <el-steps :active="active" :space="stepSpace" align-center finish-status="success">
      <el-step :title="step" v-for="(step, i) in visSteps" :key="i"></el-step>
    </el-steps>
  </div>
</template>
<script>
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
</script>

