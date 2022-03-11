import { mapGetters, mapActions } from 'vuex'
import {
  CarbonFootprintCard,
  UnclaimedPointCard,
  ProjectSection,
  CarbonOffsetHistory
} from '@/data/components'
import { BliModal, BliModalBody } from '@blibli/dls/dist/components/modal'
import { BliBottomsheet, BliBottomsheetContainer } from '@blibli/dls/dist/components/bottomsheet'

const MODAL_WIDTH = 944

export default {
  name: 'CintaBumiSection',
  data () {
    return {
      userName: '',
      dataReturn: []
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'isMobile'
    ]),
    ...mapGetters('cinta-bumi.member', ['memberProfile']),
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
    }
  },
  methods: {
    ...mapActions('cinta-bumi.member', ['getMemberProfile']),
    initPage () {
      this.getMemberProfile({
        success: this.successAlert,
        fail: this.failAlert
      })
    },
    successAlert () {
      console.log('sukses')
    },
    failAlert() {
      console.log('fail')
    }
  },
  created () {
    this.initPage()
  },
  components: {
    BliModal,
    BliModalBody,
    BliBottomsheet,
    BliBottomsheetContainer,
    CarbonFootprintCard,
    UnclaimedPointCard,
    ProjectSection,
    CarbonOffsetHistory
  }
}
