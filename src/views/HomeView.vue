<template>
  <appHeader></appHeader>
  <div class="flex flex-row">
    <sideBar></sideBar>
    <appBookMarkList></appBookMarkList>
  </div>
  
</template>

<script>
import sideBar from "@/components/Home/SideBar"

export default {
  components: {
    sideBar
  },
};
</script>

<style  scoped>
</style>