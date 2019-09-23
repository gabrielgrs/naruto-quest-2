const app = require('express')()
const authService = require('../services/auth')

const routes = [
  ...require('./routes/user'),
  ...require('./routes/character'),
  ...require('./routes/item'),
  ...require('./routes/equipment'),
  ...require('./routes/enemy'),
  ...require('./routes/skill'),
  ...require('./routes/job'),
  ...require('./routes/battle'),
  ...require('./routes/quest'),
  ...require('./routes/team'),
  ...require('./routes/base'),
  // ...require('./routes/billing'),
  ...require('./routes/vip'),
  ...require('./routes/message')
]

function createRoute({ component, method, path, action, needAuthentication }) {
  console.log(
    `${String(method).toUpperCase()}: ${
      needAuthentication ? 'private' : 'public'
    } ${action} ${path}`
  )
  if (needAuthentication) {
    return app[method](
      path,
      authService.authorize,
      require(`../controllers/${component}`)[action]
    )
  }
  return app[method](path, require(`../controllers/${component}`)[action])
}

routes.map(route => createRoute(route))

module.exports = app
