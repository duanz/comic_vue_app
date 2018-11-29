<template>
  <div class="comic_list" v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''">
    <!-- <div v-for="item in comic_list" title="item.title" v-bind:key="item.title" v-bind:name="item.title"> -->
      <!-- //1 -->
      <div class="comic_list_item media" v-if="comic.desc_type=='PL'">
        <div class="img_block media-left">
          <img class="comic_cover" :src="comic.url" />
          <div class="comic_cover_jiao">更新</div>
        </div>
        <div class="media-body">
          <h3 class="media-heading">{{comic.title}}</h3>
          <span>{{comic.title}}</span>
        </div>
      </div>

      <!-- //2 -->
      <div class="comic_list_item_2" v-if="comic.desc_type=='PT'">
        <div class="img_block_2">
          <img class="comic_cover_2" :src="comic.url" />
          <div class="comic_cover_jiao_2">更新</div>
        </div>
        <div class="text_bottom">
          <h3 class="media-heading">{{comic.title}}</h3>
          <span>{{comic.title}}</span>
        </div>
      </div>

    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "ComicList",
  props: {
    msg: String,
    comic: Array
  }
};
</script>

<style scoped>
.comic_list {
  background-color: white;
}
.carousel {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 8px;
}

.comic_cover {
  width: 108px;
  /* display: block; */
  vertical-align: middle;
  border: 0;
}

.img_block_2 {
  max-height: 180px;
  overflow: hidden;
}

.comic_cover_2 {
  width: 100%;
  display: block;
  /* vertical-align: middle; */
  border: 0;
}

.text_bottom {
  text-align: left;
}

.comic_list_item_2 {
  border: #f5f5f59e solid 2px;
  padding: 3px 0px;
}

/* 以下来自bootstrap */
.media:first-child {
  margin-top: 0;
}
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.media {
  border-bottom: #f5f5f59e solid 2px;
  padding: 3px 0px;
}

.media-body,
.media-left,
.media-right {
  display: table-cell;
  vertical-align: top;
}
.media-left,
.media > .pull-left {
  padding-right: 10px;
}

.media-body {
  width: 10000px;
}

.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
</style>
