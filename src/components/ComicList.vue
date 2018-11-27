<template>
  <div class="comic_list" v-bind:style="this.GLOBAL.night_mode?this.GLOBAL.night_mode_css:''">
    <div class="comic_list_item media" v-for="item in comic_list" title="item.title"  v-bind:key="item.title" v-bind:name="item.title">
      <div class="img_block media-left" >
        <img class="comic_cover" :src="item.url" />
        <div class="comic_cover_jiao">更新</div>
      </div>
      <div class="media-body">
        <h3 class="media-heading">{{item.title}}</h3>
        <span>{{item.title}}</span>
      </div>
    </div>

// 第二种
    <div class="comic_list_item_2" v-for="item in comic_list" title="item.title"  v-bind:key="item.index" v-bind:name="item.title" v-on:click="clickBlock(type, item.id)">
      <div class="img_block_2" >
        <img class="comic_cover_2" :src="item.url" />
        <div class="comic_cover_jiao_2">更新</div>
      </div>
      <div class="text_bottom">
        <h3 class="media-heading">{{item.title}}</h3>
        <span>{{item.title}}</span>
      </div>
    </div>


  </div>
</template>

<script>
import { clickToContent } from "../utils/common.js";

export default {
  name: "ComicList",
  data: function() {
    return {
      comic_list: [
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
      ]
    };
  },
  props: {
    msg: String,
    type: String
  },
  methods: {
    clickBlock: function(type, content_id) {
      clickToContent(this, type, content_id);
    }
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
  display: block;
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
  vertical-align: middle;
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
