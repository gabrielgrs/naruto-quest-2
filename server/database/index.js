const mongoose = require('mongoose')

const getDatabaseConnectionString = () => {
  return 'mongodb://admin:admin123@ds157571.mlab.com:57571/naruto-quest'
  if (process.env.DATABASE) {
    return process.env.DATABASE
  } else {
    console.log('No DATABASE env defined')
  }

  // if (process.env.NODE_ENV === 'development') {
  return 'mongodb://admin:admin123@ds311968.mlab.com:11968/narutopocket'
  // }

  // Development url
  // return 'mongodb://admin:admin123@ds217438.mlab.com:17438/narutogame_validations'
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
