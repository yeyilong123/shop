import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import { PullRefresh, List, Col, Row, Sidebar, SidebarItem, Toast, Button, Field , Tab, Tabs, NavBar, Icon, Tabbar, TabbarItem, Lazyload, Swipe, SwipeItem} from 'vant'
Vue.use(PullRefresh).use(List).use(Col).use(Row).use(Sidebar).use(SidebarItem).use(Toast).use(Button).use(Field).use(Tab).use(Tabs).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)

import '@/mock/mock.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
