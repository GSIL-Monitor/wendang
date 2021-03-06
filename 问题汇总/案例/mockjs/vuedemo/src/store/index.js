import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './modules/state'
import mutations from './modules/mutation'
import actions from './modules/actions'
import getters from './modules/getter'

export default new  Vuex.Store({
  state,
  mutations,
  actions, 
  getters,
})