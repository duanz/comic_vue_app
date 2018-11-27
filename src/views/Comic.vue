<template>
  <div class="page_tabbar">
    <header class="header">
      <HeaderTab title="漫画" />
    </header>
    <div class="page-content" style="margin-top: 48px; margin-bottom: 55px;padding-top: 0;">
      <Carousel :msg="msg" type="comic" :image_list="image_list" />
      <ComicList :msg="msg" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTab from "@/components/HeaderTab.vue";
import Carousel from "@/components/Carousel.vue";
import ComicList from "@/components/ComicList.vue";

export default {
  name: "Comic",
  components: {
    HeaderTab,
    Carousel,
    ComicList
  },
  props: {
    msg: String,
    image_list: Array
  }
};
</script>

<style scoped>
div.container {
  height: 90%;
}
</style>

