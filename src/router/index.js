import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './router'
Vue.use(VueRouter)
let router = new VueRouter({
    // 路由模式 history hash Abstract(浏览器不支持history hash模式时则会自动切换到该模式)
        mode: 'history',
        routes
    })
export default router