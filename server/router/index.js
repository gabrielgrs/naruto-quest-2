const app = require('express')()

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

function createRoute({ component, method, path, action }) {
  console.log(`${String(method).toUpperCase()}: ${action} ${path}`)
  return app[method](path, require(`../controllers/${component}`)[action])
}

routes.map(route => createRoute(route))

module.exports = app
