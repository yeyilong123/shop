import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    isLogin: '/profile'
  },
  mutations: {
    changeLogin(state, status){
      state.userInfo = status
      if(JSON.stringify(status) === '{}'){
        state.isLogin = '/profile'
      }else{
        state.isLogin = '/loginprofile'
      }
    },
    
  },
  actions: {
    loginAction({commit}, user){
      commit('changeLogin', user)
    }
  },
  modules: {
  }
})
