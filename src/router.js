import VueRouter from "vue-router"

import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import newsList from "./components/news/newsList.vue"
import newsInfo from "./components/news/newsInfo.vue"
import photoList from "./components/photos/photoList.vue"

let router = new VueRouter({
    routes: [
        // { path: '/', component: HomeContainer },
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newsList', component: newsList },
        { path: '/home/newsInfo/:id', component: newsInfo },
        { path: '/home/photoList', component: photoList }
    ],
    // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
    linkActiveClass: 'mui-active'
})

export default router