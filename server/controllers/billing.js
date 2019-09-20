const repository = require('../repositories/billing')

async function getAll(req, res) {
  try {
    const data = await repository.getAll()
    res.send(data)
  } catch (error) {
    res.send(error)
  }
}

module.exports = {
  getAll
}
