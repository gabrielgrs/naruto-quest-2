const { Schema, model } = require('mongoose')

const schema = new Schema({
  code: { type: Number, unique: true, required: true },
  name: String,
  price: Number,
  value: Number,
  usageType: {
    type: String,
    enum: ['weapon', 'trunk', 'head', 'arms', 'legs', 'feets']
  },
  image: String
})

module.exports = model('Equipment', schema)
