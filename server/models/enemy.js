const { Schema, model } = require('mongoose')

const schema = new Schema({
  code: { type: Number, unique: true, required: true },
  name: String,
  level: Number,
  element: String,
  inStory: {
    type: Boolean,
    default: false
  },
  attributes: {
    attack: Number,
    intelligence: Number,
    vitality: Number
  },
  exp: Number,
  gold: Number,
  image: String
})

schema.plugin(require('mongoose-autopopulate'))
module.exports = model('Enemy', schema)
