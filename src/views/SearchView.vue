<template>
  <div class="page_tabbar">
    <header class="header">
      <HeaderTab
        title="搜索"
        :homeButton="dataType === 'bookSearch'?'/?selected=book':'/?selected=comic'"
      />
    </header>
    <div class="page-content" style="margin-top: 40px; margin-bottom: 55px;padding-top: 0;">
      <form class="form-horizontal">
        <div class="input-group">
          <input class="form-control" type="text" v-model="searchText" placeholder="作品名称，宁缺勿错">
          <div class="input-group-addon">
            <button type="submit" class="btn btn-primary btn-xs">取消</button>
          </div>
        </div>
      </form>

      <div v-if="searchResult" class="text-left">
        <router-link
          v-for="(item, index) in searchResult"
          :key="index"
          :to="dataType === 'bookSearch'?'/book/'+item.id:'/comic/'+item.id"
        >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTab from "@/components/HeaderTab.vue";
import Carousel from "@/components/Carousel.vue";
import ComicList from "@/components/ComicList.vue";
import { getComicList } from "../api/comicApi";
import { getBookList } from "../api/bookApi";

export default {
  name: "SearchView",
  components: {
    HeaderTab,
    Carousel,
    ComicList
  },
  data: function() {
    return {
      dataType: this.$route.name,
      searchText: "",
      searchResult: []
    };
  },
  methods: {
    get_comic_list: function() {
      let forms = { title__icontains: this.$data.searchText };
      getComicList(forms).then(res => {
        this.$data.searchResult = res.results;
      });
    },
    get_book_list: function() {
      let forms = { title__icontains: this.$data.searchText };
      getBookList(forms).then(res => {
        this.$data.searchResult = res.results;
      });
    }
  },
  mounted: function() {
    this.$data.dataType === "bookSearch"
      ? this.get_book_list()
      : this.get_comic_list();
  },
  watch: {
    searchText: function(val) {
      this.$data.dataType === "bookSearch"
        ? this.get_book_list()
        : this.get_comic_list();
      console.log(this.$data.searchResult);
    }
  }
};
</script>

<style scoped>
div.container {
  height: 90%;
}
.input-group-addon {
  padding: 0px 4px;
}
</style>

