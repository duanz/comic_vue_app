<template>
  <div class="page_tabbar">
    <header class="header">
      <HeaderTab title="历史"/>
    </header>
    <div class="page-content" style="margin-top: 48px; margin-bottom: 55px;padding-top: 0;">
      <Carousel :msg="msg"/>
      <div class="history_content panel panel-info">
        <ul class="list-group">
          <li
            class="list-group-item"
            :style="list_item_style()"
            v-for="(item, index) in content_list"
            title="item.title"
            v-bind:key="index"
            v-bind:name="item.title"
          >
            <div class="list-item row">
              <div class="list-item-left text-left col-xs-6" v-on:click="clickHistoryContent(item.data_type, item.content_id)">{{item.title}}</div>
              <div class="list-item-right text-right col-xs-6" v-on:click="clickHistoryChapter(item.data_type, item.chapter_id)">{{item.chapter_title}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTab from "@/components/HeaderTab.vue";
import Carousel from "@/components/Carousel.vue";
import ComicList from "@/components/ComicList.vue";

import { getHistory } from "../api/comicApi";

export default {
  name: "History",
  components: {
    HeaderTab,
    Carousel
  },
  data: function() {
    return {
      msg: "这是测试",
      image_list: [],
      content_list: []
    };
  },
  methods: {
    get_history: function() {
      const flag = false;
      if (!flag) {
        this.$data.content_list = this.GLOBAL.getViewHistory();
      } else {
        // 如果登陆了
        getHistory().then(res => {
          this.$data.content_list = res;
        });
      }
      console.log(this.$data.content_list);
    },
    list_item_style: function() {
      return {
        backgroundColor: this.GLOBAL.getRandColor()
      };
    },
    clickHistoryContent: function(type, content_id) {
      type === "comic"
        ? this.$router.push({
            name: "comicDetail",
            params: { comic_id: content_id }
          })
        : this.$router.push({
            name: "bookDetail",
            params: { book_id: content_id }
          });
    },
    clickHistoryChapter: function (type, chapter_id) {
      type === "comic"
        ? this.$router.push({
            name: "comicChapterDetail",
            params: { chapter_id: chapter_id }
          })
        : this.$router.push({
            name: "bookChapterDetail",
            params: { chapter_id: chapter_id }
          });
    }
  },
  mounted: function() {
    this.get_history();
  }
};
</script>

<style scoped>
div.history_content {
  height: 90%;
}

.list-item {
  width: 100%;
}

.list-item-left {
  width: 50%;
}

.list-item-right {
  width: 50%;
}
</style>

