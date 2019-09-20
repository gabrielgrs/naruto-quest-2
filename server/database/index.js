const mongoose = require('mongoose')

const getDatabaseConnectionString = () => {
  if (process.env.DATABASE) {
    return process.env.DATABASE
  }

  if (process.env.NODE_ENV === 'development') {
    return 'mongodb://admin:admin123@ds217438.mlab.com:17438/narutogame_validations'
  }

  // Also old production
  return 'mongodb://admin:admin123@ds311968.mlab.com:11968/narutopocket'
}

const url = getDatabaseConnectionString()

// mongoose.pluralize(false)

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
  useUnifiedTopology: true
})

// mongoose.set('debug', true)
