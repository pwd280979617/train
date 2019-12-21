import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/about',
      component: () => import('../components/about.vue')
    },
    {
      path: '/user/:userId',
      component: () => import('../components/user.vue')
    },
  ]
})
