import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import { appAxios } from './utils/appAxios';
import "@/assets/style.css";
import appHader from "@/components/Shared/appHeader.vue"
import appBookMarkList from "@/components/Shared/appBookMarkList/appBookMarkList.vue"

const app = createApp(App);
app.component("appHeader", appHader);
app.component("appBookMarkList", appBookMarkList);
app.use(router);
app.use(store);
app.config.devtools = true;
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$l = console.log;
app.mount('#app');