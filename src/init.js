// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import i18n from '@/i18n'
import Blue from '@blibli/dls'
import '@blibli/dls/dist/blue.min.css'

if (!window.Blue) {
  Vue.use(Blue)
}

export default {
  start (instantiate = true) {
    if (process.env.NODE_ENV !== 'production') {
      Vue.config.devtools = true
    }
    this.loadMock()
    if (instantiate) {
      // check if we are inside main window
      // the store wont run if we use this
      if (window.createCollabVue) {
        // if (!window.createCollabVue) {
        window.createCollabVue({
          el: '#app-collab-cinta-bumi',
          router,
          template: '<App/>',
          store,
          i18n,
          components: {App}
        })
      } else {
        /* eslint-disable no-new */
        new Vue({
          router,
          i18n,
          store,
          render: h => h(App)
        }).$mount('#app-collab-cinta-bumi')
      }
    }
    this.started = true
  },
  loadMock () {
    require('@api-mock')
    this.mockLoaded = true
  },
  mockLoaded: false,
  started: false
}
