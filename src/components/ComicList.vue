<template>
  <div class="comic_list panel panel-info" v-bind:style="this.GLOBAL.get_night_mode()?this.GLOBAL.get_night_mode_css():''">
    <div class="panel-heading text-left">{{msg}}</div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(comic, index) in comic_list" v-on:click="clickCarousel('comic', comic.id)" title="item.title" v-bind:key="index" v-bind:name="comic.title">
        <!-- //1 -->
        <div class="comic_list_item media" v-if="comic.desc_type=='PL'">
          <div class="img_block media-left">
            <img class="comic_cover" :src="comic.url" />
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{comic.title}}</h4>
            <div class="multi-break">
              <p>{{comic.desc}}</p>
            </div>
          </div>
        </div>

        <!-- //2 -->
        <div class="comic_list_item_2" v-if="comic.desc_type=='PT'">
          <div class="img_block_2">
            <img class="comic_cover" :src="comic.url" />
          </div>
          <div class="text_bottom">
            <h4 class="media-heading">{{comic.title}}</h4>
            <div class="multi-break">
              <p>{{comic.desc}}</p>
            </div>
          </div>
        </div>

        

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComicList",
  props: {
    msg: String,
    comic_list: Array
  },
  methods: {
    clickCarousel: function(type, content_id) {
      type === "comic"
        ? this.$router.push({
            name: "comicDetail",
            params: { comic_id: content_id }
          })
        : this.$router.push({ name: "bookDetail", book_id: content_id });
    }
  }
};
</script>

<style scoped>
.multi-break {
    position: relative;
    height: 75px;
    line-height: 25px;
    overflow: hidden;
}
.multi-break:after {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 2em;
    background: #fff;
    text-align: right;
}
.comic_cover {
  width: 100%;
}
.media-left{
  width: 35%;
}
</style>
