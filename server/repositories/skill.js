const model = require('../models/skill')

const getAll = (characterLevel, ninjaRank, element) => {
  return model.find({
    requiredLevel: { $lt: characterLevel + 1 },
    requiredNinjaRank: { $lt: requiredNinjaRank + 1 },
    $or: [{ element }, { element: 'neutral' }]
  })
}

const getById = id => model.findById(id)

const insert = data => model.create(data)

const getByCode = code => model.findOne({ code })

// const update = (id, data) => model.findByIdAndUpdate(id, data)

const remove = _id => model.findOneAndRemove({ _id })

module.exports = {
  getAll,
  getById,
  getByCode,
  insert,
  // update,
  remove
}
