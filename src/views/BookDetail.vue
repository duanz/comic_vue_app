<template>
  <div
    class="comic_details"
    v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''"
  >
    <header class="header">
      <HeaderTab :title="title" homeButton="/?selected=book"/>
    </header>
    <div class="page-content" style="margin-top: 48px; margin-bottom: 55px;padding-top: 0;">
      <Carousel msg="123" :image_list="img_list" v-on:click.prevent.self/>
      <div class="bs-callout bs-callout-info" id="callout-helper-bg-specificity">
        <h4>{{title}}</h4>
        <p align="left">&emsp;&emsp;{{desc}}</p>
      </div>
      <div class="page-cell latest_chapter_page_cell" @click="toChapter(latest_chapter.id)">
        <div
          class="mint-cell"
          v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''"
        >
          <span class="mint-cell-mask"></span>
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title" align="left">
              <span class="mint-cell-text">最新章节</span>
            </div>
            <div class="mint-cell-value is-link">
              <span>{{latest_chapter.title}}</span>
            </div>
            <i class="mint-cell-allow-right"></i>
          </div>
          <div class="mint-cell-right"></div>
        </div>        
      </div>
      <div class="page-cell last_chapter_page_cell" @click="toChapter(last_chapter_id)">
        <div v-if="last_chapter"
          class="mint-cell"
          v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''"
        >
          <span class="mint-cell-mask"></span>
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title" align="left">
              <span class="mint-cell-text">上次看到</span>
            </div>
            <div class="mint-cell-value is-link">
              <span>{{last_chapter_title}}</span>
            </div>
            <i class="mint-cell-allow-right"></i>
          </div>
          <div class="mint-cell-right"></div>
        </div>
      </div>
      
      <div class="mulu_content">
        <h4>章节目录</h4>
        <mt-navbar
          v-model="selected"
          v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''"
        >
          <mt-tab-item id="ascending">正序</mt-tab-item>
          <mt-tab-item id="descending">倒序</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="ascending">
            <div
              class="col-xs-6 col-sm-4 col-md-3 col-lg-2"
              align="left"
              style="margin-top:3px"
              v-for="item in chapter"
              v-bind:key="item.id"
            >
              <span @click="toChapter(item.id)">{{item.title}}</span>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="descending">
            <div
              class="col-xs-6 col-sm-4 col-md-3 col-lg-2"
              align="left"
              style="margin-top:3px"
              v-for="item in chapter_reverse"
              v-bind:key="item.id"
            >
              <span @click="toChapter(item.id)">{{item.title}}</span>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";
import Carousel from "@/components/Carousel.vue";

import { getBookDetail } from "../api/bookApi";

export default {
  name: "BookDetail",
  components: {
    HeaderTab,
    Carousel
  },
  data: function() {
    return {
      selected: "ascending",
      img_list: [],
      title: "",
      desc: "",
      latest_chapter: "",
      chapter: [],
      chapter_reverse: [],
      last_chapter: false,
      last_chapter_id: 0,
      last_chapter_title: ""
    };
  },
  mounted: function() {
    getBookDetail(this.$route.params.book_id).then(res => {
      const temp_chapter = JSON.parse(JSON.stringify(res.chapter));
      temp_chapter.reverse();
      this.$data.img_list = res.cover;
      this.$data.title = res.title;
      this.$data.desc = res.desc;
      this.$data.chapter = res.chapter;
      this.$data.chapter_reverse = temp_chapter;
      this.$data.latest_chapter = temp_chapter ? temp_chapter[0] : "";
    });
    this.getLastChapter();
  },
  methods: {
    toChapter: function(chapter_id) {
      this.$router.push({
        name: "bookChapterDetail",
        params: { chapter_id: chapter_id }
      });
    },
    getLastChapter: function () {
      const key_1 = this.GLOBAL.getViewHistoryContentId("book", this.$route.params.book_id);
      const details = this.GLOBAL.getViewHistory(key_1);
      console.log(details);
      if(key_1 && details){
        this.$data.last_chapter = true;
        this.$data.last_chapter_id = details.chapter_id;
        this.$data.last_chapter_title = details.chapter_title;
      }
    }
  }
};
</script>

<style scoped>
image[lazy="loading"] {
  width: 100%;
  height: 300px;
  margin: 0;
}
.col-xs-6 {
  width: 50%;
  float: left;
}
h4 {
  margin: 5px auto;
  font-weight: inherit;
}

.last_chapter_page_cell{
  border-left: #63a9e3 solid 10px;
}
.latest_chapter_page_cell{
  border-left: #e36382 solid 10px;
}
</style>
