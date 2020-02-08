import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import LoginProfile from '../views/LoginProfile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/category',
    name: 'category',
    component: Category
  },{
    path: '/cart',
    name: 'cart',
    component: Cart
  },{
    path: '/profile',
    name: 'profile',
    component: Profile
  },{
    path: '/loginprofile',
    name: 'loginprofile',
    component: LoginProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
