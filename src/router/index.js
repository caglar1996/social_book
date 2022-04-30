import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

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
    },
    {
        name: "Favorites",
        path: "/favorites",
        meta: {
            componentName: "appBookMarkList" // hazır olan componente, baska bşr değişken ile veri gönderere filtreleme
        },
        component: () =>
            import ("@/views/AccountView.vue")
    },
    {
        name: "Settings",
        path: "/settings",
        component: () =>
            import ("@/views/AccountView.vue")
    },
    {
        name: "Likes",
        path: "/likes",
        meta: {
            componentName: "appBookMarkList"
        },
        component: () =>
            import ("@/views/AccountView.vue")
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

router.beforeEach((to, from, next) => {
    const authRequiredRoutes = ["HomeView"];
    const authNotRequiredRoutes = ["LoginView", "RegisterView"];
    const _isAuthentication = store.getters._isAuthentication;
    // login olunmus durumda tekrar login ve kayıt ol kısımlarına gitme işlemini engeller (next false işlemi iptal et)
    if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthentication) next(false);
    if (authRequiredRoutes.indexOf(to.name) > -1) {
        if (_isAuthentication) next();
        else next({ name: "LoginView" });
    } else
        next();
});

export default router;