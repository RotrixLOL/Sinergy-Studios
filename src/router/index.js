import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/cards',
    name: 'cards',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/Cards.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/Login.vue')
    }
  },
  {
    path: '/googleb39a2eef68c31e7f.html',
    name: 'googleb39a2eef68c31e7f.html',
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/googleb39a2eef68c31e7f.html')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
