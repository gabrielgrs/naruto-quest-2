const express = require('express')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const cronService = require('./services/cron')

const router = require('./router')
const { logger } = require('./middlewares/logger')
const { auth } = require('./middlewares/auth')

const migrations = require('./database/migrations')

const { enableCluster } = require('./config/cluster')

require('./database')

const port = process.env.PORT || 3003

// Server
const app = express()
app.use(compression())

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(logger)
app.use(auth)

app.use(morgan('dev'))

app.use('/api', router)

// Server static files
migrations.executeMigrations()

//Static file declaration
app.use(express.static(path.join(__dirname, '../build')))

// Serve favicon
app.get('/favicon', (req, res) => {
  res.sendfile(path.join((__dirname = 'build/favicon.ico')))
})

app.get('/*', (req, res) => {
  res.sendfile(path.join((__dirname = 'build/index.html')))
})

//start server
const startServer = () =>
  app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
  })

// Clustering
// process.env.NODE_ENV === 'production'
//   ? enableCluster(() => startServer())
//   : startServer()
startServer()

cronService.executeCron()

if (process.env.NODE_ENV === 'production') {
  console.log(process.env)
}

module.exports = app
