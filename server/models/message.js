const { Schema, model } = require('mongoose')

const schema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'Character',
    required: true,
    autopopulate: true
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'Character',
    autopopulate: true
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

schema.plugin(require('mongoose-autopopulate'))
module.exports = model('Message', schema)
