import member from './modules/member'
import backend from './modules/backend'

var routes = [
  ...member,
  ...backend
]

export default routes
