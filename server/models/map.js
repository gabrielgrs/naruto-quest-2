const { Schema, model } = require('mongoose')

const schema = new Schema({
  code: {
    type: Number
  },
  parts: [
    {
      _id: false,
      content: {
        data: Object,
        type: {
          type: String,
          enum: ['village', 'enemy', 'item', undefined]
        }
      },
      coordinate: {
        x: Number,
        y: Number
      }
    }
  ]
})

module.exports = model('Map', schema)
