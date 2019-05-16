<template>
  <div class="hello">
    <div class="hello__head">
      <zk-header :showBack="true" title="Hello"></zk-header>
    </div>
    <div class="hello__body">
      <img src="static/logo.png">
      <h2>Hello World</h2>
      <h3>{{ $t("vis_clientName") }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "hello-world",
  data() {
    return {
    };
  },
  beforeMount() {
    console.log(this.$t);
  }
};
</script>

