<template>
  <div
    class="page-tabbar"
    v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''"
  >
    <div class="page-wrap">
      <!-- <div class="page-title">{{title}}</div> -->
      <!-- tabcontainer -->
      <mt-tab-container
        class="page-tabbar-container"
        v-model="selected"
        v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''"
      >
        <mt-tab-container-item id="comic">
          <comic/>
        </mt-tab-container-item>
        <mt-tab-container-item id="book">
          <book/>
        </mt-tab-container-item>
        <mt-tab-container-item id="history">
          <history/>
        </mt-tab-container-item>
        <mt-tab-container-item id="member">
          <member/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar
      v-model="selected"
      fixed
      v-bind:style="this.GLOBAL.get_night_mode()?'background-color:darkgrey':'background-color:#d5d5d5'"
    >
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

const _image_list = [
  {
    id: 1,
    url:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541874793051&di=21e0827b62d75dada6078c0ee38a9ccc&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9345d688d43f8794906df240df1b0ef41ad53ac9.jpg",
    title: "111"
  },
  {
    id: 2,
    url:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541874793051&di=21e0827b62d75dada6078c0ee38a9ccc&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9345d688d43f8794906df240df1b0ef41ad53ac9.jpg",
    title: "2222"
  },
  {
    id: 3,
    url:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541874793051&di=21e0827b62d75dada6078c0ee38a9ccc&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9345d688d43f8794906df240df1b0ef41ad53ac9.jpg",
    title: "322"
  },
  {
    id: 4,
    url:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541874793051&di=21e0827b62d75dada6078c0ee38a9ccc&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9345d688d43f8794906df240df1b0ef41ad53ac9.jpg",
    title: "433"
  }
];

export default {
  name: "BaseView",
  components: {
    Comic,
    Book,
    History,
    Member
  },
  data() {
    console.log(this.$route.query.selected);
    return {
      selected: this.$route.query.selected
        ? this.$route.query.selected
        : this.GLOBAL.footer_selected,
      image_list: _image_list
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
