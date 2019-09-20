const { Schema, model } = require('mongoose')

const schema = new Schema({
  code: { type: Number, unique: true, required: true },
  name: String,
  price: Number,
  lifeRecovery: Number,
  manaRecovery: Number,
  image: String
})

module.exports = model('Item', schema)
