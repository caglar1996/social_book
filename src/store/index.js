 import { createStore } from "vuex";
 import createPersistedState from "vuex-persistedstate";
 export default createStore({
     plugins: [createPersistedState()],
     state: {
         user: null,
         saltKey: "booklike123!456?"
     },
     mutations: {
         setUser(state, payload) {
             state.user = payload;
         }
     },
     getters: {
         _isAuthentication: state => state.user != null,
         _getCurrentUser(state) {
             const currentUser = state.user;
             if (currentUser != null && Object.prototype.hasOwnProperty.call(currentUser, "password"))
                 delete currentUser.password;
             return currentUser;
         },
         _getSaltKey: state => state.saltKey
     }
 });