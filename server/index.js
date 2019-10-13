const SocketIO = require('socket.io')
const cronService = require('./services/cron')
const { manipulateSocket } = require('./services/socket')

const app = require('./config/app')

require('./database')

const port = process.env.PORT || 3003

const server = require('http').createServer(app)
const io = require('socket.io')(server)

// Socket
let socketInfos = {
  usersWaitingForPVP: []
}
io.on('connection', socket => manipulateSocket(socket, io, socketInfos))

server.listen(port, () => console.log(`server listening on port: ${port}`))

cronService.executeCron()

module.exports = app
