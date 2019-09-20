const { Schema, model } = require('mongoose')

const schema = new Schema({
  code: { type: Number, unique: true, required: true },
  name: String,
  image: String,
  requiredLevel: { type: Number, default: 0 }
})

module.exports = model('Job', schema)
