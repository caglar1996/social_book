<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Kayıt Ol</h3>
    <input v-model="userData.fullName" type="text" placeholder="Tam Ad" class="input mb-3" />
    <input v-model="userData.userName" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" @keydown.enter="onPasswordEnter" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSave" class="default-button">Kayıt ol</button>
    <span class="text-center mt-3 text-sm">
      Zaten Üyeyim,
      <router-link :to="{ name: 'LoginView' }" class="text-red-900 hover:text-black"> Giriş Yap </router-link>
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
        fullName: null,
        password: null,
      },
    };
  },
  methods: {
    onSave() {
      const cryptedPassword = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._getSaltKey).toString();
      console.log(cryptedPassword);
      // .. dizek obje olarak görme işlemi yapar,password la obje içinde passwordu eziyoruz
      // şifrelenmiş passwordu koyuyoruz
      this.$appAxios.post("/users", { ...this.userData, password: cryptedPassword }).then((response) => {
        console.log(response);
        if (response.status == 201 && response.statusText == "Created") this.$router.push({ name: "HomeView" });
        else alert("Kayıt Başarısız. ");
      });

      //console.log(this.userData);
      // const deCryptedPassword = CryptoJS.AES.decrypt(cryptedPassword, key).toString(CryptoJS.enc.Utf8);
      // console.log(deCryptedPassword);
    },
    onPasswordEnter() {
      console.log(this.userData);
    },
  },
};
</script>

<style scoped>
</style>