import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import about from '../components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    }
  ],
  mode: 'history'
})
