const model = require('../models/user')
const { getMaxLife, getMaxMana, getMaxStamina } = require('../helpers')
const { dynamicPopulate } = require('./helpers/character')

const register = data => model.create(data)

const authenticate = data => dynamicPopulate(model.findOne(data))

const insertCharacter = (userId, characterId) =>
  model.findByIdAndUpdate(userId, { $push: { characters: characterId } })

const getAll = () => model.find({})

const getById = async id => {
  const response = await dynamicPopulate(model.findById(id))

  if (response.selectedCharacter) {
    const { level, attributes } = response.selectedCharacter
    response.selectedCharacter.stats.maxLife = getMaxLife(
      attributes.vitality,
      level
    )
    response.selectedCharacter.stats.maxMana = getMaxMana(
      attributes.intelligence,
      level
    )
    response.selectedCharacter.stats.maxStamina = getMaxStamina(level)
  }

  return response
}

const update = (id, data) => model.findByIdAndUpdate(id, data)

const remove = _id => model.findOneAndRemove({ _id })

module.exports = {
  register,
  authenticate,
  insertCharacter,
  getAll,
  getById,
  update,
  remove
}
