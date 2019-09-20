const mailerService = require('../services/mailer')
const serverConfigs = require('../config/general')

async function sendMessage(req, res) {
  try {
    const { from, subject, message } = req.body

    const data = mailerService.sendEmail({ from, subject, message })
    res.status(200).send({ data, message: 'Feedkback enviado com sucesso!' })
  } catch (error) {
    res.handleError(500, error)
  }
}

async function getServerStatus(req, res) {
  try {
    const data = {
      version: serverConfigs.serverVersion1,
      underMaintenance: serverConfigs.serverUnderMaintenance
    }

    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function testServer(req, res) {
  try {
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    var timer = setInterval(async () => {
      const repository = require('../repositories/item')
      await repository.getAll()
      await repository.getAll()
      await repository.getAll()
      await repository.getAll()
      await repository.getAll()
      await repository.getAll()
      const data = await repository.getAll()
      res.send(data)

      res.flush()
    }, 2000)

    res.on('close', () => clearInterval(timer))
  } catch (error) {
    res.handleError(500, error)
  }
}

module.exports = {
  sendMessage,
  getServerStatus,
  testServer
}
