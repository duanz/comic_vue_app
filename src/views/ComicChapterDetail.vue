<template>
  <div class="comic_details">
    <header class="header">
      <HeaderTab msg="hello world" homeButton="/?selected=comic"/>
    </header>
    <div class="page-content" style="margin-top: 48px; margin-bottom: 55px;padding-top: 0;">
      <ChapterDetail msg="123" :image_list="image_list" v-on:click.prevent.self/>
      <p>
        <button
          type="button"
          class="btn btn-primary"
          @click="getChapterDetail(pre_chapter)"
        >{{pre_chapter?"上一章": "已是首页"}}</button>
        <button
          type="button"
          class="btn btn-default"
          @click="getChapterDetail(next_chapter)"
        >{{next_chapter?"下一章": "已是末页"}}</button>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";
import ChapterDetail from "@/components/ChapterDetail.vue";

import { getComicChapterDetail } from "../api/comicApi";

export default {
  name: "ComicChapterDetail",
  components: {
    HeaderTab,
    ChapterDetail
  },
  data: function() {
    return {
      selected: "ascending",
      image_list: [],
      pre_chapter: 1,
      next_chapter: 1
    };
  },
  methods: {
    getChapterDetail: function(chapter_id) {
      if (!chapter_id) {
        return;
      }
      getComicChapterDetail(chapter_id).then(res => {
        this.$data.image_list = res.image_url_list;
        this.$data.pre_chapter = res.relate_chapter_id.pre_id;
        this.$data.next_chapter = res.relate_chapter_id.next_id;
        this.GLOBAL.setViewHistory("comic", res.comic_id, chapter_id, res.comic_title, res.title);
      });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  mounted: function() {
    this.getChapterDetail(this.$route.params.chapter_id);
  }
};
</script>

<style scoped>
image[lazy="loading"] {
  width: 100%;
  height: 300px;
  margin: 0;
}
</style>