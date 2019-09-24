const repository = require('../repositories/skill')
const userRepository = require('../repositories/user')

async function getAll(req, res) {
  try {
    const { _id } = await res.getCurrentUser()
    const { selectedCharacter } = await userRepository.getById(_id)
    // const rank = getRanking(selectedCharacter.ninjaRank)
    const data = await repository.getAll(
      selectedCharacter.level,
      selectedCharacter.ninjaRank,
      selectedCharacter.element
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

async function insert(req, res) {
  try {
    const data = await repository.insert(req.body)

    res.status(201).send({ message: 'Inclusão realizada com sucesso!', data })
  } catch (error) {
    res.handleError(500, error)
  }
}

// async function update(req, res) {
//   try {
//     const { id } = req.params

//     await repository.update(id, {})

//     res.status(201).send({ message: 'Atualização realizada com sucesso!' })
//   } catch (error) {
//     res.handleError(500, error)
//   }
// }

// async function remove(req, res) {
//   try {
//     const { id } = req.params

//     await repository.remove(id)

//     res.status(200).send({ message: 'Remoção realizada com sucesso!' })
//   } catch (error) {
//     res.handleError(500, error)
//   }
// }

module.exports = {
  getAll,
  getById,
  insert
  // update,
  // remove
}
