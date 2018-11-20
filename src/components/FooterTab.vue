<template>
  <div class="footertab">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <router-link to="/index">
          <span class="iconfont icon-Icon_manhuaB footer_tab_icon"></span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="recommand">
        <router-link to="/book">
          <span class="iconfont icon-shu footer_tab_icon"></span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="history">
        <span class="iconfont icon-buxing footer_tab_icon"></span>
      </mt-tab-item>
      <mt-tab-item id="member">
        <span class="iconfont icon-geren footer_tab_icon"></span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "FooterTab",
  data() {
    return {
      selected: "home"
    };
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
span.footer_tab_icon {
  font-size: 45px;
}
</style>
