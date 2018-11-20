<template>
  <div class="chapter_details">
    <ul>
      <li v-for="item in img_list" v-bind:key="item.index">
        <img v-lazy='item' />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChapterDetail",
  props: {
    img_list: Array
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
