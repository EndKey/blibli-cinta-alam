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
