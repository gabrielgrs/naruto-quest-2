const { Schema, model } = require('mongoose')

const schema = new Schema({
  statusCode: String,
  message: String,
  date: Date
})

module.exports = model('Logger', schema)
