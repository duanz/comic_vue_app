<template>
  <div class="comic_details">
    <header class="header">
      <HeaderTab msg="hello world" homeButton="/?selected=comic" />
    </header>
    <div class="page-content" style="margin-top: 48px; margin-bottom: 55px;padding-top: 0;">
      <Carousel msg="123" />
    </div>
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";
import Carousel from "@/components/Carousel.vue";

import {getComicDetail} from '../api/comicApi';

export default {
  name: "ComicDetail",
  components: {
    HeaderTab,
    Carousel,
  },
  data: function(){
    return {
      img_list: []
    }
  },
  mounted: function(){
    getComicDetail({comic_id: this.$route.params.comic_id}).then(res => {
      this.$data.img_list = res;
    })
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
