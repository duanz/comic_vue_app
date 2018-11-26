<template>
  <div class="carousel">
    <mt-swipe :auto="4000" showIndicators>
      <mt-swipe-item v-for="item in image_list" v-bind:key="item.title" v-bind:name="item.title">
        <div class="img-block" v-on:click="clickCarousel(type, item.id)" v-bind:style="{backgroundImage:'url(' + item.url + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}">
          <p class="carousel-title">{{item.title}}</p>
          </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
const _image_list = [
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
      ];

export default {
  name: "Carousel",
  props: {
    msg: String,
    type: String,
    image_list: {
      type:Array,
      default: _image_list
      }
  },
  methods:{
    clickCarousel: function(type, content_id){
      type==="comic" ? this.$router.push({name: 'comicDetail', params:{comic_id: content_id}}) : this.$router.push({name: 'bookDetail', book_id: content_id});
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
