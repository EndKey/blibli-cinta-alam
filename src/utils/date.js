const JANUARY = 'Jan'

const epochToDateFormat = (value) => {
  return new Date(value).format('DD MMM YYYY')
}

const epochToDateWithTimeFormat = (value) => {
  return new Date(value).format('DD MMMM YYYY, hh:mm')
}

const epochToRewardDateFormat = (value) => {
  return new Date(value).format('D MMM YYYY')
}

const epochToQuestDateFormat = (value) => {
  return new Date(value).format('D MMM YY')
}

const rewardsHistoryDate = (vm, value) => {
  if (!value) {
    return ''
  }
  // return 'Hari Ini' atau 'Kemarin' sesuai tanggal
  var now = new Date()
  var yesterday = new Date()
  yesterday.setDate(now.getDate() - 1)
  var val = new Date(value)

  // set date to zero
  now.setHours(0)
  now.setMinutes(0)
  now.setSeconds(0, 0)

  // set pointDate to zero
  val.setHours(0)
  val.setMinutes(0)
  val.setSeconds(0, 0)

  // set yesterday to zero
  yesterday.setHours(0)
  yesterday.setMinutes(0)
  yesterday.setSeconds(0, 0)

  // check today, yesterday, or else
  if (val.getTime() === now.getTime()) return vm.$t('time.today')
  if (val.getTime() === yesterday.getTime()) return vm.$t('time.yesterday')
  return val.format('DD MMM YYYY')
}
const loyaltyExpiredDate = () => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear() + 1;
  let expiredMonth = JANUARY
  return expiredMonth + ' ' + currentYear
}
export {
  epochToDateFormat,
  epochToDateWithTimeFormat,
  epochToRewardDateFormat,
  rewardsHistoryDate,
  loyaltyExpiredDate,
  epochToQuestDateFormat
}
