const model = require('../models/billing')

function getAll() {
  return model.find({})
}

module.exports = {
  getAll
}
