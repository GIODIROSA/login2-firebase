import { initializeApp } from "firebase";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase'

Vue.config.productionTip = false;

// initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxycKGUmu8SEB_uTudo1hgCkPdSsGWcAU",
  authDomain: "login-prueba-78094.firebaseapp.com",
  databaseURL: "https://login-prueba-78094.firebaseio.com",
  projectId: "login-prueba-78094",
  storageBucket: "login-prueba-78094.appspot.com",
  messagingSenderId: "1091649638613",
  appId: "1:1091649638613:web:aeb685e066bac0c92a925c",
};

initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
