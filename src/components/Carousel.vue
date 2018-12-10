<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="carousel">
        <mt-swipe :auto="4000" showIndicators>
          <mt-swipe-item
            v-for="(item, index) in image_list"
            v-bind:key="index"
            v-bind:name="item.title"
          >
            <div
              class="img-block"
              v-on:click="clickCarousel(type, item.id)"
              v-bind:style="{backgroundImage:'url(' + item.url + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"
            >
              <p class="carousel-title">{{item.title}}</p>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    msg: String,
    type: String,
    image_list: Array
  },
  methods: {
    clickCarousel: function(type, content_id) {
      type === "comic"
        ? this.$router.push({
            name: "comicDetail",
            params: { comic_id: content_id }
          })
        : this.$router.push({
            name: "bookDetail",
            params: { book_id: content_id }
          });
    }
  }
};
</script>

<style scoped>
template {
  background-color: whitesmoke;
}
.carousel {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 8px;
}

.carousel-title {
  background: #e4e2da;
  color: #000000;
  position: absolute;
  bottom: 0;
  margin: 0 0;
  width: inherit;
  text-align: left;
  padding-top: 20px;
  filter: alpha(Opacity=60);
  -moz-opacity: 0.6;
  opacity: 0.6;
}

.img-block {
  height: 100%;
  width: 100%;
  background-size: cover !important;
}
</style>
