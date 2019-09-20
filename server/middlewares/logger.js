const loggerModel = require('../models/logger')

const winston = require('winston')
const Youch = require('youch')

const winstonLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { date: new Date() },
  transports: [
    new winston.transports.File({
      filename: 'logs/errors.log',
      level: 'error'
    })
  ]
})

async function logger(req, res, next) {
  res.handleError = async (statusCode, error, message) => {
    winstonLogger.error({
      message: error.toString(),
      status: statusCode
    })

    loggerModel.create({ statusCode, message: error.toString() })

    console.log(error)
    const messageToSend = message || 'Falha ao processar sua requisição'

    if (process.env.NODE_ENV === 'dev') {
      return new Youch(error, req).toHTML().then(html => {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(html)
        res.end()
      })
    }

    return res
      .status(statusCode)
      .send({ error: error.toString(), messageToSend })
  }

  next()
}

module.exports = {
  logger
}
