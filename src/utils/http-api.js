import axios from 'axios'
import config from '@/config'

function dataAdapter (fn) {
  // eslint-disable-next-line standard/no-callback-literal
  return (res) => {
    const response = res.response || res
    fn && fn({
      status: response.status,
      statusText: response.status,
      body: response.data,
      headers: response.headers || (res.config && res.config.headers) || {},
      originalResponse: res
    })
  }
}

const headerObject = {
  'Cache-Control': 'no-cache'
}

function getHeaders (headerParams = {}) {
  return {
    ...headerObject,
    ...headerParams
  }
}

export default {
  getDataViaApi (path, cb, errorHandler, headerParams = {}) {
    axios.get(config.getApiPath(path), {
      headers: getHeaders(headerParams)
    })
        .then(dataAdapter(cb))
        .catch(dataAdapter(errorHandler))
  },

  postDataViaApi (path, cb, errorHandler, data, headerParams = {}) {
    axios.post(config.getApiPath(path), data, {
      headers: getHeaders(headerParams)
    })
        .then(dataAdapter(cb))
        .catch(dataAdapter(errorHandler))
  },

  deleteDataViaApi (path, cb, errorHandler, headerParams = {}) {
    axios.delete(config.getApiPath(path), {
      headers: getHeaders(headerParams)
    })
        .then(dataAdapter(cb))
        .catch(dataAdapter(errorHandler))
  },

  putDataViaApi (path, cb, errorHandler, data, headerParams = {}) {
    axios.put(config.getApiPath(path), data, {
      headers: getHeaders(headerParams)
    })
        .then(dataAdapter(cb))
        .catch(dataAdapter(errorHandler))
  },
  getHeaders
}
