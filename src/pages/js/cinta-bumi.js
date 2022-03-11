import { mapGetters, mapActions } from 'vuex'
import { disableScrollRestoration, enableScrollRestoration, scrollToTop } from '@/utils/body'
import {
  CintaBumiSection
} from '@/data/components'

export default {
  name: 'Cinta Bumi',
  data () {
    return {
      visibleStickyCategory: false,
      visibleScrollTop: false
    }
  },
  computed: {
    ...mapGetters(['isMobile']),
    ...mapGetters('cinta-bumi.common', ['memberConfig']),
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
    ...mapActions('cinta-bumi.common', [
      'getMemberConfigs'
    ]),
    initObserverSticky () {
      this.observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) {
          this.visibleStickyCategory = true
        } else {
          this.visibleStickyCategory = false
        }
      })
      this.observer.observe(this.categoryRef)
    },
    initObserverScrollTop () {
      this.observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) {
          this.visibleScrollTop = true
        } else {
          this.visibleScrollTop = false
        }
      })
      this.observer.observe(this.scrollTopRef)
    },
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
    this.$nextTick(() => {
      this.initObserverSticky()
      this.initObserverScrollTop()
    })
    disableScrollRestoration()
  },
  created () {
    this.getMemberConfigs()
    this.hideHeaderFooter()
  },
  destroyed () {
    this.observer.disconnect()
    enableScrollRestoration()
    this.showHeaderFooter()
  }
}
