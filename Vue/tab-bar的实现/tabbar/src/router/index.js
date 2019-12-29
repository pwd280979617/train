import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home/Home')
const Search = () => import('../pages/search/Search')
const Xiangmu = () => import('../pages/xiangmu/Xiangmu')
const Admin = () => import('../pages/admin/Admin')


Vue.use(Router)

const router = new Router({
    routes:[ //路由匹配规则
        { path: '/', redirect: '/home'}, //redirect重定向
        { path: '/home', component: Home},
        { path: '/search', component: Search},
        { path: '/xiangmu', component: Xiangmu},
        { path: '/admin', component: Admin}
    ],
    mode: 'history'
})
//必须将创建好的router路由 router 注册到 new Vue()中

export default router