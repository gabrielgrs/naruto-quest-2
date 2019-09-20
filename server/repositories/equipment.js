const model = require('../models/equipment')

const getAll = () => model.find({}).sort({ price: 1 })

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
