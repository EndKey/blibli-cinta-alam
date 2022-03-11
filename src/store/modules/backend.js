import backendApi from '@/api/backend'

export const state = {
  backendUser: {},
  projectList: [{}],
  historyList: [{}],
  historyListLength: 0
}

export const mutations = {
  setBackendUser (state, data) {
    state.backendUser = Object.assign({}, data)
  },
  setProjectList (state, data) {
    state.projectList = Object.assign({}, data)
  },
  setHistoryList (state, data) {
    state.historyList = Object.assign({}, data)
  },
  setHistoryListLength (state, data) {
    state.historyListLength = data
  }
}

export const actions = {
  getBackendUser ({commit}, {success, fail} = {}) {
    backendApi.getUser(res => {
      commit('setBackendUser', res.body.content)
      success && success(res)
    }, fail)
  },
  getProjectList ({commit}, {success, fail} = {}) {
    backendApi.getProjectList(res => {
      commit('setProjectList', res.body.content)
      success && success(res)
    }, fail)
  },
  getHistoryList ({commit}, {success, fail} = {}) {
    backendApi.getHistoryList(res => {
      commit('setHistoryList', res.body.content)
      commit('setHistoryListLength', res.body.content.length)
      success && success(res)
    }, fail)
  },
  postClaimRewards ({commit}, {success, fail} = {}) {
    backendApi.postClaimRewards(res => {
      success && success(res)
    }, fail)
  }
}

export const getters = {
  backendUser (state) {
    return state.backendUser
  },
  projectList (state) {
    return state.projectList
  },
  historyList (state) {
    return state.historyList
  },
  historyListLength (state) {
    return state.historyListLength
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
