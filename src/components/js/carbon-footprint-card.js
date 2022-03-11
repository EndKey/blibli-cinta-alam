import { mapGetters } from 'vuex'
import { disableScrollLock, enableScrollLock } from '@/utils/body'
import { BliModal, BliModalBody } from '@blibli/dls/dist/components/modal'
import { BliBottomsheet, BliBottomsheetContainer } from '@blibli/dls/dist/components/bottomsheet'

const MODAL_WIDTH = 944

export default {
  name: 'CarbonFootprintCard',
  data () {
    return {
      visibleModalCalculationInfo: false
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'isMobile'
    ]),
    components () {
      if (this.isMobile) {
        return {
          container: 'BliBottomsheet',
          wrapper: 'BliBottomsheetContainer',
          containerProps: {
            type: 'fullscreen'
          },
          customStyle: {
            padding: 0
          }
        }
      }
      return {
        container: 'BliModal',
        containerProps: {
          type: 'page',
          maxWidth: MODAL_WIDTH,
          noButton: true
        }
      }
    },
    screenWidth () {
      return window.screen.width
    },
  },
  methods: {
    initPage () {
      // ignore
    },
    openModalCalculationInfo () {
      this.visibleModalCalculationInfo = true
      enableScrollLock()
    },
    closeModalCalculationInfo () {
      this.visibleModalCalculationInfo = false
      disableScrollLock()
    }
  },
  mounted () {
    this.initPage()
  },
  watch: {
    redeemInfoActiveStep() {
      this.initPage()
    }
  },
  components: {
    BliModal,
    BliModalBody,
    BliBottomsheet,
    BliBottomsheetContainer
  }
}
