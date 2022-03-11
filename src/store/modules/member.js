import memberApi from '@/api/member'

export const state = {
  memberProfile: {}
}

export const mutations = {
  setMemberProfile (state, data) {
    state.memberProfile = Object.assign({}, data)
  }
}

export const actions = {
  getMemberProfile ({commit}, {success, fail} = {}) {
    memberApi.getMemberProfile(res => {
      commit('setMemberProfile', res.body.data)
      success && success(res)
    }, fail)
  },
}

export const getters = {
  memberProfile (state) {
    return state.memberProfile
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
