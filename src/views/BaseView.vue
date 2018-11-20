<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!-- <div class="page-title">{{title}}</div> -->
 
	<!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="comic">
            <comic msg="漫画" />
        </mt-tab-container-item>
        <mt-tab-container-item id="book">
            <book msg="小说" />
        </mt-tab-container-item>
        <mt-tab-container-item id="history">
            <history msg="历史" />
        </mt-tab-container-item>
        <mt-tab-container-item id="member">
            <member msg="我的" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
 
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="comic">
          <span class="iconfont icon-Icon_manhuaB footer_tab_icon"></span>
      </mt-tab-item>
      <mt-tab-item id="book">
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
import Comic from "@/views/Comic.vue";
import Book from "@/views/Book.vue";
import History from "@/views/History.vue";
import Member from "@/views/Member.vue";

export default {
  name: "BaseView",
  components: {
    Comic,
    Book,
    History,
    Member
  },
  data() {
    return {
      selected: "comic"
    };
  }
};
</script>
 
<style>
.page-tabbar {
  overflow: hidden;
  height: 100vh;
}

.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
span.footer_tab_icon {
  font-size: 45px;
}
</style>
