<!--
Application seviyesindeki componentlerin basına app baslanır
  Aplication seviyesinde bir component olduğu için shared altına ekledik. adının basındaki app'den anlayabilirsin
  -->
<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <bookMarkListItem v-for="i in 10" :key="i" />
    </div>
  </div>
</template>

<script>
import bookMarkListItem from "./appBookMartListItem.vue";
export default {
  components: {
    bookMarkListItem,
  },
};
</script>

<style lang="scss" scoped>
</style>