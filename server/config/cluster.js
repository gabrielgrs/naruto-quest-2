const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const enableCluster = callback => {
  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork()
    }
  } else {
    callback()
  }
}

module.exports = {
  enableCluster
}
