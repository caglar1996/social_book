<template>
   <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Giriş Yap</h3>
    <input v-model="userData.userName" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSubmit" class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link :to="{ name: 'RegisterView' }" class="text-red-900 hover:text-black">Üye olmak istiyorum!</router-link>
    </span>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      userData: {
        userName: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      const cryptedPassword = CryptoJS.HmacSHA1(this.userData.password, this.getSaltKey).toString();
      this.$appAxios.get(`/users?userName=${this.userData.userName}&password=${cryptedPassword}`).then((response) => {
        if (response?.data?.length > 0) {
          this.$store.commit("setUser", response?.data[0]); // store update ediyoruz, user store update edilir
          this.$router.push({ name: "HomeView" });
        } else {
          alert("Kullanıcı bulunamadı!");
        }
      });
    },
  },
  computed: {
    getSaltKey() {
      return this.$store.getters._getSaltKey;
    },
  },
};
</script>

<style  scoped>
</style>