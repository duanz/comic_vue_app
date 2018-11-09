<template>
  <div class="page_tabbar">
    <header class="header">
      <HeaderTab msg="hello world" />
    </header>
    <div class="page-content" style="margin-top: 40px;padding-top: 0;">
      <Carousel msg="123" />
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

export default {
  name: "Index",
  components: {
    HeaderTab,
    FooterTab,
    Carousel
  }
};
</script>

<style scoped>
div.container {
  height: 90%;
}
</style>

