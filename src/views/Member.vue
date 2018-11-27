<template>
  <div class="page_tabbar" v-bind:style="this.GLOBAL.night_mode?this.GLOBAL.night_mode_css:''">
    <header class="header">
      <HeaderTab title="我的" />
    </header>
    <div class="page-content">
      <mt-cell title="夜间模式" style="text-align: left">
        <mt-switch v-model="night_mode" v-on:change="night_mode_change(night_mode)"></mt-switch>
      </mt-cell>
      <div class="night_mode_selected_pannel">
        <div class="night_mode_selected night_mode_1">
          <p>中</p>
        </div>
        <div class="night_mode_selected night_mode_2">
          <p>中</p>
        </div>
        <div class="night_mode_selected night_mode_3">
          <p>中</p>
        </div>
        <div class="night_mode_selected night_mode_4">
          <p>中</p>
        </div>
        <div class="night_mode_selected night_mode_5">
          <p>中</p>
        </div>
      </div>
      <div class="fontsize_selected_pannel">
        <mt-cell style="text-align: left">
          <div slot="title">字体大小</div>
          <mt-range v-model="font_size" @change="font_size_change()" :min="14" :max="32" style="width: 250%; text-align: right; margin-left: -150%;">
              <div slot="start">14px</div>
              <div slot="end">32px</div>
            </mt-range>
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTab from "@/components/HeaderTab.vue";
import Carousel from "@/components/Carousel.vue";
import ComicList from "@/components/ComicList.vue";

export default {
  name: "Member",
  inject: ["reload"], // 引入方法, 刷新页面不闪烁
  components: {
    HeaderTab,
    Carousel,
    ComicList
  },
  props: {
    msg: String
  },
  data: function() {
    console.log(this.GLOBAL.night_mode_css_font_size);
    return {
      night_mode: this.GLOBAL.night_mode || this.GLOBAL.night_mode == "true" ? true : false,
      font_size: this.GLOBAL.night_mode_css_font_size ? this.GLOBAL.night_mode_css_font_size  : 14
    };
  },
  methods: {
    night_mode_change: function(night_mode) {
      this.GLOBAL.night_mode = night_mode;
      this.GLOBAL.footer_selected = "member";
      sessionStorage.setItem("night_mode", night_mode);
      this.reload();  // 刷新
    },
    font_size_change: function () {
      this.GLOBAL.night_mode_css_font_size = this.$data.font_size;
      this.GLOBAL.footer_selected = "member";
      sessionStorage.setItem("night_mode_css_font_size", this.$data.font_size);
      console.log(this.GLOBAL.night_mode_css_font_size);
      this.reload();  // 刷新
    }
  }
};
</script>

<style scoped>
div.container {
  height: 90%;
}
.page-content {
  margin-top: 48px;
  margin-bottom: 55px;
  padding-top: 0;
}

.night_mode_selected_pannel {
  text-align: left;
  display: inline-block;
  /* float: left; */
}

div.night_mode_selected {
  background-color: #999;
  height: 60px;
  line-height: 60px;
  width: 60px;
  float: left;
  margin: 0px 3px;
  text-align: center;
  border-radius: 30px;
  background-repeat: no-repeat;
}

.night_mode_selected p {
  height: 60px;
  line-height: 60px;
  margin: 0px;
}

div.night_mode_1 {
  background-image: url("../assets/images/read_bg_1.jpg");
  color: aliceblue;
}

div.night_mode_2 {
  background-image: url("../assets/images/read_bg_4.jpg");
}

div.night_mode_3 {
  background-image: url("../assets/images/read_bg_5.jpg");
  color: antiquewhite;
}

div.night_mode_4 {
  background-image: url("../assets/images/read_bg_6.jpg");
}

div.night_mode_5 {
  background-image: url("../assets/images/read_bg_7.jpg");
}
</style>

