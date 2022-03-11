import config from '@/config'
import httpApi from '@/utils/http-api'

export default {
    getUser: (cb, errHandler) => {
        httpApi.getDataViaApi(config.api.backend.user, cb, errHandler)
    },
    getProjectList: (cb, errHandler) => {
        httpApi.getDataViaApi(config.api.backend.projectList, cb, errHandler)
    },
    getHistoryList: (cb, errHandler) => {
        httpApi.getDataViaApi(config.api.backend.historyList, cb, errHandler)
    },
    postClaimRewards: (cb, errHandler) => {
        httpApi.postDataViaApi(config.api.backend.claimRewards, cb, errHandler)
    }
}
