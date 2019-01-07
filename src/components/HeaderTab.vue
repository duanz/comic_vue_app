<template>
  <div class="headertab">
    <mt-header fixed v-bind:title="title?title: ''">
      <a @click="goBack()" slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
      <router-link :to="homeButton?homeButton:searchButton" slot="right">
        <mt-button :icon="homeButton?'search iconfont icon-shouye':'search iconfont icon-sousuo'"></mt-button>
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
    searchButton: { default: "" }
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>