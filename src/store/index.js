import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      userName: '未登录'
    },
    isLogin: '/profile'
  },
  mutations: {
    changeLogin(state, status){
      state.userInfo = status
      state.isLogin = '/loginprofile'
    },
    
  },
  actions: {
    loginAction({commit}, user){
      commit('changeLogin', user)
    }
    // profileAction({commit}){
    //   commit('isProfile')
    // }
  },
  modules: {
  }
})
