<template>
  <div class="comic_details" v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''">
    <header class="header">
      <HeaderTab :title="title" homeButton="/?selected=comic" />
    </header>
    <div class="page-content" style="margin-top: 48px; margin-bottom: 55px;padding-top: 0;">
      <Carousel msg="123" :image_list="img_list" v-on:click.prevent.self="" />
      <div class="bs-callout bs-callout-info" id="callout-helper-bg-specificity">
        <h4>{{title}}</h4>
        <p align="left">&emsp;&emsp;{{desc}}</p>
      </div>
      <div class="page-cell"  @click="toChapter(latest_chapter.id)">
        <div class="mint-cell" v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''">
          <span class="mint-cell-mask"></span>
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title" align="left">
              <span class="mint-cell-text">最新章节</span>
            </div>
            <div class="mint-cell-value is-link"><span>{{latest_chapter.title}}</span></div> <i class="mint-cell-allow-right"></i>
          </div>
          <div class="mint-cell-right"></div>
        </div>
      </div>
      <div class="mulu_content">
        <h4>章节目录</h4>
        <mt-navbar v-model="selected" v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''">
          <mt-tab-item id="ascending">正序</mt-tab-item>
          <mt-tab-item id="descending">倒序</mt-tab-item>
        </mt-navbar>
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="ascending">
              <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" align="left" style="margin-top:3px" v-for="item in chapter" v-bind:key="item.id">
                <span @click="toChapter(item.id)">{{item.title}}</span>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="descending">
              <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" align="left" style="margin-top:3px" v-for="item in chapter_reverse" v-bind:key="item.id">
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

import { getComicDetail } from "../api/comicApi";

export default {
  name: "ComicDetail",
  components: {
    HeaderTab,
    Carousel
  },
  data: function() {
    console.log(this.GLOBAL.night_mode);
    return {
      selected: "ascending",
      img_list: [],
      title: "",
      desc: "",
      latest_chapter: "",
      chapter: [],
      chapter_reverse: [],
    };
  },
  mounted: function() {
    getComicDetail(this.$route.params.comic_id).then(res => {
      console.log(res);
      const temp_chapter = JSON.parse(JSON.stringify(res.chapter));;
      temp_chapter.reverse();
      this.$data.img_list = res.cover;
      this.$data.title = res.title;
      this.$data.desc = res.desc;
      this.$data.chapter = res.chapter;
      this.$data.chapter_reverse = temp_chapter;
      this.$data.latest_chapter = temp_chapter?temp_chapter[0]:'';
      console.log(this.$data.chapter[0].title);
      console.log(this.$data.chapter_reverse[0].title);
    });
  },
  methods: {
    toChapter: function (chapter_id) {
      this.$router.push({name: 'comicChapterDetail', params:{chapter_id: chapter_id}});
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
.col-xs-6{
  width: 50%;
  float: left;
}
h4 {
  margin: 5px auto;
  font-weight: inherit;
}
</style>
