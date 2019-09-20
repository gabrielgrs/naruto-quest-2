const model = require('../models/item')

const getAll = () => model.find({})

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
