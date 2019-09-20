const model = require('../models/quest')

// TODO: remove needTeam: undefined after migration
const getAll = (characterLevel, characterHasTeam) =>
  model
    .find({
      requiredLevel: { $lt: characterLevel + 1 },
      $or: [
        { needTeam: undefined },
        { needTeam: false },
        { needTeam: characterHasTeam }
      ]
    })
    .sort({ requiredLevel: 1 })

const getById = id => model.findById(id)

const insert = data => model.create(data)

const update = (id, data) => model.findByIdAndUpdate(id, data)

const remove = _id => model.findOneAndRemove({ _id })

const getByCode = code => model.findOne({ code })

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove,
  getByCode
}
