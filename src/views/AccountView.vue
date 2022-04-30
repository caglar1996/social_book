<template>
  <app-header></app-header>
  <div class="flex flex-row">
    <side-bar></side-bar>
    <component :is="$route.meta.componentName" :items="bookMarkList"></component>
    <!-- <appBookMarkList v-if="bookMarkList.length > 0" :items="bookMarkList"></appBookMarkList>
    <div v-else>Bookmark bulunamadı</div> -->
  </div>
</template>

<script>
import sideBar from "@/components/Account/sideBar.vue";
import appHeader from "@/components/Shared/appHeader.vue";
export default {
  data() {
    return {
      bookMarkList: [],
    };
  },
  components: {
    sideBar,
    appHeader,
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
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>