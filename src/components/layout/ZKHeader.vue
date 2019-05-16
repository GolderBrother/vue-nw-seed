<style lang="scss">
.zk {
  &-head {
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
        &.active {
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
</style>

<template>
  <div class="zk-head" :class="className">
    <header class="zk-title">
      <div
        :class="isActive ? 'back-box active' : 'back-box'"
        v-if="showBack"
        ref="backBox"
        @click="goBack"
      >
        <img class="icon-back" src="~@/assets/icons/return.png" alt>
      </div>
      <span>{{ title }}</span>
      <slot name="right"></slot>
    </header>
  </div>
</template>

<script>
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
      if (historyLength < 1) {
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
      $backBox.addEventListener("mousedown", e => {
        this.$set(this, "isActive", true);
      });
      $backBox.addEventListener("mouseup", e => {
        this.$set(this, "isActive", false);
      });
    }
  }
};
</script>

