import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";
// var ls = new SecureLS({ isCompression: false });

export default createStore({
    plugins: [
        createPersistedState({
            // key: "meta_data",

            // storage: {
            //     getItem: (key) => ls.get(key),
            //     setItem: (key, value) => ls.set(key, value),
            //     removeItem: (key) => ls.remove(key),
            // },
        }),
    ],
    state: {
        user: null,
        likes: [],
        bookMarks: [],
        saltKey: "booklike123!456?"
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        logOutUser(state) {
            state.user = null;
        },
        setLikes(state, bookMarkIds) {
            state.user.likes = bookMarkIds;
        },
        setBookMarks(state, bookMarkIds) {
            state.user.bookMarks = bookMarkIds;
        }
    },
    getters: {
        _getCurrentUser(state) {
            const currentUser = state.user;
            if (currentUser != null && Object.prototype.hasOwnProperty.call(currentUser, "password"))
                delete currentUser.password;
            return currentUser;
        },
        _isAuthentication: state => state.user != null,
        _userLikes: state => state.user?.likes || [],
        _userBookMarks: state => state.user?.bookMarks || [],
        _getSaltKey: state => state.saltKey
    }
});