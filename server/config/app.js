const express = require('express')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')

const router = require('../router')
const { logger } = require('../middlewares/logger')
const { auth } = require('../middlewares/auth')

require('../database')

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

//Static file declaration
app.use(express.static(path.join(__dirname, '../build')))

// Serve favicon
app.get('/favicon', (req, res) => {
  res.sendfile(path.join((__dirname = 'build/favicon.ico')))
})

app.get('/*', (req, res) => {
  res.sendfile(path.join((__dirname = 'build/index.html')))
})

module.exports = app
