module.exports = {
  getApiPath: function (apiPath) {
    return this.api.base_path + apiPath
  },
  api: {
    base_path: '',
    common: {
      memberConfig: '/backend/common/content/member-configs'
    },
    member: {
      profile: '/backend/member/profile'
    },
    backend: {
      user: '/backend/cintaBumi/findUserDetailById',
      projectList: '/backend/cintaBumi/getProjectsList',
      historyList: '/backend/cintaBumi/findHistoryListByUserId',
      claimRewards: '/backend/cintaBumi/claimUnclaimedRewards'
    }
  },
  pages: {
    login: '/login',
    cinta_bumi: '/cinta-bumi',
    login_ref (ref) {
      return `/login?ref=${ref}`
    },
    home: '/',
  },
  app: {
    ref: '?redirect='
  }
}
