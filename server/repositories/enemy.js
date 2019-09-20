const model = require('../models/enemy')

const getAll = characterLevel =>
  model.find({ level: { $lt: characterLevel + 1 } }).sort({ level: 1 })

const getById = id => model.findById(id)

const insert = data => model.create(data)

const remove = _id => model.findOneAndRemove({ _id })

const getByCode = code => model.findOne({ code })

module.exports = {
  getAll,
  getById,
  insert,
  remove,
  getByCode
}
