const repository = require('../repositories/team')
const userRepository = require('../repositories/user')
const characterRepository = require('../repositories/character')

async function getAll(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const data = await repository.getAll(selectedCharacter.village)

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
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const data = await repository.insert({
      owner: selectedCharacter._id,
      name: req.body.teamName,
      village: selectedCharacter.village
    })

    await characterRepository.enterInTeam(selectedCharacter._id, data._id)

    res.status(201).send({ message: 'Inclusão realizada com sucesso!', data })
  } catch (error) {
    res.handleError(500, error)
  }
}

async function requestJoinTheTeam(req, res) {
  try {
    // TODO: create request to enter in a team
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)

    const { teamId } = req.body

    const data = await repository.insertMemberIntoATeam(
      teamId,
      selectedCharacter._id
    )
    await characterRepository.enterInTeam(selectedCharacter._id, teamId)

    res.status(201).send({ message: 'Inclusão realizada com sucesso!', data })
  } catch (error) {
    res.handleError(500, error)
  }
}
module.exports = {
  getAll,
  getById,
  insert,
  requestJoinTheTeam
}
