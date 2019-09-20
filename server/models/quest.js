const { Schema, model } = require('mongoose')

const schema = new Schema({
  code: { type: Number, unique: true, required: true },
  name: String,
  // In minutes
  duration: Number,
  gold: Number,
  exp: Number,
  requiredLevel: Number,
  needTeam: {
    type: Boolean,
    default: false
  },
  ranking: {
    type: String,
    enum: ['D', 'C', 'B', 'A', 'S'],
    required: true
  },
  advanceRank: { type: Boolean, default: false },
  // requiredRank: String,
  image: String
})

module.exports = model('Quest', schema)
