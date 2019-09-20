const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Character'
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Character'
    }
  ],
  village: {
    type: 'String',
    enum: ['Leaf', 'Cloud', 'Mist', 'Rock', 'Sand', 'Sound']
  }
})

module.exports = model('Team', schema)
