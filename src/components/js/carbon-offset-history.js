import { mapGetters } from 'vuex'

export default {
  name: 'ProjectSection',
  data () {
    return {
      percent1: 80,
      percent2: 20
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'isMobile'
    ]),
    components () {

    }
  },
  methods: {
    initPage () {
      // ignore
    },
    assetPercentage (percentage) {
      return `${percentage}%`
    }
  },
  mounted () {
    this.initPage()
  }
}
