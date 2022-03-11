import {mapActions, mapGetters} from 'vuex'
import { epochToDateWithTimeFormat } from '@/utils/date'


export default {
  name: 'CarbonOffsetHistory',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'currentUser',
      'isMobile'
    ]),
    ...mapGetters('cinta-bumi.backend', [
      'historyList',
      'historyListLength'
    ]),
    components () {

    },
    waktu () {
      var vm = this;
      return function (salut) {
        return epochToDateWithTimeFormat(salut) + ' WIB';
      };
    },
    fullName: function () {
      var vm = this;
      return function (salut) {
        return salut + ' ' + vm.firstName + ' ' + vm.lastName;
      };
    }
  },
  methods: {
    initPage () {
      this.getHistoryList({
        success: this.successAlert,
        fail: this.failAlert
      })
    },
    successAlert () {
      console.log('success nihhh')
    },
    failAlert() {
      console.log('fail')
    },
    ...mapActions('cinta-bumi.backend', ['getHistoryList'])
  },
  created () {
    this.initPage()
  }
}
