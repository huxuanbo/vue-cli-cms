import Vue from "vue"
import App from "./App.vue"

import Router from "vue-router"
Vue.use(Router)

import VueResource from "vue-resource"
Vue.use(VueResource)

import MintUi from "mint-ui"
Vue.use(MintUi)
import "mint-ui/lib/style.css"


import "./assets/mui/css/mui.css"
import "./assets/mui/css/icons-extra.css"
import "./assets/mui/fonts/mui-icons-extra.ttf"


import router from "./router.js"

var vm = new Vue({
    el: "#app",
    data: {

    },
    render: c => c(App),
    router
})