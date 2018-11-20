<template>
  <div class="headertab">
    <mt-header fixed v-bind:title="title">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="/index" slot="right">
        <mt-button icon="search iconfont icon-shouye"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: "HeaderTab",
  props: {
    title: String
  }
};
</script>

<style scoped>
</style>
