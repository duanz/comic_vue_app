<template>
  <div class="headertab">
    <mt-header fixed v-bind:title="title?title: ''">
      <!-- <router-link :to="backButton" slot="left"> -->
      <a @click="goBack()"  slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
      <router-link :to="homeButton?homeButton:''" slot="right">
        <mt-button icon="search iconfont icon-shouye"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: "HeaderTab",
  props: {
    title: String,
    homeButton: String,
    // backButton: String
  },
  methods: {
    goBack: function(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
h1 {
    margin-top: 8px;
}
</style>
