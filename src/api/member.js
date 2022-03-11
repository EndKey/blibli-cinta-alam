import config from '@/config'
import httpApi from '@/utils/http-api'

export default {
  getMemberProfile: (cb, errHandler) => {
    httpApi.getDataViaApi(config.api.member.profile, cb, errHandler)
  }
}
