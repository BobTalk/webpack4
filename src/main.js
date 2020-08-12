import Vue from "vue";
import App from "./App.vue";
import "@babel/polyfill";
import router from "./router/index.js";
import VueWechatTitle from "vue-wechat-title";
import "@/element/index.js";
import "./assets/style/reset.css";
import "element-ui/lib/theme-chalk/index.css"
Vue.use(VueWechatTitle);
Vue.config.productionTip = false;
console.log(process.env)
const app = new Vue({
    router,
    render: (h) => h(App)
});
app.$mount("#app");