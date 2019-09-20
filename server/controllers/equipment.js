const repository = require('../repositories/equipment')

async function getAll(req, res) {
  try {
    const data = await repository.getAll()

    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params

    const data = await repository.getById(id)

    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function insert(req, res) {
  try {
    const data = await repository.insert(req.body)

    res.status(201).send({ message: 'Inclusão realizada com sucesso!', data })
  } catch (error) {
    res.handleError(500, error)
  }
}

module.exports = {
  getAll,
  getById,
  insert
}
