import {mapActions, mapGetters} from 'vuex'
import { epochToDateFormat } from '@/utils/date'


export default {
  name: 'ProjectSection',
  data () {
    return {
      percent1: 0,
      percent2: 100
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'isMobile'
    ]),
    ...mapGetters('cinta-bumi.backend', ['projectList']),

    streetName () {
      return this.projectList[0].streetName;
    },
    city () {
      return this.projectList[0].city + ', ' + this.projectList[0].province + ', ' +this.projectList[0].country;
    },
    numberTreesPlanted () {
      return this.projectList[0].currentTreesPlanted;
    },
    deadline() {
      return epochToDateFormat(this.projectList[0].deadlineTimestamp)
    },
    components () {

    }
  },
  methods: {
    initPage () {
      this.getProjectList({
        success: this.successAlert,
        fail: this.failAlert
      })
    },
    successAlert () {
      this.percent1 = (this.projectList[0].currentTreesPlanted / this.projectList[0].numberOfTreesNeeded) * 100;
      this.percent2 = this.percent2 - this.percent1;
    },
    failAlert() {
      console.log('fail')
    },
    ...mapActions('cinta-bumi.backend', ['getProjectList']),
    assetPercentage (percentage) {
      return `${percentage}%`
    }
  },
  created () {
    this.initPage()
  }
}
