<template>
  <div class="footertab">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
          <span class="iconfont icon-Icon_manhuaB footer_tab_icon"></span>
      </mt-tab-item>
      <mt-tab-item id="recommand">
          <span class="iconfont icon-shu footer_tab_icon"></span>
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
