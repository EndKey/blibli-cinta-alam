import { goUrl } from '@/utils/browser'
import store from '@/store'
import config from '@/config'

export default {
  authCheck (next) {
    const location = window.location.pathname
    if (store.state.currentUser.init) {
      setTimeout(() => this.authCheck(next), 50)
    } else {
      if (!store.getters.isLoggedIn) {
        next(false)
        goUrl(config.pages.login + config.app.ref + location)
      } else {
        next()
      }
    }
  }
}
