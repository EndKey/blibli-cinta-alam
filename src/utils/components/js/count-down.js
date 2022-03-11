export default {
  name: 'CountDown',
  props: {
    time: {
      type: Number,
      default: 0
    },
    separator: {
      type: String,
      default: ' : '
    }
  },
  data () {
    return {
      timeCount: 0,
      interval: null
    }
  },
  computed: {
    hours () {
      let hour = Math.floor(this.timeCount / 3600)
      if (hour === 0) {
        return ''
      } else if (hour < 10) {
        return '0' + parseInt(hour, 10)
      }
      return hour + ''
    },
    seconds () {
      let second = this.timeCount % 60
      if (second < 10) {
        return '0' + parseInt(second, 10)
      }
      return second + ''
    },
    minutes () {
      let minute = Math.floor(this.timeCount % 3600 / 60)
      if (this.timeCount < 3600 && minute === 0) {
        return '00'
      } else if (minute < 10) {
        return '0' + parseInt(minute, 10)
      }
      return minute + ''
    }
  },
  created () {
    this.init(this.time)
  },
  destroyed () {
    clearInterval(this.interval)
  },
  methods: {
    init (val) {
      clearInterval(this.interval)
      if (val > 0) {
        this.timeCount = val
        const self = this
        this.interval = setInterval(self.intervalCallback, 1000)
      }
    },
    intervalCallback () {
      this.timeCount--
      if (this.timeCount <= 0) {
        clearInterval(this.interval)
        this.$emit('timeout')
        return false
      }
      return true
    }
  },
  watch: {
    time (val) {
      this.init(val)
    }
  }
}
