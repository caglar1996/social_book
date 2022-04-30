<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
    <input v-model="userData.title" ref="title" type="text" placeholder="Başlık" class="input mb-3" />
    <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
    <select v-model="userData.categoryId" class="input mb-3">
      <option disabled value="" selected>Kategori</option>
      <option v-for="category in categoryList" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
    <textarea v-model="userData.description" placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button @click="onCancel" class="secondary-button">İptal</button>
      <button @click="onSave" class="default-button">Kaydet</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userData: { title: null, url: null, categoryId: null, description: null },
      categoryList: [],
    };
  },
  methods: {
    onCancel() {
      this.$router.push({ name: "HomeView" });
    },
    onSave() {
      console.log("userData", this.userData);
      console.log("user", this._getCurrentUser);

      const saveData = {
        ...this.userData,
        userId: this._getCurrentUser.id,
        created_at: new Date(),
      };

      this.$appAxios.post("/bookmarks", saveData).then((response) => {
        console.log(response);
        Object.keys(this.userData)?.forEach((field) => (this.userData[field] = null));
        this.$refs.title.focus();
      });
    },
  },
  mounted() {
    this.$appAxios.get("/categories").then((response) => {
      this.categoryList = response?.data || [];
    });

    //! Çok fazla component yada karmasık sayfalarda dom üzerindeki
    //! bir componente direk erişemeye biliriz, vue'dan kaynaklı bir durum bu
    //! bundan dolayı ya time out yada nextTick kullanılır
    this.$nextTick(() => {
      // console.log("ref", this.$refs.title);
      console.dir(this.$refs.title);
      this.$refs.title.focus();
    });
  },
  computed: {
    ...mapGetters(["_getCurrentUser"]),
  },
};
</script>

<style scoped>
</style>