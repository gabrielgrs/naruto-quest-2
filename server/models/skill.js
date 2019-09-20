const { Schema, model } = require('mongoose')

const schema = new Schema({
  code: { type: Number, unique: true, required: true },
  name: String,
  value: Number,
  cost: Number,
  delay: Number,
  type: String,
  style: String,
  element: String,
  image: String,
  requiredLevel: Number,
  requiredNinjaRank: {
    type: String,
    enum: ['Student', 'Genin', 'Chuunin', 'Jounin', 'ANBU', 'Sannin'],
    default: 'Student'
  },
  ranking: {
    type: String,
    enum: ['E', 'D', 'C', 'B', 'A', 'S']
  }
})

module.exports = model('Skill', schema)
