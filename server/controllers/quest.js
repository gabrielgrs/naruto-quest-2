const repository = require('../repositories/quest')
const userRepository = require('../repositories/user')
const characterRepository = require('../repositories/character')

async function getAll(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)
    const data = await repository.getAll(
      selectedCharacter.level,
      !!selectedCharacter.currentTeam
    )

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

async function getByCode(req, res) {
  try {
    const { code } = req.params

    const data = await repository.getByCode(code)

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

async function leaveQuest(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const data = await characterRepository.leaveQuest(selectedCharacter)

    res.status(201).send({ message: 'Inclusão realizada com sucesso!', data })
  } catch (error) {
    res.handleError(500, error)
  }
}

module.exports = {
  getAll,
  getById,
  getByCode,
  insert,
  leaveQuest
}
