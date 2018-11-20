<template>
  <div class="comic_details">
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
export default {
  name: "ComicDetail",
  props: {
    comic_id: String
  },
  components: {
    HeaderTab,
    FooterTab,
    Carousel,
    ComicList
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
