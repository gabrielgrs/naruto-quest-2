const { Schema, model } = require('mongoose')

const schema = new Schema({
  code: Number,
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'Character'
    // required: true
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
  toSupport: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('Message', schema)
