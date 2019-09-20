const { Schema, model } = require('mongoose')

const schema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'Character',
    required: true
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'Character'
  },
  text: String,
  // village: {
  //   type: 'String',
  //   enum: ['Leaf', 'Cloud', 'Mist', 'Rock', 'Sand', 'Sound']
  // },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('Message', schema)
