import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/BaseView.vue')
    }, {
      path: '/comic',
      name: 'comic',
      component: () => import('./views/Comic.vue')
    }, {
      path: '/book',
      name: 'book',
      component: () => import('./views/Book.vue')
    }
  ]
})
