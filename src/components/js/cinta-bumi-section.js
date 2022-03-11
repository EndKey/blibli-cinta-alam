import { mapGetters } from 'vuex'
import { CarbonFootprintCard, UnclaimedPointCard } from '@/data/components'
import { BliModal, BliModalBody } from '@blibli/dls/dist/components/modal'
import { BliBottomsheet, BliBottomsheetContainer } from '@blibli/dls/dist/components/bottomsheet'

const MODAL_WIDTH = 944

export default {
  name: 'CintaBumiSection',
  data () {
    return {
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
    }
  },
  methods: {
    initPage () {

    }
  },
  mounted () {
    this.initPage()
  },
  components: {
    BliModal,
    BliModalBody,
    BliBottomsheet,
    BliBottomsheetContainer,
    CarbonFootprintCard,
    UnclaimedPointCard
  }
}
