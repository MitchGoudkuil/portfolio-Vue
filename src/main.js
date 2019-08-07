import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

export default function(Vue, { head }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Raleway:900&display=swap"
  });
}
