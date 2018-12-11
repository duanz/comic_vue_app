<template>
  <div
    class="comic_details"
    v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''"
  >
    <header class="header">
      <HeaderTab
        :title="title"
        homeButton="/?selected=book"
      />
    </header>
    <div
      class="page-content"
      style="margin-top: 48px; margin-bottom: 55px;padding-top: 0;"
    >
      <div
        @click="changeMenuVisiable()"
        class="content"
      >{{content}}</div>
    </div>
    <mt-popup
      v-model="menuVisiable" style="border-radius: 5px; background:unset;"
    >
      <div>
        <button
          type="button"
          class="btn btn-primary btn-block"
          @click="getChapterDetail(pre_chapter)"
        >{{pre_chapter?"上一章": "已是首页"}}</button>
        <button
          type="button"
          class="btn btn-default btn-block"
          @click="getChapterDetail(next_chapter)"
        >{{next_chapter?"下一章": "已是末页"}}</button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";

import { getBookChapterDetail } from "../api/bookApi";

export default {
  name: "BookChapterDetail",
  components: {
    HeaderTab
  },
  data: function() {
    return {
      selected: "ascending",
      content: "",
      title: "",
      pre_chapter: 1,
      next_chapter: 1,
      menuVisiable: false
    };
  },
  methods: {
    getChapterDetail: function(chapter_id) {
      if (!chapter_id) {
        return;
      }
      getBookChapterDetail(chapter_id).then(res => {
        this.$data.content = res.content;
        this.$data.title = res.title;
        this.$data.pre_chapter = res.relate_chapter_id.pre_id;
        this.$data.next_chapter = res.relate_chapter_id.next_id;
        this.GLOBAL.setViewHistory(
          "book",
          res.book_id,
          chapter_id,
          res.book_title,
          res.title
        );
      });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.$data.menuVisiable = false;
    },
    changeMenuVisiable: function() {
      this.$data.menuVisiable = this.$data.menuVisiable ? false : true;
    }
  },
  mounted: function() {
    this.getChapterDetail(this.$route.params.chapter_id);
    this.$data.menuVisiable = false;
  }
};
</script>

<style scoped>
.content {
  white-space: pre-wrap;
  text-align: left;
  padding-left: 1ch;
}
</style>

