import ApiRoutes from './api-routes'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let routes = ApiRoutes

// axios mock method
const mock = new MockAdapter(axios)
const methodMap = {
  GET: 'onGet',
  PUT: 'onPut',
  POST: 'onPost',
  DELETE: 'onDelete'
}

function applyMock (data) {
  data.forEach(d => {
    const params = [d.url]
    switch (d.method) {
      case 'GET': params.push({ params: d.param_values })
        break
      case 'PUT' || 'POST': params.push(d.param_values)
        break
    }
    mock[methodMap[d.method]](...params).reply(d.status || 200, d.response)
  })
}

applyMock(routes)

if (process.env.NODE_ENV !== 'production') {
  window.concatMockRoutes = function (newRoutes) {
    applyMock(newRoutes)
    routes = routes.concat(newRoutes)
    if (process.env.NODE_ENV !== 'production') {
      return routes
    }
  }
}

export default routes