const repository = require('../repositories/message')
const userRepository = require('../repositories/user')

async function getAll(req, res) {
  try {
    const data = await repository.getAll()

    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

async function insert(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const { message, receiver } = req.body

    const data = await repository.insert(
      selectedCharacter._id,
      receiver,
      message
    )

    res.status(200).send(data)
  } catch (error) {
    res.handleError(500, error)
  }
}

module.exports = {
  getAll,
  insert
}
