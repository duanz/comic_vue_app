<template>
  <div class="page_tabbar">
    <header class="header">
      <HeaderTab msg="hello world" />
    </header>
    <div class="page-content" style="margin-top: 48px; margin-bottom: 55px;padding-top: 0;">
      <Carousel msg="123" />
      <ComicList msg="test" />
    </div>
    <div class="mint-tabbar is-fixed">
      <FooterTab msg="hello world" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "@/components/FooterTab.vue";
import Carousel from "@/components/Carousel.vue";
import ComicList from "@/components/ComicList.vue";

export default {
  name: "Index",
  components: {
    HeaderTab,
    FooterTab,
    Carousel,
    ComicList
  }
};
</script>

<style scoped>
div.container {
  height: 90%;
}
</style>

