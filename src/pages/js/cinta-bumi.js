import { mapGetters, mapActions } from 'vuex'
import { disableScrollRestoration, enableScrollRestoration, scrollToTop } from '@/utils/body'
import {
  CintaBumiSection
} from '@/data/components'

export default {
  name: 'CintaBumi',
  data () {
    return {
      visibleStickyCategory: false,
      visibleScrollTop: false
    }
  },
  computed: {
    ...mapGetters(['isMobile']),
    scrollTopRef () {
      return this.$refs.observerElementScrollTop
    }
  },
  methods: {
    ...mapActions([
      'hideHeader',
      'hideFooter',
      'showHeader',
      'showFooter'
    ]),
    goToTopPage () {
      scrollToTop()
    },
    goBack () {
      this.$router.back()
    },
    hideHeaderFooter () {
      if (this.isMobile) {
        this.hideHeader()
        this.hideFooter()
      }
    },
    showHeaderFooter () {
      if (this.isMobile) {
        this.showHeader()
        this.showFooter()
      }
    }
  },
  components: {
    CintaBumiSection
  },
  mounted () {
    disableScrollRestoration()
  },
  created () {
    this.hideHeaderFooter()
  },
  destroyed () {
    this.observer.disconnect()
    enableScrollRestoration()
    this.showHeaderFooter()
  }
}
