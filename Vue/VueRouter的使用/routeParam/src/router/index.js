import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../components/home.vue')
const about = () => import('../components/about.vue')
const user = () => import('../components/user.vue')
const profile = () => import('../components/profile.vue')
const news = () => import('../components/homeNews.vue')
const message = () => import('../components/homeMessage.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message
        }
      ]
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/user/:userId',
      component: user
    },
    {
      path: '/profile',
      component: profile
    }
  ],
  mode: 'history'
})
