import { mapGetters } from 'vuex'
import { Pagination } from '@/data/components'
import BliIconChevronLeft from '@blibli/blue-icon/dist/icons/ChevronLeft'
import BliIconChevronRight from '@blibli/blue-icon/dist/icons/ChevronRight'

const SLIDE_THRESHOLD = 50

export default {
  name: 'Carousel',
  components: {
    Pagination,
    BliIconChevronLeft,
    BliIconChevronRight
  },
  props: {
    content: {
      default: () => [],
      type: Array
    },
    pagination: {
      type: Boolean,
      default: false
    },
    navigation: {
      type: Boolean,
      default: false
    },
    loadNextItem: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 4000
    },
    autoPlayAfterMove: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: false
    },
    perPageMobile: {
      type: Number,
      default: 1
    },
    perPageTablet: {
      type: Number,
      default: 1
    },
    perPageDesktop: {
      type: Number,
      default: 1
    },
    perPageWide: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      initialX: null,
      offset: 0,
      distance: 0,
      slideCount: 0,
      activePage: 0,
      itemWidth: 0,
      maxOffset: 0,
      screenWidth: 0,
      orientation: '',
      initialLocation: 0,
      itemLoaded: [],
      hasMoved: false,
      renderedContent: [],
      containerWidth: 0,
      intervalSlider: 0
    }
  },
  computed: {
    ...mapGetters(['isMobile']),
    carousel() {
      return this.$refs.carouselContainer
    },
    items() {
      return this.$refs.items
    },
    handlers() {
      return {
        INIT: {
          mousedown: this.handleMouseDown,
          touchstart: this.handleTouchStart
        },
        MOUSE: {
          mouseup: this.handleMouseUp,
          mousemove: this.handleMove,
          mouseleave: this.handleMouseUp
        },
        TOUCH: {
          touchend: this.handleTouchEnd,
          touchmove: this.handleMove
        }
      }
    },
    visibleNext() {
      const offsetItem = this.slideCount - this.perPage
      return this.activePage + 1 <= offsetItem || this.circular
    },
    visiblePrev() {
      return this.activePage > 0 || this.circular
    },
    perPage() {
      if (this.screenWidth >= 1200) return this.perPageWide
      if (this.screenWidth >= 1024) return this.perPageDesktop
      if (this.screenWidth >= 768) return this.perPageTablet
      return this.perPageMobile
    },
    /**
     * List of item in each page.
     * @return {Array}
     */
    itemPerPage() {
      return this.content
        .map((item, index) => {
          return this.content.slice(index, index + this.perPage)
        })
        .filter(item => item)
    },
    /**
     * List of visible item in DOM.
     * @return {Array}
     */
    itemVisible() {
      return this.renderedContent.map((item, index) => {
        if (index === 0) return true
        if (this.itemLoaded[index]) return true

        // item exist in list
        const itemsInPage = this.itemPerPage[this.activePage] || []
        if (itemsInPage.includes(item)) return true

        if (this.loadNextItem || screen.width > this.itemWidth) {
          if (this.circular) {
            return index - 2 === this.activePage || index === this.activePage
          }
          return (
            index + this.activePage > this.perPage ||
            index - 1 === this.activePage ||
            this.activePage - 1 === index
          )
        }
        return false
      })
    }
  },
  methods: {
    destroyInterval() {
      try {
        clearInterval(this.intervalSlider)
        // eslint-disable-next-line no-empty
      } catch (e) {

      }
    },
    /**
     * Set the slide to autoplay every {delay} second.
     */
    setAutoPlay() {
      this.destroyInterval()
      this.intervalSlider = setInterval(() => {
        this.navigateTo(this.activePage + 1)
      }, this.delay)
    },
    attachHandlers(type) {
      const handlers = this.handlers[type] || {}
      Object.keys(handlers).forEach(i => {
        this.carousel.addEventListener(i, handlers[i])
      })
    },
    removeHandlers(type) {
      const handlers = this.handlers[type] || {}
      Object.keys(handlers).forEach(i => {
        this.carousel.removeEventListener(i, handlers[i])
      })
    },
    handleMouseDown(e) {
      this.setupWidth()
      this.initialX = e.clientX
      this.attachHandlers('MOUSE')
    },
    handleTouchStart(e) {
      this.setupWidth()
      this.initialX = e.touches[0].clientX
      this.attachHandlers('TOUCH')
    },
    handleMouseUp(event) {
      this.snapItems(event)
      this.removeHandlers('MOUSE')
    },
    handleTouchEnd(event) {
      this.snapItems(event)
      this.removeHandlers('TOUCH')
    },
    handleMove(e) {
      this.distance =
        (e.clientX ? e.clientX : e.changedTouches[0].clientX) - this.initialX
      this.moveItemsTo(this.offset + this.distance)
    },
    navigateTo(page, event) {
      this.items.classList.add('moving')
      const target = event && event.target
      const parent = target && target.parentElement
      const container = parent && parent.parentElement
      if (container) {
        this.containerWidth = container.parentElement.clientWidth
      }
      this.moveItemsTo(-1 * page * this.itemWidth)
      if (page < this.slideCount) {
        if (page < 0) {
          this.activePage = this.slideCount - 1
        } else {
          this.activePage = page
        }
        this.offset = -1 * this.activePage * this.itemWidth
      } else {
        this.activePage = 0
        this.offset = 0
      }
      setTimeout(() => {
        if (this.circular) {
          this.items.classList.remove('moving')
        }
        this.moveItemsTo(-1 * this.activePage * this.itemWidth)
      }, 200)
      // This timeout must be the same as how long the transition last
      // on element with moving class (.moving on Carousel.vue)
    },
    hasPartialShowSpace(move) {
      return (
        !this.circular && // circular carousel does not need partial space
        move === this.itemWidth * -(this.slideCount - 1) &&
        move < this.containerWidth * (this.slideCount - 1)
      )
    },
    moveItemsTo(location) {
      const offset = this.initialLocation + location < this.maxOffset
      if (offset && !this.circular) return
      const move = this.initialLocation + location
      const slideShowing = this.itemWidth * this.perPage
      const isSpaceExist = slideShowing < this.containerWidth
      const partialShowSpace = isSpaceExist
        ? this.containerWidth - this.itemWidth
        : 0
      // calculate the white space if needed
      const moveTo = this.hasPartialShowSpace(move)
        ? move + partialShowSpace
        : move
      this.items.style.transform = 'translateX(' + moveTo + 'px)'
    },
    checkBoundaries() {
      if (this.offset >= 0) {
        this.activePage = 0
        this.offset = 0
      }
      if (this.offset < this.maxOffset) {
        this.activePage =
          this.slideCount -
          this.mathCeil(this.items.offsetWidth / this.itemWidth)
        this.offset = this.maxOffset

        if (this.activePage < 0) {
          this.activePage = 0
          this.offset = 0
        }
      }
    },
    snapItems(event) {
      this.setAutoPlay()
      if (this.distance < -1 * SLIDE_THRESHOLD) {
        this.activePage += Math.ceil((-1 * this.distance) / this.itemWidth)
      } else if (this.distance > SLIDE_THRESHOLD) {
        this.activePage -= Math.ceil(this.distance / this.itemWidth)
      }
      this.offset = this.activePage * this.itemWidth * -1
      if (this.circular) {
        this.navigateTo(this.activePage, event)
        return
      }
      this.checkBoundaries()
      this.moveItemsTo(this.offset)
    },
    setupWidth() {
      const mql = window.matchMedia('(orientation: portrait)')
      this.orientation = mql.matches ? 'portrait-primary' : 'landscape-primary'
      this.screenWidth = window.innerWidth
      this.slideCount = this.content.length
      this.itemWidth = this.items.clientWidth / this.perPage

      // special case when offsetWidth is the same as width,
      // we don't need to subtract because the offset should
      // be the same as max slide * width since
      // items.offsetWidth === itemWidth means there's no extra
      // space
      const slides =
        this.items.offsetWidth === this.itemWidth
          ? this.slideCount
          : this.slideCount -
            this.mathCeil(this.items.offsetWidth / this.itemWidth)

      // the last - 1 is so it could be smaller than max on this.circular calculation
      this.maxOffset = slides * this.itemWidth * -1 - 1
    },
    handleResize(event) {
      this.setupWidth()
      this.navigateTo(this.activePage, event)
      this.offset = -1 * this.activePage * this.itemWidth
    },
    // we need this way of method to be working out in ios
    mathCeil(num) {
      return -1 * Math.floor(-1 * num)
    }
  },
  watch: {
    activePage(v) {
      this.hasMoved = true
      this.$emit('page-change', v)
    },
    itemVisible(content) {
      content.forEach((item, index) => {
        if (item) this.itemLoaded[index] = true
      })
    },
    /**
     * setAutoplay when the slider has moved manually by user.
     */
    hasMoved() {
      if (!this.autoPlayAfterMove) return
      this.setAutoPlay()
    }
  },
  created() {
    this.renderedContent = Array.from(this.content)
    if (this.circular) {
      this.renderedContent.push(this.content[0])
      this.renderedContent.unshift(this.content[this.content.length - 1])
    }
  },
  mounted() {
    this.setupWidth()
    if (this.circular) {
      this.moveItemsTo(-1 * this.itemWidth)
      this.initialLocation = -1 * this.itemWidth
    }
    window.addEventListener('resize', this.handleResize)
    this.attachHandlers('INIT')
    this.itemLoaded = this.itemVisible
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
    this.removeHandlers('INIT')
    this.destroyInterval()
  }
}
