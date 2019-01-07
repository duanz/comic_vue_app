<template>
  <div class="page_tabbar">
    <header class="header">
      <HeaderTab title="小说" searchButton="/search/book"/>
    </header>
    <div class="page-content" style="margin-top: 40px; margin-bottom: 55px;padding-top: 0;">
      <Carousel :msg="barTitle" type="book" :image_list="image_list"/>
      <ComicList :barTitle="barTitle" :comic_list="comic_list" content_type="book"/>
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
      barTitle: "这是测试",
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
            temp.push(res[i].results);
          }
        }
        this.$data.comic_list = temp;
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

