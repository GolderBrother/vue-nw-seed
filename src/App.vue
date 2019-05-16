<template>
  <div id="app">
    <!-- 配置路由动画 -->
    <transition :name="transitionName">
      <router-view class="router-box"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-right"
    } 
  },
  methods: {
    // 根据路由的前进后退，设定不同的过渡动画的class类名
    routerAnimation() {
      this.$navigation.on("forward", (to, from) => {
        this.transitionName = "slide-left";
      });
      this.$navigation.on("back", (to, from) => {
        this.transitionName = "slide-right";
      });
    },
    // 路由发生变化的时候执行
    handleRouteChange() {
      this.routerAnimation();
    },
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: "handleRouteChange"
  }
};
</script>

<style>
html {
  overflow-x: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-box {
  position: absolute;
  width: 100%;
  transition: all 0.5s ease-in-out;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
