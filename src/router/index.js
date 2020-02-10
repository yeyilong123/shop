import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
// import Cart from '../views/Cart.vue'
// import Profile from '../views/Profile.vue'
// import LoginProfile from '../views/LoginProfile.vue'
// import Detail from '../views/Detail.vue'
let Home = () => import('../views/Home.vue')
let Category = () => import('../views/Category.vue')
let Cart = () => import('../views/Cart.vue')
let Profile = () => import('../views/Profile.vue')
let LoginProfile = () => import('../views/LoginProfile.vue')
let Detail = () => import('../views/Detail.vue')

import FooterBar from '../components/FooterBar.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },{
    path: '/category',
    name: 'category',
    components: {
      default: Category,
      'footer-bar': FooterBar
    },meta: {
      keepAlive: true
    }
  },{
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      'footer-bar': FooterBar
    },meta: {
      keepAlive: false
    }
  },{
    path: '/profile',
    name: 'profile',
    components: {
      default: Profile,
      'footer-bar': FooterBar
    },meta: {
      keepAlive: false
    }
  },{
    path: '/loginprofile',
    name: 'loginprofile',
    components: {
      default: LoginProfile,
      'footer-bar': FooterBar
    },meta: {
      keepAlive: false
    }
  },{
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
      keepAlive: false
    }
  },{
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
