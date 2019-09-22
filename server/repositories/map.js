const model = require('../models/map')

const insert = data => model.create(data)

const findByCoordinate = (x, y) => model.find({ x, y })

// const updateMap = (map) => model.findOneAndUpdate({ code: 0 }, )

module.exports = {
  insert,
  findByCoordinate
  // updateMap
}
