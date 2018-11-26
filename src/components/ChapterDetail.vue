<template>
  <div class="chapter_details">
    <ul style="list-style:none; padding-left:0px">
      <li v-for="item in image_list" v-bind:key="item.index">
        <img v-lazy='item' />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChapterDetail",
  props: {
    image_list: Array
  }
};
</script>

<style scoped>
image[lazy="loading"] {
  width: 100%;
  height: 300px;
  margin: 0;
}
img[lazy="loaded"] {
  width: 100%;
  /* height: 300px; */
  margin: 0;
}
</style>
