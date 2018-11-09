<template>
  <div class="footertab">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <span class="iconfont icon-shouye footer_tab_icon"></span>
      </mt-tab-item>
      <mt-tab-item id="recommand">
        <span class="iconfont icon-xitongcaidan footer_tab_icon"></span>
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
  props: {
    msg: String,
    selected: "home"
  }
};
</script>

<style scoped>
span.footer_tab_icon{
  font-size: 45px;
}
</style>
