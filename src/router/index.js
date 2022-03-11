import Vue from 'vue'
import Router from 'vue-router'
import authUtil from '@/utils/auth'
import config from '@/config'

Vue.use(Router)

const CintaBumi = () => import(/* webpackChunkName: "p-cinta-bumi" */ '@/pages/CintaBumi.vue')

const router = new Router({
  routes: [
    {
      path: config.pages.cinta_bumi,
      name: 'cinta-bumi',
      component: CintaBumi,
      meta: {
        auth: true,
        title: 'Aksi Cinta Bumi | Blibli.com'
      }
    }
  ],
  mode: 'history'
})
// add to collab router list
if (window.addCollabRouter) {
  window.addCollabRouter(router)
}

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    authUtil.authCheck(next)
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // check if same page
  const isSamePage = to.path === from.path
  const resetScroll = isSamePage ? false : to.meta.resetScroll
  if (window.propagateToMain) {
    window.propagateToMain(to.fullPath, resetScroll)
  }
  if (isSamePage) return
  // update meta and tracker
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Blibli.com'
  }
})
export default router
