<!--
Application seviyesindeki componentlerin basına app baslanır
  Aplication seviyesinde bir component olduğu için shared altına ekledik. adının basındaki app'den anlayabilirsin
  -->
<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <bookMarkListItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import bookMarkListItem from "./appBookMartListItem.vue";
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    bookMarkListItem,
  }
};
</script>

<style lang="scss" scoped>
</style>