import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{

    name: "LoginView",
    path: "/login",
    component: () =>
        import ("@/views/LoginView")
}, {

    name: "HomeView",
    path: "/",
    component: () =>
        import ("@/views/HomeView.vue")
}, {

    name: "RegisterView",
    path: "/register",
    component: () =>
        import ("@/views/RegisterView")
}, {
    name: "NewBookMarkiView",
    path: "/new",
    component: () =>
        import ("@/views/NewBookMarkView.vue")
}];

export default createRouter({
    routes,
    history: createWebHashHistory()
});