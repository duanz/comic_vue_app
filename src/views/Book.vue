<template>
  <div class="page_tabbar">
    <header class="header">
      <HeaderTab title="漫画"/>
    </header>
    <div class="page-content" style="margin-top: 48px; margin-bottom: 55px;padding-top: 0;">
      <Carousel :msg="msg" type="book" :image_list="image_list"/>
      <ComicList :msg="msg" :comic_list="comic_list"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTab from "@/components/HeaderTab.vue";
import Carousel from "@/components/Carousel.vue";
import ComicList from "@/components/ComicList.vue";
import { getBookIndex } from "../api/bookApi";

export default {
  name: "Book",
  components: {
    HeaderTab,
    Carousel,
    ComicList
  },
  data: function() {
    return {
      msg: "这是测试",
      image_list: [],
      comic_list: []
    };
  },
  methods: {
    get_book_index: function() {
      getBookIndex().then(res => {
        const temp = [];
        for (var i = 0; i < res.length; i++) {
          if (res[i].block_type == "carousel") {
            this.$data.image_list = res[i].results;
          } else {
            console.log(res[i].results.desc_type);
            temp.push(res[i].results);
          }
        }
        this.$data.comic_list = temp;
        console.log("==========");
        console.log(this.$data.comic_list);
      });
    }
  },
  mounted: function() {
    this.get_book_index();
  }
};
</script>

<style scoped>
div.container {
  height: 90%;
}
</style>

