import Vue from 'vue';
import App from './App.vue';
import router from "./router";
// import store from './store';

Vue.config.productionTip = false;

new Vue({
  router, //Vue 인스턴스에 연결
  // store,
  render: (h) => h(App),
}).$mount('#app');
