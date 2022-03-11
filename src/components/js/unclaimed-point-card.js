import {mapActions, mapGetters} from 'vuex'
import { disableScrollLock, enableScrollLock } from '@/utils/body'

const MODAL_WIDTH = 944

export default {
  name: 'UnclaimedPointCard',
  data () {
    return {
      visibleModalCalculationInfo: false,
      buttonClaimClick: false
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'isMobile'
    ]),
    ...mapGetters('cinta-bumi.backend', ['backendUser']),
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
    isClaimable () {
      return this.backendUser.treesPlanted >= 1.0
    },
    isButtonAvailable () {
      return this.isClaimable ? 'secondary' : ''
    },
    isButtonClaimClicked () {
      return this.buttonClaimClick
    }
  },
  methods: {
    initPage () {
      this.getBackendUser({
        success: this.successAlert,
        fail: this.failAlert
      })
    },
    successAlert () {
      console.log('sukses')
    },
    failAlert() {
      console.log('fail')
    },
    ...mapActions('cinta-bumi.backend', ['getBackendUser']),
    openModalCalculationInfo () {
      this.visibleModalCalculationInfo = true
      enableScrollLock()
    },
    closeModalCalculationInfo () {
      this.visibleModalCalculationInfo = false
      disableScrollLock()
    },
    isButtonClicked () {
      this.buttonClaimClick = true
    }
  },
  created () {
    this.initPage()
  },
  watch: {
    redeemInfoActiveStep() {
      this.initPage()
    }
  },
  components: {
  }
}
