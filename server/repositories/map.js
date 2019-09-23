const model = require('../models/map')

const insert = data => model.create(data)

const findByCoordinate = (x, y) => model.find({ x, y })

module.exports = {
  insert,
  findByCoordinate
}
