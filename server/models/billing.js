const { Schema, model } = require('mongoose')

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  }
})

module.exports = model('Billing', schema)
