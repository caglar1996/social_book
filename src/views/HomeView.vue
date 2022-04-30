<template>
  <appHeader></appHeader>
  <div class="flex flex-row">
    <sideBar @category-change="updateBookMarkList"></sideBar>
    <appBookMarkList v-if="bookMarkList.length > 0" :items="bookMarkList"></appBookMarkList>
    <div v-else>Bookmark bulunamadı</div>
  </div>
</template>

<script>
import sideBar from "@/components/Home/SideBar";

export default {
  data() {
    return {
      bookMarkList: [],
    };
  },
  components: {
    sideBar,
  },
  created() {
    // ! categories tablosunu kendisni category olarak gönderirsek idyi mac ediyoru
    //! category göndermek zorundayız kendini otomatik anlıyor
    // ! users -> user aynı durum
    this.$appAxios("/bookmarks?_expand=category&_expand=user").then((response) => {
      this.bookMarkList = response?.data || [];
      // console.dir(this.bookMarkList);
    });
  },
  methods: {
    updateBookMarkList(categoryId) {
      const url = categoryId ? "/bookmarks?_expand=category&_expand=user&categoryId=" + categoryId : "/bookmarks?_expand=category&_expand=user";
      this.$appAxios(url).then((response) => {
        this.bookMarkList = response?.data || [];
      });
    },
  },
};
</script>

<style  scoped>
</style>