import Vue from 'vue'
import Vuex from 'vuex'
import member from './modules/member'

Vue.use(Vuex)

// init empty store
let store = {}

const modules = {
  'cinta-bumi.member': member
}

// add to main store if available
if (window.addStoreModule) {
  store = window.addStoreModule(modules)
} else {
  // add main currentUser data for mocking purpose
  const state = {
    currentUser: {}
  }
  const getters = {
    currentUser: (state) => {
      return state.currentUser
    },
    isLoggedIn: (state) => {
      return !!state.currentUser.id
    }
  }

  const mutations = {
    setCurrentUser (state, value) {
      state.currentUser = value
    }
  }

  const actions = {
    getCurrentUser ({ state }, { success, fail }) {
      if (!state.currentUser.id) {
        fail()
      } else {
        success()
      }
    },
    logout: ({ commit }, { success } = {}) => {
      commit('setCurrentUser', {})
      if (success) {
        success()
      }
    }
  }

  store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules
  })
}

export default store
