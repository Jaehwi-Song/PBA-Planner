import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home_page',
      component: () => import('./components/home_page.vue')
    },
    {
      path: '/camera',
      name: 'camera_page',
      component: () => import('./components/camera_page.vue')
    },
  ]
})
