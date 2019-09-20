const model = require('../models/battle')

const insert = data => model.create(data)

const update = (_id, { log, enemy, currentEnemyLife, delayedSkills }) => {
  return model.findOneAndUpdate(
    { _id },
    {
      enemy: enemy._id,
      $set: { currentEnemyLife, delayedSkills },
      $push: { log: log }
    }
  )
}

const getById = id => model.findById(id).populate({ path: 'enemy' })

const getByCode = code => model.findOne({ code })

const remove = _id => model.findOneAndRemove({ _id })

module.exports = {
  insert,
  update,
  getById,
  getByCode,
  remove
}
